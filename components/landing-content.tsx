"use client";

import Markdown from "react-markdown";

const testimonials = [
  {
    link: "![ChatGPT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)",
    description: "ChatGPT",
  },
  {
    link: "![PlanetScale](https://img.shields.io/badge/planetscale-%23000000.svg?style=for-the-badge&logo=planetscale&logoColor=white)",
    description: "PlanetScale",
  },
  {
    link: "![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)",
    description: "NPM",
  },
  {
    link: "![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)",
    description: "Next JS",
  },
  {
    link: "![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)",
    description: "NodeJS",
  },
  {
    link: "![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)",
    description: "Nodemon",
  },
  {
    link: "![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)",
    description: "React",
  },
  {
    link: "![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)",
    description: "TailwindCSS",
  },
  {
    link: "![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)",
    description: "Vercel",
  },
  {
    link: "![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)",
    description: "TypeScript",
  },
  {
    link: "![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)",
    description: "Prisma",
  },
  {
    link: "![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=Clerk&logoColor=1F0256)",
    description: "Clerk",
  },
  {
    link: "![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)",
    description: "Stripe",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-xl text-white font-semibold mb-10">
        Built using
      </h2>
      <div className="flex gap-6 flex-wrap items-center justify-center px-12">
        {testimonials.map((item) => (
          <Markdown key={item.description}>
            {item.link}
          </Markdown>
        ))}
      </div>
    </div>
  );
};
