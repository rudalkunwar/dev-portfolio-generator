# Dev Portfolio Generator

Dev Portfolio Generator is a Next.js application that generates developer portfolios using data fetched from GitHub. It provides a modern, customizable interface to showcase your GitHub profile, repositories, activity, and stats.

## Features

- Fetches GitHub profile, repositories, activity, and stats via API routes
- Modern UI with theme support
- Easy to customize and extend
- Built with Next.js, TypeScript, and Tailwind CSS

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure

```
src/
  app/
    api/github/...
    components/
    lib/github/...
```

- `app/api/github/`: API routes for fetching GitHub data
- `app/components/`: UI components (header, footer, theme toggle, etc.)
- `lib/github/`: GitHub client, service, and types

## Customization

You can modify components in `src/app/components/` and API logic in `src/app/api/github/` to fit your needs.

## License

MIT
