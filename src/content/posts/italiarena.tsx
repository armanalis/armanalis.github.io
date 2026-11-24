import React from "react";
import type { Post } from "../types";
import cover from "../../assets/images/language-quiz.webp";

const post: Post = {
  slug: "italiarena",
  title: "Italiarena",
  date: "2026-05-18",
  summary: "Four years of living in Italy, and I want my Italian to keep getting better. Popular apps felt like homework, so I built quick 1v1 matches and daily word games instead.",
  tags: ["Next.js", "Supabase", "Realtime", "LLM", "Groq"],
  cover,
  coverAlt: "Italiarena quiz game",
  github: "https://github.com/armanalis/italiarena",
  live: "https://italiarena.com",
  liveLabel: "Play Italiarena",
  body: (
    <>
      <p>
        I moved to Turin in 2022 to study at Politecnico di Torino, and Italy has been home for four years now.
        Italian is part of my everyday life here, and the more I use it, the more I want to sharpen it: a richer
        vocabulary, cleaner grammar and quicker answers in real conversations.
      </p>
      <p>
        I tried the popular apps (one of them rhymes with Buolingo), but they felt like homework: the same kinds
        of exercises over and over, built more around keeping a streak than around the language you actually hear
        in Italy. Me and most of my friends ended up doing just two minutes of Italian a day, only to keep our
        streaks alive. I wanted practice I'd look forward to opening, and actually stay for.
      </p>
      <p>
        So I built it: short, competitive and fun. Instead of flashcards, you play against real people. It
        started with Italian, which is where the name comes from, and now it also has English, German, Spanish
        and Danish.
      </p>

      <h2>What's inside</h2>

      <h3>Arena: live 1v1 matches</h3>
      <p>
        The main game. Ten timed questions per round on grammar, vocabulary, fill-in-the-blank and idioms. You get
        matched with someone at your level (A1 to C2), and the faster you answer correctly, the more points you
        get. If it's a tie after ten questions, one sudden-death question decides it. Nobody online? Play against
        a bot and start right away, no waiting.
      </p>

      <h3>Picture Duel</h3>
      <p>
        Pick a level and a topic, send the link to a friend, and name what's in the pictures before your
        60-second clock runs out, like a chess clock. In Hard mode the answer only counts with the right article.
      </p>

      <h3>Daily games</h3>
      <ul>
        <li>
          <strong>Wordle</strong>, but in the language you're learning.
        </li>
        <li>
          <strong>Word Wheel:</strong> a clue for every letter of the alphabet.
        </li>
        <li>
          <strong>Sprints</strong> for the things that never stick: articles (il·lo·la, der·die·das),
          un·uno·una, and prepositions (di·a·da, in·an·auf, in·on·at). These are my favorite.
        </li>
      </ul>
      <p>
        Each daily game gives you one scored round per day and level, then you can keep practicing. There's an
        archive of past days, and a Normal and a Hard mode.
      </p>

      <h3>Learning from mistakes</h3>
      <p>
        After every match you can review what you got wrong. Your mistakes come back on spaced review days until
        they stick, you can listen to the pronunciation, and an AI explains why an answer is right (gpt-oss-120b
        through the Groq API).
      </p>

      <h3>Friends and leaderboard</h3>
      <p>
        Add friends, challenge them, and see today's scores side by side (only scores, never answers). There's
        also a leaderboard if you're competitive like me.
      </p>

      <h3>Better questions, together</h3>
      <p>
        Players can report a bad question or send in their own. The AI checks new questions first, and then I
        review them, so the question bank keeps getting better.
      </p>

      <h3>Small things that matter</h3>
      <ul>
        <li>Opt-in reminders at the hour you choose: when your streak is at risk, reviews are due, or for a daily match.</li>
        <li>Add it to your home screen and it works like an app on iPhone and Android.</li>
        <li>Guest mode: you can play without signing up.</li>
      </ul>

      <h2>How it works</h2>
      <p>
        For the curious: it's Next.js on Vercel with Supabase (Postgres, Auth, Realtime). There's no separate game
        server; the match itself is a row in the database, and both players' browsers stay in sync with it.
        Timing comes from the database instead of the phones, and scores are calculated on the server, so matches
        stay fair even when someone's clock is off or someone tries to cheat.
      </p>
      <p>
        If you're learning one of these languages, come play a match with me.
      </p>
    </>
  ),
  tr: {
    summary: "Dört yıldır İtalya'da yaşıyorum ve İtalyancamın gelişmeye devam etmesini istiyorum. Popüler uygulamalar ödev gibi geldi, ben de onların yerine hızlı 1v1 maçlar ve günlük kelime oyunları yaptım.",
    liveLabel: "Italiarena'yı oyna",
    body: (
      <>
        <p>
          2022'de Politecnico di Torino'da okumak için Torino'ya taşındım ve dört yıldır İtalya benim evim. İtalyanca
          burada günlük hayatımın bir parçası ve ne kadar çok kullanırsam o kadar çok geliştirmek istiyorum: daha
          zengin bir kelime hazinesi, daha temiz bir gramer ve gerçek sohbetlerde daha hızlı cevaplar.
        </p>
        <p>
          Popüler uygulamaları denedim (biri Buolingo ile kafiyeli), ama hepsi ödev gibi geldi: aynı tür
          alıştırmalar tekrar tekrar, İtalya'da gerçekten duyduğun dilden çok seriyi korumaya göre tasarlanmış. Ben
          ve arkadaşlarımın çoğu sadece seri bozulmasın diye günde iki dakika İtalyanca çalışır olduk. Açmayı iple
          çekeceğim ve gerçekten başında kalacağım bir pratik istedim.
        </p>
        <p>
          Ben de yaptım: kısa, rekabetçi ve eğlenceli. Kartlarla ezber yerine gerçek insanlara karşı oynuyorsun.
          İtalyanca ile başladı, adı da oradan geliyor, şimdi İngilizce, Almanca, İspanyolca ve Danca da var.
        </p>

        <h2>İçinde neler var</h2>

        <h3>Arena: canlı 1v1 maçlar</h3>
        <p>
          Ana oyun. Her turda gramer, kelime, boşluk doldurma ve deyimler üzerine on süreli soru. Seviyendeki biriyle
          eşleşiyorsun (A1'den C2'ye) ve doğru cevabı ne kadar hızlı verirsen o kadar çok puan alıyorsun. On sorudan
          sonra berabere kalırsanız tek bir ani ölüm sorusu kazananı belirliyor. Çevrimiçi kimse yok mu? Bir bota
          karşı hemen başla, beklemek yok.
        </p>

        <h3>Picture Duel</h3>
        <p>
          Bir seviye ve konu seç, linki bir arkadaşına gönder ve 60 saniyelik saatin bitmeden resimlerde ne olduğunu
          söyle, satranç saati gibi. Zor modda cevap ancak doğru artikelle sayılıyor.
        </p>

        <h3>Günlük oyunlar</h3>
        <ul>
          <li>
            <strong>Wordle</strong>, ama öğrendiğin dilde.
          </li>
          <li>
            <strong>Word Wheel:</strong> alfabedeki her harf için bir ipucu.
          </li>
          <li>
            <strong>Sprint'ler</strong>, bir türlü oturmayan şeyler için: artikeller (il·lo·la, der·die·das),
            un·uno·una ve edatlar (di·a·da, in·an·auf, in·on·at). En sevdiklerim bunlar.
          </li>
        </ul>
        <p>
          Her günlük oyunda seviye başına günde bir puanlı tur var, sonra pratik yapmaya devam edebiliyorsun. Geçmiş
          günlerin arşivi ile Normal ve Zor mod da var.
        </p>

        <h3>Hatalardan öğrenmek</h3>
        <p>
          Her maçtan sonra yanlışlarını gözden geçirebiliyorsun. Hataların, oturana kadar aralıklı tekrar günlerinde
          geri geliyor, telaffuzu dinleyebiliyorsun ve bir yapay zeka cevabın neden doğru olduğunu açıklıyor
          (Groq API üzerinden gpt-oss-120b).
        </p>

        <h3>Arkadaşlar ve sıralama</h3>
        <p>
          Arkadaş ekle, onlara meydan oku ve bugünkü skorlarınızı yan yana gör (sadece skorlar, cevaplar asla).
          Benim gibi rekabetçiysen bir de sıralama tablosu var.
        </p>

        <h3>Daha iyi sorular, birlikte</h3>
        <p>
          Oyuncular hatalı bir soruyu bildirebiliyor ya da kendi sorularını gönderebiliyor. Yeni soruları önce yapay
          zeka kontrol ediyor, sonra ben inceliyorum; böylece soru bankası sürekli daha iyi oluyor.
        </p>

        <h3>Fark yaratan küçük şeyler</h3>
        <ul>
          <li>Seçtiğin saatte isteğe bağlı hatırlatmalar: serin tehlikedeyse, tekrar zamanı geldiyse ya da günlük maç için.</li>
          <li>Ana ekranına ekle, iPhone ve Android'de uygulama gibi çalışsın.</li>
          <li>Misafir modu: kayıt olmadan oynayabilirsin.</li>
        </ul>

        <h2>Nasıl çalışıyor</h2>
        <p>
          Merak edenler için: Vercel üzerinde Next.js ve Supabase (Postgres, Auth, Realtime). Ayrı bir oyun sunucusu
          yok; maçın kendisi veritabanında bir satır ve iki oyuncunun tarayıcısı da onunla senkron kalıyor. Zamanlama
          telefonlardan değil veritabanından geliyor ve skorlar sunucuda hesaplanıyor; yani birinin saati kaysa da ya
          da biri hile yapmaya çalışsa da maçlar adil kalıyor.
        </p>
        <p>Bu dillerden birini öğreniyorsan gel benimle bir maç at.</p>
      </>
    ),
  },
};

export default post;
