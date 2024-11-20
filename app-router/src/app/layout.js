import { Inter } from "next/font/google";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggleButton from "./components/ThemeToggleButton";
import "./globals.css";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Nextjs.dev",
    template: "-Nextjs.dev - %s",
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <ThemeProvider>
        <body>
          <header>
            <h1>=====header=====</h1>
            <NavBar />
            <ThemeToggleButton />
          </header>
        </body>
      </ThemeProvider>
    </html>
  );
}
