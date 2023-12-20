import { Inter } from 'next/font/google'
import { Header } from '@/src/components/header'
import { Links } from '@/src/components/links'
import { MainImg } from '@/src/components/main'
import { Headline } from '@/src/components/headline'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header />
      <Headline>
        <code className="font-mono font-bold">pages/index.js</code>
      </Headline>
      <MainImg imgName="next" />

      <Links />
    </main>
  )
}
