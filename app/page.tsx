"use client";

import { useState, useEffect } from "react";

const line1 = "Төрсөн өдрийн";
const line2 = "мэнд хүргэе";
const totalLen = line1.length + line2.length;

const heartMessage =
  'Төрсөн өдрийн мэнд хүргэе, Номио 🎂\n\nЧамд хэлэхийг хүссэн маш олон зүйл надад байсан ч нүүр тулж уулзахдаа юу ч хэлж чадалгүй, юу ярихаа ч мэдэхгүй байсаар өнгөрсөн. Хүн болгонд хайр ямар байдгийг мэдрүүлдэг нэг хүн байдаг гэдэг — миний хувьд тэр хүн нь чи юм.\n\nМагадгүй чиний хувьд би тийм хүн биш байж болох. Би чамд заримдаа муухай хандсан юм шиг санагдаж байна, үнэхээр уучлаарай. Чи надад үргэлж санаа тавьж, "яаж байна" гэж асууж, зүгээр л их халамж, их хайр өгдөг байсан гэдгийг би одоо илүү ойлгож байна.\n\nХарин би чамд тийм их зүйл өгч чадаагүй юм байна. Гэхдээ энэ нь гэмшиж байна гэдэг утгаараа биш — харин хайр гэж юу байдгийг мэдрүүлсэнд чинь баярлаж байна. Би нэг удаа чамайг алдсан… тэр бол миний алдаа. Тэр үед чамд хайртай байсан хэрнээ яагаад үүнийг хэлж чадалгүй явснаа одоо хүртэл ойлгодоггүй.\n\nҮнэнээ хэлэхэд, чамайг дахиж алдмааргүй байна. Чамайг хайрлаж, хамгаалж, хамтдаа хэцүү зүйлсийг даван туулж, чамайг аль болох тайван, аз жаргалтай байлгаж, инээмсэглэж байгааг чинь харахыг хүсэж байна. Бас өөрийнхөө хамгийн сайн хувилбар руу хүрэхийг хичээгээд, зүгээр л чамтай хамт байхыг хүсэж байна. Чиний дуртай зүйлсийг ойлгож, өдөр чинь хэр өнгөрснийг сонсоод хамтдаа инээмсэглэж суухыг хүсэж байна.\n\nГэхдээ нөгөө талаас, зөвхөн өөрийгөө бодож байгаа мэт мэдрэмж төрүүлэхийг хүсэхгүй байна. Хэрвээ чамд надад байсан тэр сэтгэл байхгүй болсон бол би ингэж байх нь чамд хэцүү байх. Үнэхээр хайртай хүн гэдэг нь заримдаа түүнийг тавьж явуулахыг хэлдэг гэдэг шүү дээ. Тийм болохоор аль нь зөв, аль нь буруу гэдгийг би мэдэхгүй байна — хайрныхаа төлөө тэмцэх үү, эсвэл чиний аз жаргалтай байх орон зайг хүндлээд явуулах уу…\n\nЧи ямар ч шийдвэр гаргасан би хүлээж авна. Хэрвээ нэг өдөр надад дахин боломж олговол би хүлээж чадна. Магадгүй энэ амархан, хурдан зүйл биш байх, гэхдээ би хичээх болно. Хэрвээ үгүй бол би бас ойлгоно.\n\nХавар болж байна, битгий ядарч байгаарай. Дархлаагаа дэмжээд, эрт унтаж, хоол ундаа сайн идээрэй. Enjoy ur twenties ❤️';

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

const topFlowers = ["🌸", "🌺", "💮", "🌷", "🌼", "🌸", "🌺", "💮"];
const bottomFlowers = ["🌷", "💐", "🌸", "🌺", "🌼", "🌷", "💐", "🌸"];
const leftFlowers = [
  "🌸",
  "🌺",
  "🌷",
  "💐",
  "🌼",
  "🌸",
  "🌺",
  "🌷",
  "💐",
  "🌼",
];
const rightFlowers = [
  "💮",
  "🌼",
  "🌻",
  "🌷",
  "🌸",
  "💮",
  "🌼",
  "🌻",
  "🌷",
  "🌸",
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

function LetterRow({
  text,
  globalOffset,
  showCursor,
  onTap,
  done,
}: {
  text: string;
  globalOffset: number;
  showCursor: boolean;
  onTap?: () => void;
  done: boolean;
}) {
  return (
    <div
      className="letter-row"
      onClick={done ? onTap : undefined}
      style={{ cursor: done ? "pointer" : "default" }}
    >
      {text.split("").map((char: string, i: number) => (
        <span key={i} className="char-wrap">
          <span className="petal-top">
            {topFlowers[(globalOffset + i) % topFlowers.length]}
          </span>
          <span className="char">{char === " " ? "\u00A0" : char}</span>
          <span className="petal-bot">
            {bottomFlowers[(globalOffset + i) % bottomFlowers.length]}
          </span>
        </span>
      ))}
      {showCursor && (
        <span className="cursor" aria-hidden>
          |
        </span>
      )}
    </div>
  );
}

export default function BirthdayPage() {
  const [displayCount, setDisplayCount] = useState(0);
  const [displayedHeart, setDisplayedHeart] = useState("");
  const [mainDone, setMainDone] = useState(false);
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const [floatingQuotes, setFloatingQuotes] = useState<FloatingQuote[]>([]);
  const heartDone = displayedHeart.length >= heartMessage.length;

  // Confetti init
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

  // Type both lines sequentially
  useEffect(() => {
    if (displayCount >= totalLen) {
      setMainDone(true);
      return;
    }
    const t = setTimeout(() => setDisplayCount((c) => c + 1), 130);
    return () => clearTimeout(t);
  }, [displayCount]);

  // Type heart message after main text
  useEffect(() => {
    if (!mainDone) return;
    let i = 0;
    const outer = setTimeout(() => {
      const inner = setInterval(() => {
        if (i < heartMessage.length) {
          setDisplayedHeart(heartMessage.slice(0, i + 1));
          i++;
        } else clearInterval(inner);
      }, 60);
      return () => clearInterval(inner);
    }, 700);
    return () => clearTimeout(outer);
  }, [mainDone]);

  // Tap → 1 floating quote
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

  // How many chars of each line to show
  const shown1 = Math.min(displayCount, line1.length);
  const shown2 = Math.max(0, displayCount - line1.length);
  const line1Text = line1.slice(0, shown1);
  const line2Text = line2.slice(0, shown2);

  const line1Typing = displayCount <= line1.length && !mainDone;
  const line2Typing = displayCount > line1.length && !mainDone;

  // Progressive side flowers: reveal one per ~2 chars typed
  const flowersToShow = Math.ceil(
    (displayCount / totalLen) * leftFlowers.length,
  );

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

      {/* Left flowers — appear one by one as typing progresses */}
      <div aria-hidden className="side-flowers side-left">
        {leftFlowers.map((f, i) => {
          const visible = i < flowersToShow;
          return (
            <span
              key={i}
              className="side-flower"
              style={{
                animationDelay: `${i * 0.28}s`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-55px)",
                transition:
                  "opacity 0.5s ease, transform 0.6s cubic-bezier(.34,1.4,.64,1)",
              }}
            >
              {f}
            </span>
          );
        })}
      </div>

      {/* Right flowers — appear one by one as typing progresses */}
      <div aria-hidden className="side-flowers side-right">
        {rightFlowers.map((f, i) => {
          const visible = i < flowersToShow;
          return (
            <span
              key={i}
              className="side-flower"
              style={{
                animationDelay: `${i * 0.22}s`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(55px)",
                transition:
                  "opacity 0.5s ease, transform 0.6s cubic-bezier(.34,1.4,.64,1)",
              }}
            >
              {f}
            </span>
          );
        })}
      </div>

      {/* Main content */}
      <div className="main-content">
        {/* Line 1 */}
        <LetterRow
          text={line1Text}
          globalOffset={0}
          showCursor={line1Typing}
          onTap={handleTitleTap}
          done={mainDone}
        />

        {/* Line 2 — only render once typing reaches it */}
        {displayCount > line1.length && (
          <LetterRow
            text={line2Text}
            globalOffset={line1.length}
            showCursor={line2Typing}
            onTap={handleTitleTap}
            done={mainDone}
          />
        )}

        {/* Heart message */}
        {mainDone && (
          <div className="heart-card">
            <p>
              {displayedHeart}
              {!heartDone && (
                <span className="cursor small" aria-hidden>
                  |
                </span>
              )}
            </p>
          </div>
        )}
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
            0 0 8px rgba(255, 100, 160, 0.7),
            0 2px 10px rgba(200, 40, 100, 0.3);
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

        /* ── Side flowers ── */
        .side-flowers {
          position: fixed;
          top: 50%;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 2;
          pointer-events: none;
          transition:
            opacity 0.7s ease,
            transform 0.8s cubic-bezier(0.34, 1.4, 0.64, 1);
        }
        .side-left {
          left: 4px;
          transform: translateY(-50%);
        }
        .side-right {
          right: 4px;
          transform: translateY(-50%);
        }
        .side-flower {
          font-size: 22px;
          display: block;
          animation: sideWave 2.4s ease-in-out infinite alternate;
        }
        @keyframes sideWave {
          from {
            transform: scale(0.85) rotate(-9deg);
          }
          to {
            transform: scale(1.32) rotate(9deg);
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
          align-items: flex-end;
          gap: 1px;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }
        .char-wrap {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          animation: popIn 0.28s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
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
        .petal-top,
        .petal-bot {
          font-size: 19px;
          line-height: 1;
          animation: petalBob 1.8s ease-in-out infinite alternate;
        }
        @keyframes petalBob {
          from {
            transform: scale(0.88) translateY(1px);
          }
          to {
            transform: scale(1.28) translateY(-2px);
          }
        }
        .char {
          font-size: 36px;
          font-weight: 900;
          color: #7a0c3e;
          text-shadow:
            1px 1px 0 #ffaacc,
            0 0 20px rgba(255, 80, 140, 0.55),
            0 3px 8px rgba(180, 20, 80, 0.2);
          line-height: 1.15;
          font-family: Georgia, "Times New Roman", serif;
        }
        .cursor {
          font-size: 36px;
          color: #c44477;
          animation: blink 0.75s step-end infinite;
          font-weight: bold;
          align-self: center;
          margin-bottom: 19px;
        }
        .cursor.small {
          font-size: 15px;
          margin-bottom: 0;
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
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
          animation: slideUp 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          max-width: 340px;
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
