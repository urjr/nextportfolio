import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/comps/Navbar'
import Footer from '@/comps/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <h1>Hello World</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc dolor, malesuada sit amet nisl in, rhoncus pharetra ipsum. Praesent sed placerat ante, eu porttitor.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc dolor, malesuada sit amet nisl in, rhoncus pharetra ipsum. Praesent sed placerat ante, eu porttitor.</p>
        <Link href="/projects">See Project List</Link>
      </div>
    </>
  )
}
