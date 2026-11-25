// Page position of an element, ignoring CSS transforms (the .reveal fade-in shifts sections 24px).
function pageTop(el: HTMLElement): number {
  let y = 0;
  for (let node: HTMLElement | null = el; node; node = node.offsetParent as HTMLElement | null) {
    y += node.offsetTop;
  }
  return y;
}

const USER_SCROLL_EVENTS = ["wheel", "touchstart", "keydown", "mousedown"] as const;

/**
 * Scrolls to a section by id. Returns false when it isn't on this page.
 *
 * Images loading above the section can change the page height during the smooth scroll, and the
 * browser then stops short or past it (sometimes without a scrollend event). So it watches the
 * scroll: whenever the page has stopped moving somewhere else, it jumps to the section again.
 * It gives up after a few seconds, or as soon as the visitor scrolls themselves.
 */
export function scrollToSection(id: string): boolean {
  const target = document.getElementById(id);
  if (!target) return false;

  const wanted = () =>
    Math.min(pageTop(target), document.documentElement.scrollHeight - window.innerHeight);

  // No behavior given: html { scroll-behavior } decides, so reduced motion is respected.
  window.scrollTo({ top: wanted() });

  let last = window.scrollY;
  let stillTicks = 0;
  let ticks = 0;
  let corrections = 0;
  let timer = 0;

  const stop = () => {
    window.clearTimeout(timer);
    USER_SCROLL_EVENTS.forEach((type) => window.removeEventListener(type, stop));
  };
  USER_SCROLL_EVENTS.forEach((type) => window.addEventListener(type, stop, { passive: true }));

  const check = () => {
    ticks += 1;
    stillTicks = Math.abs(window.scrollY - last) < 1 ? stillTicks + 1 : 0;
    last = window.scrollY;

    if (stillTicks >= 3) {
      if (Math.abs(window.scrollY - wanted()) <= 4) return stop();
      if (corrections >= 5) return stop();
      corrections += 1;
      stillTicks = 0;
      window.scrollTo({ top: wanted(), behavior: "instant" as ScrollBehavior });
    }
    if (ticks >= 80) return stop();
    timer = window.setTimeout(check, 100);
  };
  timer = window.setTimeout(check, 100);
  return true;
}
