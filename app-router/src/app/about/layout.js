import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "About",
  description: "About...",
};

export default function RootLayout({ children }) {
  return (
    <div>{children}</div>
    // <html lang="ko">
    //   <body>
    //     <header>
    //       <h1>=====Header=====</h1>
    //     </header>
    //     <main>{children}</main>
    //     <footer>
    //       <h2>-----Footer-----</h2>
    //     </footer>
    //   </body>
    // </html>
  );
}
