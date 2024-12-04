import "./globals.css";
import NavBar from "./components/NavBar";



export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="">

        <body>
          <header>
        <NavBar/>
          </header>
          <mail>{children}</mail>
          <footer>
          </footer>
        </body>

    </html>
  );
}
