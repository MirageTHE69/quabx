import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400", "500", "600"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["300", "400", "500"] });
const display = Space_Grotesk({ variable: "--font-display", subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "QUABX — Find the Right Manufacturing Partner",
  description:
    "Discover engineering suppliers, communicate technical requirements and manage industrial sourcing through one structured platform.",
};

export const viewport: Viewport = {
  themeColor: "#0B0E13",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} ${display.variable}`}>
      <body>
        <noscript>
          <style>{`.spl{display:none!important}.anim .up,.anim .r,.anim .rl,.anim .rr,.anim .stg>*,.anim .wmk,.anim .fadein,.anim .pop,.anim .draw .nd{opacity:1!important}.anim .mask,.anim .tl,.anim .type{clip-path:none!important}.anim .ln{transform:none!important}.anim .words .w{transform:none!important}.anim .draw path,.anim .draw circle,.anim .draw line{stroke-dashoffset:0!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
