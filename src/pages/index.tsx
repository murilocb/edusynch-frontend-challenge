import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ContentApresentation } from '@/components/ContentApresentation';
import Newsletter from '@/components/Newsletter';
import { ContentApresentationImage } from '@/components/ContentApresentationImage';
import ContentCrypto from '@/components/ContentCrypto';
import TopCryptos from '@/components/TopCryptos';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen w-full bg-white">
      <Header />
      <ContentApresentation />
      <ContentApresentationImage />
      <ContentCrypto />
      <TopCryptos />
      {/* <Newsletter />
      <Footer /> */}
    </main>
  );
}
