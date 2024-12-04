import NavBar from "../components/NavBar";
import "../globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="">

        <body>
          <header>
    
          ====About Page Layout=====
          <NavBar/>
          <mail>{children}</mail>
          </header>

          <footer>
          </footer>
        </body>

    </html>
  );
}
