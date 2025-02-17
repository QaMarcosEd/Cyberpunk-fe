"use client"

import About from '@/components/About';
import Footer from '@/components/Footer';
import Galery from '@/components/Galery';
import Glossary from '@/components/Glossary';
import Header from '@/components/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Galery />
      <Glossary />
      <Footer />
    </>
  )
}
