// (main)/layout.tsx
import ClientOnly from "@/components/ClientOnly";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const dynamic = "force-static";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
