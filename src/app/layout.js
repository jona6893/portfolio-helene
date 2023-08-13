
import "./globals.css";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicPreview } from "@prismicio/next";
import * as prismic from "@prismicio/client";
import { createClient, repositoryName } from "@/prismicio";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/Header";

export default async function RootLayout({ children }) {
 const client = createClient();
 const settings = await client.getSingle("settings");
 const navigation = await client.getSingle("navigation");
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden antialiased">
        {/* @ts-expect-error Async Server Component */}
        <Header settings={settings} navigation={navigation} />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}

/* async function Header() {
 

  const client = createClient();

  const settings = await client.getSingle("settings");
  const navigation = await client.getSingle("navigation");

  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 leading-none">
      <PrismicNextLink
        href="/"
        className="text-xl font-semibold tracking-tight"
      >
        <PrismicText field={settings.data.siteTitle} />
      </PrismicNextLink>
      <nav>
        <ul className="flex flex-wrap gap-6 md:gap-10">
          {navigation.data?.links.map((item) => (
            <li
              key={prismic.asText(item.label)}
              className="font-semibold tracking-tight text-slate-800"
            >
              <PrismicNextLink field={item.link}>
                <PrismicText field={item.label} />
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
 */