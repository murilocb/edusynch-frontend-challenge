import { Header } from '@/components/Header';
import { ContentApresentation } from '@/components/ContentApresentation';
import { ContentApresentationImage } from '@/components/ContentApresentationImage';
import ContentCrypto from '@/components/ContentCrypto';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen w-full bg-white">
      <Header />
      <ContentApresentation />
      <ContentApresentationImage />
      <ContentCrypto />
    </main>
  );
}
