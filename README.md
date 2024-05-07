# weathr app
![image](https://github.com/rodrigovm10/linx/assets/104101668/88070138-057e-4757-9b68-122ed862b2e9)
<p align="center">A URL short administrator.</p>

## 👋 Introduction
Welcome to my URL short administrator! Here are some of its key features:

- Generate a URL shortener: Provide a URL to convert it into a shortened version.
- Manage all your created URL shorteners: Copy, delete, and edit the URLs you've shortened.
- Export all your created links: Generate a JSON file containing all your created links.
## 📦 Packages
This project uses the following techonologies:

- 🛠️ [Next JS](https://nextjs.org/) - The React Framework for the Web.
- 💙 [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript.
- 💅 [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
- 💎 [Shadcn](https://ui.shadcn.com/) - Beautifully designed components that you can copy and paste into your apps.
- 🔺[Prisma](https://www.prisma.io/) -  A next-generation Node.js and TypeScript ORM
- 🟩 [Neon](https://neon.tech/) - The fully managed serverless Postgres with a generous free tier.

## 🚀 Getting Started
### You will need
- Node JS 18+
- Git
- Neon Account

1. Clone the repository:
```
https://github.com/rodrigovm10/weathr.git
```
2. Create an .env file with the following variables
```
VITE_RAPIDAPI_KEY=
VITE_RAPIDAPI_HOST=
```
3. Generate the variables
- Create a free RapidApi account: [rapidapi](https://rapidapi.com/hub).
- Go to WeatherApi.com: [weatherapi](https://rapidapi.com/weatherapi/api/weatherapi-com).
- Click on "Pricing" -> "Basic" -> "Subscribe": [weatherapi-pricing](https://rapidapi.com/weatherapi/api/weatherapi-com/pricing).
- Go to your RapidApi Dashboard: [/developer/dashboard](https://rapidapi.com/developer/dashboard).
- In the left sidebar -> "Default Apps" -> Click on your api -> "Security" and copy the generated Key in the .env file.
4. Install dependencies:
```
pnpm install
```
5. Run the project:
```
pnpm run dev
```

## ⚖️ License
- [MIT License](https://github.com/rodrigovm10/weathr/blob/main/LICENSE)
