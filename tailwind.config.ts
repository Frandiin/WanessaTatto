import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/ui/**/*.{js,ts,jsx,tsx}", // Add Shadcn/UI components
  ],
  theme: {
    extend: {
      // Add custom Tailwind styles if needed
    },
  },
  plugins: [],
} satisfies Config;
