"use client";

import { useState, useEffect } from "react";

const line1 = "Happy";
const line2 = "Birthday";

const heartMessage =
  "Сайн уу? Номио, төрсөн өдрийн мэнд хүргэе 🎂 Би дотроо бодож байгаа бүх зүйлсээ чамд хэлэх гэж дээр уулзаад даан ч юу ч ярьж чадахгүй байсаар явсан юм байна. Хэрвээ одоо боломжтой бол үүнийг уншаарай.Хүн болгонд хайр ямар байдгийг мэдрүүлж өгсөн хүн гэж байдаг байх — миний хувьд тэр хүн бол чи. Чиний хувьд би биш байх л даа. Би чамд маш муухай хандаж байсан юм шиг санагдаад намайг үнэхээр уучлаарай. Чи байнга л надад санаа тавьж, намайг яаж байна, юу болж байна гэж асууж зүгээр л би маш их хайр чамаас авж байснаа ойлгосон юм л даа. Би чамд харин тийм ч их зүйл өгөөгүй юм байна лээ, гэхдээ энэ нь гэмшлийн мэдрэмжээр чамд хайртай байгаа гэсэн үг биш шүү. Надад хайр гэж юу байдгийг мэдрүүлсэнд баярлаа. Би чамайг нэг удаа алдсан шүүдээ, энэ миний алдаанаас л болсон. Би тэр үед чамд хайртай байсан хэрнээ яагаад энэ бүх үгнүүдийг холбоод хэлж чадахгүй байснаа одоо хүртэл гайхаж байна.Би үннийг хэлхэд чамайг дахиж алдмааргүй байна л даа. Чамайг хайрлаж, хамгаалж, хамтдаа хэцүү зүйлсийг даван гарч, чамайг юунд ч санаа зовинуулахгүй тайван байлгаж, аз жаргалтай төрхийг чинь харамаар байна, бас өөрийн байж болох хамгийн best хувилбартаа очихийг хичээж, зүгээр л чамтай хамт баймаар байна. Чиний дуртай зүйлсийг ойлгож, тэр өдөр юу болсон талаар чинь сонсоод инээлдээд байж баймаар байна л даа.Гэхдээ нөгөө талаасаа зөвхөн би өөрийгөө бодож байгаа мэт муухай мэдрэмж төрүүлмээргүй байна. Нэгэнт намайг гэх сэтгэл байхгүй болчихсон байхад би ингэж байгаа нь чамд муухай байгаа байх. Үнэхээр хайртай хүн бол түүнийг тавьж явуулах хэрэгтэй гэдэг шүүдээ. Би аль сонголт нь зөв, аль нь буруу гэдгийг үнэхээр мэдэхгүй байна л даа. Хайрийхаа төлөө тэмцэх үү, эсвэл тэр хүнийхээ аз жаргалтай байх орон зайг нь хүндлээд явуулах уу.Чи ямар ч шийдвэр гаргасан би хүлээж авна. Чи хэзээ нэгэн цагт надад боломж өгөх хүртэл хүлээх ч юм уу. Энэ тийм ч амархан, хурдан болохгүй байх гэхдээ л би хичээх болноо. Хэрвээ үгүй бол би бас л ойлгох болноо.Төрсөн өдрөөр нь ийм ядаргаатай их юм явуулсанд уучлаарай. Хавар болж байна, битгий ядрааарай, аль болох дархлаагаа дэмжээд, эрт унтаж, хоол ундаа сайн идээрэй.Enjoy ur twentiesss ❤️";

const quotes = [
  "Чи хөөрхөн юмаа 🌸",
  "Би чамд хайртай шүү 💖",
  "Хөөрхөн инээдэг шүү 🌺",
  "Ямар хөөрхөн хүн бэ 💫",
  "Чамд дурлаж байна 💝",
  "Инээмсэглэж байгаарай 🎀",
  "Чиний инээмсэглэл хөөрхөн юм аа ⭐",
  "Миний хамгийн дуртай хүн 💗",
  "Үргэлж баяртай байгаарай 🌷",
  "Чи бол миний гэрэл гэгээ 🌟",
];


interface ConfettiPiece {
  id: number;
  x: number;
  delay: number;
  duration: number;
  emoji: string;
}

interface FloatingQuote {
  id: number;
  text: string;
  x: number;
  y: number;
}

export default function BirthdayPage() {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const [floatingQuotes, setFloatingQuotes] = useState<FloatingQuote[]>([]);

  useEffect(() => {
    const emojis = ["🌸", "🌺", "✨", "💖", "🌷", "⭐", "💕", "🌼", "🎀", "💫"];
    setConfetti(
      Array.from({ length: 25 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 7,
        duration: 5 + Math.random() * 5,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
      })),
    );
  }, []);

  const handleTitleTap = () => {
    const q: FloatingQuote = {
      id: Date.now(),
      text: quotes[Math.floor(Math.random() * quotes.length)],
      x: 8 + Math.random() * 62,
      y: 15 + Math.random() * 55,
    };
    setFloatingQuotes((prev) => [...prev, q]);
    setTimeout(
      () => setFloatingQuotes((prev) => prev.filter((p) => p.id !== q.id)),
      2700,
    );
  };

  return (
    <div className="birthday-wrap">
      {/* Floating quotes */}
      {floatingQuotes.map((q) => (
        <span
          key={q.id}
          className="floating-quote"
          style={{ left: `${q.x}%`, top: `${q.y}%` }}
        >
          {q.text}
        </span>
      ))}

      {/* Confetti */}
      <div aria-hidden className="confetti-layer">
        {confetti.map((p) => (
          <span
            key={p.id}
            className="confetti-piece"
            style={{
              left: `${p.x}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          >
            {p.emoji}
          </span>
        ))}
      </div>


      {/* Main content */}
      <div className="main-content">
        {/* Title — shown instantly, letters pop in on mount */}
        <div className="letter-row" onClick={handleTitleTap}>
          {line1.split("").map((char, i) => (
            <span
              key={i}
              className="char-wrap"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className="char">{char}</span>
            </span>
          ))}
        </div>
        <div className="letter-row" onClick={handleTitleTap}>
          {line2.split("").map((char, i) => (
            <span
              key={i}
              className="char-wrap"
              style={{ animationDelay: `${(line1.length + i) * 0.05}s` }}
            >
              <span className="char">{char}</span>
            </span>
          ))}
        </div>

        {/* Heart message */}
        <div className="heart-card">
          <p>{heartMessage}</p>
        </div>
      </div>

      <style jsx global>{`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        html,
        body {
          height: 100%;
          overscroll-behavior: none;
        }

        .birthday-wrap {
          min-height: 100vh;
          min-height: 100dvh;
          background: linear-gradient(
            155deg,
            #ff7ab8 0%,
            #ff9ccf 18%,
            #ffb8de 40%,
            #ffd4ec 65%,
            #fff0f8 100%
          );
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── Floating quotes ── */
        .floating-quote {
          position: fixed;
          z-index: 10;
          font-size: 18px;
          font-family: Georgia, serif;
          font-weight: 700;
          color: #8c1245;
          text-shadow:
            0 0 20px rgba(255, 160, 210, 1),
            0 0 8px rgba(255, 100, 160, 0.7);
          pointer-events: none;
          white-space: nowrap;
          animation: floatUp 2.6s ease-out forwards;
        }
        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(0.6);
            opacity: 0;
          }
          12% {
            transform: translateY(-10px) scale(1.1);
            opacity: 1;
          }
          75% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(-90px) scale(0.95);
            opacity: 0;
          }
        }

        /* ── Confetti ── */
        .confetti-layer {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }
        .confetti-piece {
          position: absolute;
          top: -32px;
          font-size: 18px;
          animation: confettiFall linear infinite;
        }
        @keyframes confettiFall {
          0% {
            transform: translateY(0) rotate(0deg) scale(0.7);
            opacity: 1;
          }
          80% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(110vh) rotate(480deg) scale(1.3);
            opacity: 0;
          }
        }


        /* ── Main content ── */
        .main-content {
          position: relative;
          z-index: 3;
          width: 100%;
          padding: 40px 52px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        /* ── Letter rows ── */
        .letter-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 2px;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          cursor: pointer;
        }
        .char-wrap {
          display: inline-flex;
          align-items: center;
          opacity: 0;
          animation: popIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes popIn {
          from {
            transform: translateY(-14px) scale(0.3);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
        .char {
          font-size: 54px;
          font-weight: 900;
          color: #c8960c;
          text-shadow:
            0 0 12px rgba(255, 220, 80, 0.8),
            0 2px 4px rgba(150, 90, 0, 0.4),
            1px 1px 0 #ffe066;
          line-height: 1.15;
          font-family: Georgia, "Times New Roman", serif;
        }

        /* ── Heart card ── */
        .heart-card {
          margin-top: 28px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 22px;
          padding: 20px 22px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow:
            0 8px 36px rgba(200, 60, 110, 0.24),
            inset 0 1px 0 rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 200, 225, 0.6);
          animation: slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          max-width: 340px;
          opacity: 0;
        }
        @keyframes slideUp {
          from {
            transform: translateY(24px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .heart-card p {
          font-size: 15px;
          color: #650c30;
          line-height: 1.95;
          font-family: Georgia, serif;
          text-align: center;
          white-space: pre-wrap;
        }
      `}</style>
    </div>
  );
}
