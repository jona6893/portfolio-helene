
import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";
import { Header } from "@/components/Header";
import PageAnimated from "@/components/PageAnimated";






export default async function RootLayout({ children }) {

 const client = createClient();
 const settings = await client.getSingle("settings");
 const navigation = await client.getSingle("navigation");
  return (
    <html lang="en">
      <head>
        <meta
          name="developer-note"
          content="This Website was built by Jonathan Weldon.
    If you're interested in having a website built, contact me at jona.weldon@icloud.com or visit weldon.dk"
        />
      </head>
      <body className="relative overflow-x-hidden antialiased">
        {/* @ts-expect-error Async Server Component */}
        <Header settings={settings} navigation={navigation} />
        <PageAnimated>{children}</PageAnimated>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}

