import { Footer } from '@/components/LandingPage/Footer';
import { Header } from '@/components/LandingPage/Header';
import { ContentApresentation } from '@/components/LandingPage/ContentApresentation';
import Newsletter from '@/components/LandingPage/Newsletter';
import { ContentApresentationImage } from '@/components/LandingPage/ContentApresentationImage';
import AboutUs from '@/components/LandingPage/AboutUs';
import TopCryptos from '@/components/LandingPage/TopCryptos';
import { HeaderCoins } from '@/components/LandingPage/HeaderCoins';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen md:w-full bg-white">
      <Header />
      <div className="flex md:hidden flex-col items-center mt-4">
        <HeaderCoins />
      </div>
      <ContentApresentation />
      <ContentApresentationImage />
      <AboutUs />
      <TopCryptos />
      <Newsletter />
      <Footer />
    </main>
  );
}
