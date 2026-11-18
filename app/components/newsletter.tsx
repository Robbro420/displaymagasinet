"use client";

import { useState } from "react";

/**
 * OBS: formuläret sparar ingenting ännu. Koppla onSubmit till ett
 * utskicksverktyg (t.ex. en route handler som anropar tjänstens API)
 * innan newsletterEnabled sätts till true i app/site.ts.
 */
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div>
        <b className="flower" aria-hidden="true">
          ✣
        </b>
        <div className="eyebrow">
          <span />
          Väx med oss
        </div>
        <h2 id="newsletter-title">
          En bra idé i inkorgen.
          <br />
          Varje vecka.
        </h2>
      </div>

      {sent ? (
        <div className="success" role="status">
          Tack! Du är med på nästa utskick. ✓
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <label htmlFor="email">JOBBMEJL</label>
          <div>
            <input
              id="email"
              required
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="namn@foretag.se"
            />
            <button type="submit">Jag vill ha idéerna →</button>
          </div>
          <small>Inspiration utan brus. Avsluta när du vill.</small>
        </form>
      )}
    </section>
  );
}
