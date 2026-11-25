/**
 * Scrolls to a section by id. Returns false when it isn't on this page.
 *
 * Images and reveal animations above the section can change the page height while the smooth
 * scroll is running, so it can stop short. Once the scroll ends, it checks and corrects.
 */
export function scrollToSection(id: string): boolean {
  const target = document.getElementById(id);
  if (!target) return false;

  target.scrollIntoView();

  let done = false;
  const correct = () => {
    if (done) return;
    done = true;
    window.removeEventListener("scrollend", correct);
    const top = target.getBoundingClientRect().top;
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    // Same alignment scrollIntoView gives, within a few pixels; the last section may not reach the top.
    if (Math.abs(top) > 40 && !atBottom) target.scrollIntoView({ behavior: "instant" as ScrollBehavior });
  };
  window.addEventListener("scrollend", correct);
  // Browsers without the scrollend event (older Safari): check once the smooth scroll has had time.
  window.setTimeout(correct, 1500);
  return true;
}
