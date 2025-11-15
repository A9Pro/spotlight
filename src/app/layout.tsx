// app/layout.tsx
import "./globals.css";
import FloatingNav from "../components/FloatingNav";
import Header from "../components/Header";
import { CartProvider } from "../components/context/CartContext";

export const metadata = {
  title: "SpotLight Jewelries ✦ Own Your Light",
  description:
    "Discover premium Nigerian jewelry. Rings, necklaces, earrings, and more — all shining for your style.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#FAEBD7] overflow-x-hidden">
        <CartProvider>
          <Header />
          {children}
          <FloatingNav />
        </CartProvider>
      </body>
    </html>
  );
}
