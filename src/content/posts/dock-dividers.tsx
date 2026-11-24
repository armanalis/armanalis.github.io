import React from "react";
import type { Post } from "../types";
import cover from "../../assets/images/dock-dividers.webp";
import editor from "../../assets/images/dock-dividers-editor.webp";

const post: Post = {
  slug: "dock-dividers",
  title: "Dock Dividers",
  date: "2026-11-22",
  summary: "A small macOS app that puts native-looking divider lines anywhere in the Dock, so you can group your apps.",
  tags: ["macOS", "Swift", "SwiftUI", "Accessibility API"],
  cover,
  coverAlt: "macOS Dock with a thin divider line between Calculator and Weather",
  github: "https://github.com/armanalis/dock-dividers",
  live: "https://dock-dividers.armanalis.workers.dev",
  liveLabel: "Download Dock Dividers",
  body: (
    <>
      <h2>Why I built it</h2>
      <p>
        My Dock kept growing: browsers, chat apps, editors and system tools all sat in one long row. macOS
        draws exactly one separator (before the Trash) and gives you no way to add your own, so finding an app
        meant scanning the whole Dock every time. I wanted to group apps the way I think about them, with a
        clean line between each group, and without the line looking like a hack.
      </p>

      <h2>How it solves it</h2>
      <p>
        You open the app, drag a divider between any two apps in a simple list, and press{" "}
        <strong>Apply to Dock</strong>. The Dock gets a thin line that looks just like Apple's own separator and
        follows light and dark mode.
      </p>
      <figure>
        <img src={editor} alt="Editor window with Dock apps in a list and a divider row between Calculator and Weather" loading="lazy" />
        <figcaption>Every Dock app and divider in one list. Drag, then Apply to Dock.</figcaption>
      </figure>

      <h2>How it works</h2>
      <ol>
        <li>
          <strong>Add Divider</strong> inserts Apple's own <code>small-spacer-tile</code> into the Dock: a
          half-icon-wide gap.
        </li>
        <li>
          The app reads each spacer's position through the Accessibility API (<code>AXSpacerDockItem</code>).
        </li>
        <li>
          A transparent, click-through window draws a thin line over each spacer, styled like the built-in
          separator.
        </li>
      </ol>
      <p>
        It works with the Dock at the bottom, left or right; on a side Dock the lines are horizontal. While a
        window is open it behaves like a normal app; close it and only a menu bar icon stays. Settings has
        language (English / Türkçe), Open at Login, Keep Lines After Quitting and the Accessibility status.
      </p>

      <h2>Limits</h2>
      <ul>
        <li>Lines follow the Dock 3 times per second, so they lag behind Dock magnification.</li>
      </ul>

      <h2>Try it</h2>
      <p>macOS 13+, Apple Silicon and Intel:</p>
      <pre>
        <code>curl -fsSL https://dock-dividers.armanalis.workers.dev/install.sh | sh</code>
      </pre>
      <p>
        Then allow it in <strong>System Settings → Privacy &amp; Security → Accessibility</strong>, so it can read
        where the Dock's icons are.
      </p>
    </>
  ),
  tr: {
    summary: "macOS Dock'un istediğin yerine native görünümlü ayraç çizgileri koyan küçük bir uygulama; uygulamalarını gruplayabilirsin.",
    liveLabel: "Dock Dividers'ı indir",
    body: (
      <>
        <h2>Neden yaptım</h2>
        <p>
          Dock'um sürekli büyüyordu: tarayıcılar, mesajlaşma uygulamaları, editörler ve sistem araçları hep tek uzun
          bir sırada duruyordu. macOS tam olarak bir ayraç çiziyor (Çöp Sepeti'nden önce) ve kendi ayracını eklemenin
          bir yolunu vermiyor; yani bir uygulamayı bulmak her seferinde bütün Dock'u taramak demekti. Uygulamaları
          kafamda düşündüğüm gibi gruplamak istedim, her grup arasında temiz bir çizgiyle ve o çizgi yama gibi
          durmadan.
        </p>

        <h2>Sorunu nasıl çözüyor</h2>
        <p>
          Uygulamayı açıyorsun, basit bir listede bir ayracı istediğin iki uygulamanın arasına sürüklüyorsun ve{" "}
          <strong>Dock'a Uygula</strong>'ya basıyorsun. Dock'ta Apple'ın kendi ayracına birebir benzeyen, açık ve koyu
          moda uyan ince bir çizgi beliriyor.
        </p>
        <figure>
          <img src={editor} alt="Dock uygulamalarının listelendiği ve Calculator ile Weather arasında bir ayraç satırı olan düzenleyici penceresi" loading="lazy" />
          <figcaption>Dock'taki tüm uygulamalar ve ayraçlar tek listede. Sürükle, sonra Dock'a Uygula.</figcaption>
        </figure>

        <h2>Nasıl çalışıyor</h2>
        <ol>
          <li>
            <strong>Ayraç Ekle</strong>, Apple'ın kendi <code>small-spacer-tile</code>'ını Dock'a ekliyor: yarım ikon
            genişliğinde bir boşluk.
          </li>
          <li>
            Uygulama her boşluğun yerini Erişilebilirlik API'si üzerinden okuyor (<code>AXSpacerDockItem</code>).
          </li>
          <li>
            Şeffaf, tıklamaları geçiren bir pencere her boşluğun üzerine, yerleşik ayraç gibi görünen ince bir çizgi
            çiziyor.
          </li>
        </ol>
        <p>
          Dock altta, solda ya da sağda olsa da çalışıyor; yandaki Dock'ta çizgiler yatay. Bir pencere açıkken normal
          bir uygulama gibi davranıyor; kapatınca sadece menü çubuğu ikonu kalıyor. Ayarlar'da dil (English /
          Türkçe), Girişte Aç, Çıkınca Çizgileri Koru ve Erişilebilirlik durumu var.
        </p>

        <h2>Sınırlar</h2>
        <ul>
          <li>Çizgiler Dock'u saniyede 3 kez takip ediyor, bu yüzden Dock büyütmesinin biraz gerisinde kalıyorlar.</li>
        </ul>

        <h2>Dene</h2>
        <p>macOS 13+, Apple Silicon ve Intel:</p>
        <pre>
          <code>curl -fsSL https://dock-dividers.armanalis.workers.dev/install.sh | sh</code>
        </pre>
        <p>
          Sonra Dock ikonlarının yerini okuyabilmesi için <strong>Sistem Ayarları → Gizlilik ve Güvenlik →
          Erişilebilirlik</strong>'te izin ver.
        </p>
      </>
    ),
  },
};

export default post;
