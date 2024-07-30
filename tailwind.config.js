import animations from "@midudev/tailwind-animations";

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      cursor: {
        custom:
          "url(data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2248%22 viewBox=%220 0 24 24%22%3E%3Ccircle cx=%2212%22 cy=%2212%22 r=%229%22 fill=%22%23FFF%22 stroke=%22%23000%22 stroke-width=%220.25%22/%3E%3C/svg%3E) 12 12, auto",
      },
    },
  },
  plugins: [animations],
};
