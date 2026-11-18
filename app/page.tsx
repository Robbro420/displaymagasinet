import { Calculator } from "./components/calculator";
import { Newsletter } from "./components/newsletter";
import { newsletterEnabled, shopUrl } from "./site";

const articles = [
  { tag: "Display", title: "Så bygger du räckvidd utan att bränna hela budgeten", text: "En enkel plan för smart frekvens, relevanta sajter och tydlig uppföljning.", color: "lime" },
  { tag: "SEO", title: "Sök + display: kombinationen som fångar både behov och nyfikenhet", text: "Låt sökdata styra budskapet och display skapa efterfrågan innan kunden googlar.", color: "blue" },
  { tag: "Webb-tv", title: "Rörligt som känns stort – även för ett mindre företag", text: "Tre format, två budskap och en realistisk startbudget för video på premiumwebb.", color: "coral" },
  { tag: "Guide", title: "Från 5 000 till 50 000 kr: välj rätt kampanjnivå", text: "Vad du faktiskt kan förvänta dig när budget, målgrupp och geografi förändras.", color: "violet" },
  { tag: "Kreativitet", title: "Fem rubriker som gör en displayannons lättare att klicka på", text: "Konkreta exempel för tjänster, handel och lokal försäljning – redo att anpassa.", color: "yellow" },
  { tag: "Mätning", title: "Mät rätt: från visning till affär utan krångliga rapporter", text: "De fyra siffrorna du behöver för att avgöra om kampanjen ska skalas upp.", color: "teal" },
];

const formats = [
  { icon: "display", title: "Displayannonsering", text: "Bygg kännedom och trafik med snygga annonser på relevanta svenska sajter." },
  { icon: "video", title: "Video & webb-tv", text: "Berätta mer på 6–20 sekunder och nå kunden i ett premiumsammanhang." },
  { icon: "search", title: "SEO & synlighet", text: "Gör det lättare att hitta, förstå och välja ditt företag – över tid." },
] as const;

const tickerWords = ["DISPLAY", "PROGRAMMATIC", "SEO", "WEBB-TV", "KREATIVITET", "MÄTNING"];

export default function Home() {
  return (
    <>
      <a className="skip" href="#innehall">
        Hoppa till innehållet
      </a>

      <header className="topbar">
        <a className="brand" href="#top" aria-label="Displaymagasinet – till toppen">
          <b aria-hidden="true">d</b>
          <span>
            Display<i>magasinet</i>
          </span>
        </a>
        <nav aria-label="Huvudmeny">
          <a href="#senaste">Senaste</a>
          <a href="#guider">Guider</a>
          <a href="#kalkylator">Kampanjhjälpen</a>
        </nav>
        <a className="button compact" href={shopUrl} target="_blank" rel="noopener noreferrer">
          <em>Prova vår shop</em>
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="innehall">
        <section className="hero" id="top">
          <div className="hero-copy">
            <div className="eyebrow">
              <span />
              Din genväg till smartare digital annonsering
            </div>
            <h1>
              Få fler att
              <br />
              <em>hitta, förstå</em> och
              <br />
              välja ditt företag.
            </h1>
            <p>
              Insikter, guider och färdiga kampanjidéer för dig som vill synas digitalt – oavsett om du driver ett
              litet lokalt företag eller ett stort varumärke.
            </p>
            <div className="actions">
              <a className="button" href="#senaste">
                Utforska senaste nytt <span aria-hidden="true">↓</span>
              </a>
              <a className="under" href="#kalkylator">
                Hitta rätt kampanj →
              </a>
            </div>
            <div className="proof">
              <div aria-hidden="true">
                <span>AN</span>
                <span>JL</span>
                <span>MK</span>
              </div>
              <p>
                <b>Praktiskt, begripligt, affärsnära.</b>
                <br />
                För företagare i hela Sverige.
              </p>
            </div>
          </div>

          <aside className="hero-card" aria-labelledby="snabbguide-title">
            <small>VECKANS SNABBGUIDE</small>
            <div className="ad" aria-hidden="true">
              <span>DISPLAY</span>
              <b>
                Syns du
                <br />
                där kunden är?
              </b>
              <i>→</i>
            </div>
            <h2 id="snabbguide-title">Kom igång med display på 30 minuter</h2>
            <p>Från mål och målgrupp till material, budget och start. Vi visar exakt vad du behöver.</p>
            <a href="#guider">Läs snabbguiden →</a>
          </aside>
        </section>

        <div className="ticker" aria-hidden="true">
          {tickerWords.map((word, i) => (
            <span key={word}>
              {i > 0 && <i>✦</i>}
              {word}
            </span>
          ))}
        </div>

        <section className="content" id="senaste">
          <Heading
            kicker="Nytt & användbart"
            title="Senaste från redaktionen"
            copy="Nya guider och analyser publiceras löpande – alltid med nästa praktiska steg."
          />
          <div className="articles">
            {articles.map((a, i) => (
              <article key={a.title}>
                <div className={`art ${a.color}`} aria-hidden="true">
                  <span>{a.tag}</span>
                  <b>{i % 2 ? "◌ ◌ ◌" : "╱ ╱ ╱"}</b>
                </div>
                <div className="article-body">
                  <div className="meta">
                    <span>{a.tag}</span>
                    <span>{3 + i} min läsning</span>
                  </div>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                  <a href="#kalkylator">Läs och omsätt →</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="formats" id="guider">
          <Heading
            kicker="Välj din väg"
            title={
              <>
                Synlighet som passar
                <br />
                din verklighet.
              </>
            }
            copy="Börja i liten skala, lär dig vad som fungerar och växla upp när du ser resultat. Inga onödiga modeord."
            light
          />
          <div className="format-grid">
            {formats.map((f, i) => (
              <article key={f.title}>
                <small aria-hidden="true">0{i + 1}</small>
                <FormatIcon name={f.icon} />
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                <a href="#kalkylator">Se möjligheterna →</a>
              </article>
            ))}
          </div>
        </section>

        <section className="planner" id="kalkylator">
          <div>
            <div className="eyebrow">
              <span />
              Kampanjhjälpen
            </div>
            <h2>
              Från idé till kampanj
              <br />
              på några minuter.
            </h2>
            <p>
              Välj ett mål och en budget. Du får en tydlig startpunkt som du kan ta vidare direkt till
              Displaybutiken.
            </p>
            <ul>
              <li>✓ Förslag anpassat efter din nivå</li>
              <li>✓ Transparent budget och uppskattad räckvidd</li>
              <li>✓ Enkelt att beställa och skala upp</li>
            </ul>
          </div>
          <Calculator />
        </section>

        {newsletterEnabled && <Newsletter />}
      </main>

      <footer>
        <div className="brand">
          <b aria-hidden="true">d</b>
          <span>
            Display<i>magasinet</i>
          </span>
        </div>
        <nav aria-label="Sidfot">
          <a href="#senaste">Senaste</a>
          <a href="#guider">Guider</a>
          <a href="#kalkylator">Kampanjhjälpen</a>
          <a href={shopUrl} target="_blank" rel="noopener noreferrer">
            Displaybutiken ↗
          </a>
        </nav>
        <p>Kunskap som hjälper svenska företag att växa digitalt.</p>
        <small>© {new Date().getFullYear()} Displaymagasinet</small>
      </footer>
    </>
  );
}

function Heading({
  kicker,
  title,
  copy,
  light = false,
}: {
  kicker: string;
  title: React.ReactNode;
  copy: string;
  light?: boolean;
}) {
  return (
    <div className={`heading ${light ? "light" : ""}`}>
      <div>
        <div className="eyebrow">
          <span />
          {kicker}
        </div>
        <h2>{title}</h2>
      </div>
      <p>{copy}</p>
    </div>
  );
}

function FormatIcon({ name }: { name: "display" | "video" | "search" }) {
  const common = {
    className: "format-icon",
    viewBox: "0 0 40 40",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.5,
    "aria-hidden": true,
  } as const;

  if (name === "display") {
    return (
      <svg {...common}>
        <rect x="4" y="6" width="32" height="28" />
        <path d="M4 15h32M24 15v19" />
      </svg>
    );
  }
  if (name === "video") {
    return (
      <svg {...common}>
        <rect x="4" y="6" width="32" height="28" />
        <path d="M16 14l10 6-10 6z" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="17" cy="17" r="11" />
      <path d="M25.5 25.5L36 36" />
    </svg>
  );
}
