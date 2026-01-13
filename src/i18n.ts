import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      name: {
        legal_zh: "林致宇",
        legal_en: "LIN, JHIH-YU",
        english: "Thomas",
      },
      ids: ["jhihyu", "hack-a-pizza", "saget"],
      title: "Hobbyist Developer",
      subtitle: "Physics Student at NDHU",
      location: "Taiwan",
      languages: "Mandarin, English",
      bio: "Full-stack developer with experience in Flutter, React, Python, Next.js, and Vite. Currently focused on blockchain development with Sui Move, exploring decentralized applications and smart contract engineering.",
      sections: {
        links: "Links",
        crypto: "Crypto Addresses",
        projects: "Projects",
      },
      links: {
        email: "Email",
        instagram: "Instagram",
        github: "GitHub",
        discord: "Discord",
        telegram: "Telegram",
        farcaster: "Farcaster",
      },
      crypto: {
        bitcoin: "Bitcoin",
        evm: "EVM",
        solana: "Solana",
        ton: "TON",
        sui: "SUI",
      },
      actions: {
        copy: "Copy",
        copied: "Copied!",
        copyAddress: "Copy Address",
      },
    },
  },
  // zh: {
  //   translation: {},
  // },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
