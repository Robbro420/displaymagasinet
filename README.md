# Displaymagasinet

Ensidig webbplats byggd med Next.js (App Router) och vanlig CSS. Inga databaser, inga API-nycklar.

## Kom igång lokalt

Kräver Node.js 20.9 eller senare.

```bash
npm install
npm run dev
```

Öppna http://localhost:3000.

## Publicera på Vercel

1. Lägg koden i ett GitHub-repo.
2. Importera repot i Vercel. Next.js känns igen automatiskt – inga inställningar behöver ändras.
3. Koppla domänen under Settings → Domains.
4. Lägg till miljövariabeln `NEXT_PUBLIC_SITE_URL` med den publika adressen, t.ex. `https://www.exempel.se`, och gör en ny deploy. Den styr delningsbild, canonical, robots.txt och sitemap. Utan den används Vercels egen produktionsadress.

## Var ändrar jag vad?

| Vad | Fil |
| --- | --- |
| Shop-länk, CPM i kalkylatorn, nyhetsbrev på/av | `app/site.ts` |
| Texter, artikelkort, format | `app/page.tsx` |
| Kalkylatorn | `app/components/calculator.tsx` |
| Nyhetsbrevsformuläret | `app/components/newsletter.tsx` |
| Utseende | `app/globals.css` |
| Titel, beskrivning, delningsbild | `app/layout.tsx`, `public/og.jpg` |
| Favicon | `app/icon.svg` |

## Kvar att göra före lansering

- **Nyhetsbrevet** är avstängt (`newsletterEnabled = false` i `app/site.ts`). Formuläret sparar inga adresser ännu – koppla det till ett utskicksverktyg och lägg till en integritetspolicy innan det slås på.
- **Artikelkorten** har ännu inga artiklar bakom sig; länkarna leder till Kampanjhjälpen.
- **Kalkylatorn** räknar med 115 kr per 1 000 visningar (`estimatedCpmSek`). Stäm av mot verkliga priser.
- **Sidfoten** saknar företagsnamn, organisationsnummer och kontaktuppgifter.
