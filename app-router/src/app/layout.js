import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggleButton from "./components/ThemeToggleButton";
import "./globals.css";
import NavBar from "./components/NavBar";
import CounterProvider from "@/store/CounterProvider";
import CounterDiplay from "@/features/counter/CounterDisplay";

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
      <CounterProvider>
        
      <ThemeProvider>
        <body>
          <header>
            <h1>=====header=====</h1>
            <NavBar />
            <CounterDiplay/>
            <ThemeToggleButton />
          </header>
          <mail>{children}</mail>
          <footer>
            <h2>-----Footer -----</h2>
          </footer>
        </body>
      </ThemeProvider>
      </CounterProvider>
    </html>
  );
}
