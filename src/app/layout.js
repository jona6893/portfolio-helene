
import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";
import { Header } from "@/components/Header";
import PageAnimated from "@/components/PageAnimated";



export const metadata = {
  title: '...',
  description: '...',
  icons:{
    icon: [
      '/favicon.icoj?v=4'
    ],
    apple:[
      '/apple-touch-icon.png?v=4'
    ],
    shortcut:[
      '/apple-touch-icon.png'
    ]
  },
  manifest:'/site.manifest'
}


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
          <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
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

