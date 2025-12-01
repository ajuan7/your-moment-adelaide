import localFont from "next/font/local";

export const theSeasons = localFont({
  src: [
    {
      path: "../public/fonts/theseasons-reg.otf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});
