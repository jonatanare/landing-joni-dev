import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Hero from '@/components/Home/Hero'
import About from '@/components/Home/About'
import Experiencie from '@/components/Home/Experience'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <Layout title='Portafolio Jonatan'>
      <main className='bg-white dark:bg-gray-800 pl-4 pr-4 pb-4'>
        <section className='container max-w-7xl px-2 sm:px-6 mx-auto' id='hero'>
          <Hero />
        </section>
        <section className='container max-w-7xl px-2 sm:px-6 mx-auto' id='about'>
          <About />
        </section>
        <section className='container max-w-7xl px-2 sm:px-6 mx-auto' id='experiencie'>
          <Experiencie />
        </section>
      </main>
    </Layout>
  )
}
