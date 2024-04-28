import { Inter } from 'next/font/google'
import { Links } from '@/src/components/Links'
import { MainImg } from '@/src/components/Main'
import { Headline } from '@/src/components/Headline'
import { Header } from '@/src/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
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
