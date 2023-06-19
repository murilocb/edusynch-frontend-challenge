import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ContentApresentation } from '@/components/ContentApresentation'
import { ContentApresentationImage } from '@/components/ContentApresentationImage'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen w-full bg-white">
        <Header/>
        <ContentApresentation />
        <ContentApresentationImage/>
        <Footer/>
    </main>
  )
}
