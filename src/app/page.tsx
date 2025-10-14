// app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import BookingSection from "@/components/Booking";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center w-full overflow-hidden">
      <Hero />
      <About />
      <Services />
      <TestimonialsCarousel />
      <BookingSection />
      <Footer />
    </main>
  );
}
