import { Inter } from 'next/font/google'
import { Header } from '@/components/header'
import { Links } from '@/components/links'
import { MainImg } from '@/components/main'
import { Headline } from '@/components/headline'

const inter = Inter({ subsets: ['latin'] })

export default function Home(){ 
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header />
      <Headline>
        <code className="font-mono font-bold">pages/mypage.js</code>
      </Headline>
      <MainImg imgName="cotech" />

      <Links />
    </main>
  )
}
