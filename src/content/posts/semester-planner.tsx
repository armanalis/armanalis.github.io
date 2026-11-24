import React from "react";
import type { Post } from "../types";
import cover from "../../assets/images/semester-planner.webp";
import coursePage from "../../assets/images/semester-planner-course.webp";

const post: Post = {
  slug: "semester-planner",
  title: "Semester Planner",
  date: "2026-10-04",
  summary: "I kept getting lost in Polito's calendar, so I built a planner for lectures, course notes, study blocks and focus time.",
  tags: ["React", "TypeScript", "Vite", "Vercel", "Redis", "OCR"],
  cover,
  coverAlt: "Semester Planner weekly calendar",
  github: "https://github.com/armanalis/semester-planner",
  live: "https://semester-planner-five.vercel.app/",
  liveLabel: "Open Semester Planner",
  body: (
    <>
      <p>
        I made this app because of a problem I've had since I joined Politecnico di Torino in 2022. Me and lots
        of my friends have suffered from the same issue: it's really easy to get lost in Polito's calendar.
      </p>
      <p>
        The job of this app is to make following lectures easier and to keep notes for each course. Every course
        has its own page where you can add the exam date and some more information about the course, and, most
        importantly (probably), take notes during and after the lecture.
      </p>
      <figure>
        <img
          src={coursePage}
          alt="Course page for Information Theory for Data Science with exam date, to-dos, a project, study blocks and timetable"
          loading="lazy"
        />
        <figcaption>One of my course pages.</figcaption>
      </figure>
      <p>
        You can see your weekly calendar with your courses, remove the ones you don't need, and add your
        meetings, activities, or even study blocks where you will study for that course (for sure!!!). You can
        also sync your devices with each other; I use it on both my phone and my laptop.
      </p>
      <p>
        I also added a focus timer. The default is pomodoro (I mostly use 50-10), and there are some statistics
        for fun: how many hours you studied, your streaks, how many to-dos you finished and so on.
      </p>

      <h2>A few more things</h2>
      <ul>
        <li>
          You don't have to type your timetable in. Upload a screenshot of your weekly schedule and it turns into
          your classes. It's read right in your browser, for free, and nothing is sent anywhere.
        </li>
        <li>If you skip a class, it adds a catch-up to-do so you don't forget to make up for it.</li>
        <li>Notes support Markdown and LaTeX, so formulas actually look like formulas.</li>
        <li>There's a weekly review page to look back at how the week went.</li>
        <li>
          Your data stays in your browser, and there's a Backup button if you want a copy. English and Turkish,
          light and dark mode.
        </li>
      </ul>
      <p>
        I built it around my Data Science and Engineering program, but it works for any program. If you're at
        Polito too, give it a try.
      </p>
    </>
  ),
  tr: {
    summary: "Polito'nun takviminde sürekli kayboluyordum, o yüzden dersler, ders notları, çalışma blokları ve odak süresi için bir planlayıcı yaptım.",
    liveLabel: "Semester Planner'ı aç",
    body: (
      <>
        <p>
          Bu uygulamayı, 2022'de Politecnico di Torino'ya başladığımdan beri yaşadığım bir problem yüzünden yaptım.
          Ben ve birçok arkadaşım aynı şeyi yaşadık: Polito'nun takviminde kaybolmak çok kolay.
        </p>
        <p>
          Bu uygulamanın işi, dersleri takip etmeyi kolaylaştırmak ve her ders için not tutmak. Her dersin kendi
          sayfası var: sınav tarihini ve dersle ilgili diğer bilgileri ekleyebiliyorsun ve belki de en önemlisi,
          ders sırasında ve sonrasında o derse dair not alabiliyorsun.
        </p>
        <figure>
          <img
            src={coursePage}
            alt="Information Theory for Data Science ders sayfası: sınav tarihi, yapılacaklar, proje, çalışma blokları ve ders programı"
            loading="lazy"
          />
          <figcaption>Ders sayfalarımdan biri.</figcaption>
        </figure>
        <p>
          Haftalık takvimini derslerinle birlikte görebiliyorsun; ihtiyacın olmayanları silip toplantılarını,
          aktivitelerini, hatta o ders için çalışacağın çalışma bloklarını ekleyebiliyorsun (kesin çalışacaksın!!!).
          Birden fazla cihazını birbiriyle senkronize de edebiliyorsun; ben hem telefonda hem bilgisayarda
          kullanıyorum.
        </p>
        <p>
          Bir de odak sayacı ekledim. Varsayılanı pomodoro (ben genelde 50-10 kullanıyorum) ve eğlencesine birkaç
          istatistik var: kaç saat çalıştığın, serilerin, kaç yapılacak bitirdiğin falan.
        </p>

        <h2>Birkaç şey daha</h2>
        <ul>
          <li>
            Ders programını elle yazmana gerek yok. Haftalık programının ekran görüntüsünü yükle, derslerine
            dönüşsün. Görüntü tarayıcında okunuyor, ücretsiz ve hiçbir yere gönderilmiyor.
          </li>
          <li>Bir dersi atlarsan, unutmaman için telafi diye bir yapılacak ekliyor.</li>
          <li>Notlar Markdown ve LaTeX destekliyor, yani formüller gerçekten formül gibi görünüyor.</li>
          <li>Haftanın nasıl geçtiğine bakmak için haftalık değerlendirme sayfası var.</li>
          <li>
            Verilerin tarayıcında kalıyor, kopya istersen Yedekle butonu var. İngilizce ve Türkçe, açık ve koyu
            tema.
          </li>
        </ul>
        <p>
          Kendi Data Science and Engineering programıma göre yaptım ama her programla çalışıyor. Sen de
          Polito'daysan bir dene.
        </p>
      </>
    ),
  },
};

export default post;
