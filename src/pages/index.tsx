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

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <ContentApresentation />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <ContentApresentationImage />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <AboutUs />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <TopCryptos />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <Newsletter />
      </div>

      <Footer />
    </main>
  );
}
