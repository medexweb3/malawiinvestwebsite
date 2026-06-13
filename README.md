# Malawi Invest

A Next.js web app for paper trading in Malawian Kwacha (MWK): MSE stocks and crypto, with wallet and education sections.

## Features

- **Home** – Landing page with navigation to the app.
- **Wallet** – View MWK balance; deposit MWK via **Paychangu API** (Airtel Money, TNM Mpamba, card); simulate selling crypto to fiat (crypto → MWK).
- **Markets** – Trade MSE (Malawi Stock Exchange) stocks and crypto (prices from CoinGecko, shown in MWK). Paper trading with buy/sell.
- **Portfolio** – Total value, cash (MWK), MSE holdings, and crypto holdings in one view.
- **Education** – Short guides on stock trading, cryptocurrency, risk management, and the MSE.

## Tech stack

- **Next.js 16** (App Router), **React 19**, **TypeScript**
- **Tailwind CSS 4** for styling
- **Zustand** for portfolio state (cash, stocks, crypto)
- **TanStack Query** for crypto price fetching
- **Sonner** for toasts
- **Paychangu API** for fiat collection (deposit MWK)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command       | Description           |
|--------------|-----------------------|
| `npm run dev`   | Start dev server      |
| `npm run build` | Production build      |
| `npm run start` | Start production server |
| `npm run lint`  | Run ESLint            |

## Environment (optional)

- `PAYCHANGU_SECRET_KEY` – Paychangu API secret key for live MWK deposits (get one at [Paychangu Developers](https://paychangu.com/developers)). Omit to show “not configured” for deposits.
- `NEXT_PUBLIC_APP_URL` – Full app URL (e.g. `https://yourdomain.com`) for Paychangu callback; defaults to request host in production.

## Routes

| Path         | Page       |
|-------------|------------|
| `/`         | Home       |
| `/wallet`   | Wallet     |
| `/markets`  | Markets    |
| `/portofolio` | Portfolio |
| `/education` | Education |
