/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6C4EF5",
          deep: "#5B3BF6",
          blue: "#4D8BFF",
          green: "#21C16B",
        },
        semantic: {
          success: "#21C16B",
          warning: "#FFC800",
          streak: "#FF8A00",
          error: "#FF4D4F",
          info: "#4D8BFF",
        },
        text: "#0D132B",
        "text-secondary": "#6B7280",
        border: "#E5E7EB",
        surface: "#F6F7FB",
        background: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Poppins-Regular"],
        poppins: ["Poppins-Regular"],
        "poppins-semibold": ["Poppins-SemiBold"],
        "poppins-medium": ["Poppins-Medium"],
        "poppins-bold": ["Poppins-Bold"],
      },
      fontSize: {
        h1: ["32px", { lineHeight: "38px" }],
        h2: ["24px", { lineHeight: "32px" }],
        h3: ["20px", { lineHeight: "26px" }],
        h4: ["16px", { lineHeight: "22px" }],
        "body-lg": ["16px", { lineHeight: "26px" }],
        "body-md": ["14px", { lineHeight: "22px" }],
        "body-sm": ["13px", { lineHeight: "21px" }],
        caption: ["11px", { lineHeight: "16px" }],
      },
      boxShadow: {
        soft: "0 10px 24px rgba(13, 19, 43, 0.08)",
      },
    },
  },
  plugins: [],
};