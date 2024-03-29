import "@/app/globals.css";
import EmailContextProvider from "@/email/provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import classNames from "classnames";
import type { Metadata } from "next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { Twitter } from "next/dist/lib/metadata/types/twitter-types";
import { Norican, Roboto_Flex } from "next/font/google";

const norican = Norican({
  weight: "400",
  variable: "--font-norican",
  display: "swap",
  subsets: ["latin"],
});
const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  display: "swap",
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dansdata.se"),
  title: "Dansdata | Vi vet när Sverige dansar!",
  description:
    "Dansdata är en kommande informationskälla för svensk dansinformation.",
  alternates: {
    canonical: "/",
  },
  get openGraph(): OpenGraph {
    return {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      title: this.title!,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      description: this.description!,
      type: "website",
      images: "/maskable_icon_x512.png",
      siteName: "Dansdata",
      url: this.metadataBase?.toString(),
    };
  },
  get twitter(): Twitter {
    return {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      title: this.title!,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      description: this.description!,
      images: this.openGraph?.images,
      card: "summary",
    };
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=2"
        />
        <link
          rel="manifest"
          href="/site.webmanifest?v=2"
        />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg?v=2"
          color="#008395"
        />
        <link
          rel="shortcut icon"
          href="/favicon.ico?v=2"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Dansdata"
        />
        <meta
          name="application-name"
          content="Dansdata"
        />
        <meta
          name="msapplication-TileColor"
          content="#008395"
        />
        <meta
          name="theme-color"
          content="#008395"
        />
      </head>
      <body
        className={classNames(
          norican.className,
          norican.variable,
          robotoFlex.className,
          robotoFlex.variable
        )}
      >
        <EmailContextProvider>{children}</EmailContextProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
