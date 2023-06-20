import { Footer } from '@/components/LandingPage/Footer';
import { Header } from '@/components/LandingPage/Header';
import { ContentApresentation } from '@/components/LandingPage/ContentApresentation';
import Newsletter from '@/components/LandingPage/Newsletter';
import { ContentApresentationImage } from '@/components/LandingPage/ContentApresentationImage';
import AboutUs from '@/components/LandingPage/AboutUs';
import TopCryptos from '@/components/LandingPage/TopCryptos';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen w-full bg-white">
      <Header />
      <ContentApresentation />
      <ContentApresentationImage />
      <AboutUs />
      <TopCryptos />
      <Newsletter/>
      <Footer />
    </main>
  );
}
