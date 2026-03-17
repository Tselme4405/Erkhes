"use client";

import { useState, useEffect } from "react";

const line1 = "Happy";
const line2 = "Birthday";

const heartMessage =
  "Сайн уу? Номио, төрсөн өдрийн мэнд хүргэе 🎂\n\nБи дотроо бодож байгаа бүх зүйлсээ чамд хэлэх гэж дээр уулзаад даан ч юу ч ярьж чадахгүй байсаар явсан юм байна. Хэрвээ одоо боломжтой бол үүнийг уншаарай.Хүн болгонд хайр ямар байдгийг мэдрүүлж өгсөн хүн гэж байдаг байх — миний хувьд тэр хүн бол чи. Чиний хувьд би биш байх л даа. Би чамд маш муухай хандаж байсан юм шиг санагдаад намайг үнэхээр уучлаарай. Чи байнга л надад санаа тавьж, намайг яаж байна, юу болж байна гэж асууж зүгээр л би маш их хайр чамаас авж байснаа ойлгосон юм л даа. Би чамд харин тийм ч их зүйл өгөөгүй юм байна лээ, гэхдээ энэ нь гэмшлийн мэдрэмжээр чамд хайртай байгаа гэсэн үг биш шүү. Надад хайр гэж юу байдгийг мэдрүүлсэнд баярлаа. Би чамайг нэг удаа алдсан шүүдээ, энэ миний алдаанаас л болсон. Би тэр үед чамд хайртай байсан хэрнээ яагаад энэ бүх үгнүүдийг холбоод хэлж чадахгүй байснаа одоо хүртэл гайхаж байна.Би үннийг хэлхэд чамайг дахиж алдмааргүй байна л даа. Чамайг хайрлаж, хамгаалж, хамтдаа хэцүү зүйлсийг даван гарч, чамайг юунд ч санаа зовинуулахгүй тайван байлгаж, аз жаргалтай төрхийг чинь харамаар байна, бас өөрийн байж болох хамгийн best хувилбартаа очихийг хичээж, зүгээр л чамтай хамт баймаар байна. Чиний дуртай зүйлсийг ойлгож, тэр өдөр юу болсон талаар чинь сонсоод инээлдээд байж баймаар байна л даа.Гэхдээ нөгөө талаасаа зөвхөн би өөрийгөө бодож байгаа мэт муухай мэдрэмж төрүүлмээргүй байна. Нэгэнт намайг гэх сэтгэл байхгүй болчихсон байхад би ингэж байгаа нь чамд муухай байгаа байх. Үнэхээр хайртай хүн бол түүнийг тавьж явуулах хэрэгтэй гэдэг шүүдээ. Би аль сонголт нь зөв, аль нь буруу гэдгийг үнэхээр мэдэхгүй байна л даа. Хайрийхаа төлөө тэмцэх үү, эсвэл тэр хүнийхээ аз жаргалтай байх орон зайг нь хүндлээд явуулах уу.Чи ямар ч шийдвэр гаргасан би хүлээж авна. Чи хэзээ нэгэн цагт надад боломж өгөх хүртэл хүлээх ч юм уу. Энэ тийм ч амархан, хурдан болохгүй байх гэхдээ л би хичээх болноо. Хэрвээ үгүй бол би бас л ойлгох болноо.Төрсөн өдрөөр нь ийм ядаргаатай их юм явуулсанд уучлаарай. Хавар болж байна, битгий ядрааарай, аль болох дархлаагаа дэмжээд, эрт унтаж, хоол ундаа сайн идээрэй.Enjoy ur twentiesss ❤️";

interface ConfettiPiece {
  id: number;
  x: number;
  delay: number;
  duration: number;
  emoji: string;
}

export default function BirthdayPage() {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const [cardVisible, setCardVisible] = useState(false);

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

  return (
    <div className="birthday-wrap">
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
        {/* Title — tap to reveal card */}
        <div
          className="title-btn"
          onClick={() => setCardVisible(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setCardVisible(true)}
          aria-label="Happy Birthday — tap to reveal message"
        >
          <div className="letter-row">
            {line1.split("").map((char, i) => (
              <span key={i} className="char-wrap" style={{ animationDelay: `${i * 0.05}s` }}>
                <span className="char">{char}</span>
              </span>
            ))}
          </div>
          <div className="letter-row">
            {line2.split("").map((char, i) => (
              <span key={i} className="char-wrap" style={{ animationDelay: `${(line1.length + i) * 0.05}s` }}>
                <span className="char">{char}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Hint text */}
        {!cardVisible && (
          <p className="hint-text" aria-hidden>Happy Birthday дээр дар ✨</p>
        )}

        {/* Heart card — appears on tap */}
        {cardVisible && (
          <div className="heart-card">
            <p>{heartMessage}</p>
          </div>
        )}
      </div>

      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { height: 100%; overscroll-behavior: none; }

        .birthday-wrap {
          min-height: 100vh;
          min-height: 100dvh;
          background: linear-gradient(
            155deg,
            #ff7ab8 0%, #ff9ccf 18%, #ffb8de 40%, #ffd4ec 65%, #fff0f8 100%
          );
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── Confetti ── */
        .confetti-layer { position: fixed; inset: 0; pointer-events: none; z-index: 0; }
        .confetti-piece {
          position: absolute; top: -32px; font-size: 18px;
          animation: confettiFall linear infinite;
        }
        @keyframes confettiFall {
          0%   { transform: translateY(0)     rotate(0deg)   scale(0.7); opacity: 1; }
          80%  { opacity: 0.6; }
          100% { transform: translateY(110vh) rotate(480deg) scale(1.3); opacity: 0; }
        }

        /* ── Main content ── */
        .main-content {
          position: relative; z-index: 3;
          width: 100%; padding: 40px 20px;
          display: flex; flex-direction: column;
          align-items: center; gap: 6px;
        }

        /* ── Title button ── */
        .title-btn {
          display: inline-flex; flex-direction: column;
          align-items: center; gap: 6px;
          padding: 18px 32px 22px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1.5px solid rgba(255, 190, 220, 0.55);
          box-shadow:
            0 4px 28px rgba(200, 60, 110, 0.22),
            0 1px 0 rgba(255, 255, 255, 0.6) inset,
            0 0 0 0 rgba(255, 100, 160, 0);
          cursor: pointer;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          animation: titleFloat 3.6s ease-in-out infinite, titleGlow 3.6s ease-in-out infinite;
          transition: transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.18s ease;
          outline: none;
        }
        .title-btn:hover {
          transform: scale(1.06) translateY(-3px);
          box-shadow:
            0 10px 44px rgba(200, 60, 110, 0.38),
            0 1px 0 rgba(255, 255, 255, 0.7) inset,
            0 0 32px rgba(255, 100, 160, 0.28);
        }
        .title-btn:active {
          transform: scale(0.95) translateY(1px);
          box-shadow:
            0 2px 14px rgba(200, 60, 110, 0.28),
            0 1px 0 rgba(255, 255, 255, 0.5) inset;
          transition: transform 0.08s ease, box-shadow 0.08s ease;
        }
        @keyframes titleFloat {
          0%, 100% { transform: translateY(0);    }
          50%       { transform: translateY(-8px); }
        }
        @keyframes titleGlow {
          0%, 100% { box-shadow: 0 4px 28px rgba(200, 60, 110, 0.22), 0 1px 0 rgba(255,255,255,0.6) inset; }
          50%       { box-shadow: 0 8px 40px rgba(200, 60, 110, 0.42), 0 1px 0 rgba(255,255,255,0.7) inset, 0 0 28px rgba(255, 120, 170, 0.3); }
        }

        /* ── Letter rows ── */
        .letter-row {
          display: flex; flex-wrap: wrap;
          justify-content: center; align-items: center;
          gap: 2px;
        }
        .char-wrap {
          display: inline-flex; align-items: center;
          opacity: 0;
          animation: popIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes popIn {
          from { transform: translateY(-14px) scale(0.3); opacity: 0; }
          to   { transform: translateY(0)     scale(1);   opacity: 1; }
        }
        .char {
          font-size: 36px; font-weight: 900; color: #7a0c3e;
          text-shadow:
            1px 1px 0 #ffaacc,
            0 0 20px rgba(255, 80, 140, 0.55),
            0 3px 8px rgba(180, 20, 80, 0.2);
          line-height: 1.15;
          font-family: Georgia, "Times New Roman", serif;
        }

        /* ── Heart card ── */
        .heart-card {
          margin-top: 24px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 22px;
          padding: 22px 24px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow:
            0 8px 36px rgba(200, 60, 110, 0.24),
            inset 0 1px 0 rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 200, 225, 0.6);
          max-width: 420px;
          width: 90vw;
          animation: slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }
        @keyframes slideUp {
          from { transform: translateY(24px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        .heart-card p {
          font-size: 15px; color: #650c30;
          line-height: 1.95; font-family: Georgia, serif;
          text-align: center; white-space: pre-wrap;
        }

        /* ── Hint text ── */
        .hint-text {
          position: fixed;
          bottom: max(20px, env(safe-area-inset-bottom, 20px));
          right: 20px;
          font-size: 12px;
          font-family: Georgia, serif;
          font-style: italic;
          color: rgba(122, 12, 62, 0.65);
          letter-spacing: 0.02em;
          pointer-events: none;
          animation: hintBreath 3s ease-in-out infinite, hintIn 1.2s ease forwards;
          opacity: 0;
          z-index: 10;
          text-shadow: 0 1px 6px rgba(255, 100, 160, 0.25);
          max-width: 160px;
          text-align: right;
          line-height: 1.5;
        }
        @keyframes hintIn {
          0%   { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes hintBreath {
          0%, 100% { opacity: 0.65; }
          50%       { opacity: 0.95; }
        }
        @media (max-width: 480px) {
          .hint-text { font-size: 11px; bottom: max(16px, env(safe-area-inset-bottom, 16px)); right: 14px; }
        }
      `}</style>
    </div>
  );
}
