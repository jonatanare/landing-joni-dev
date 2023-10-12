import Head from 'next/head'
import React from 'react'
import Nav from './Nav'

export default function Layout ({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <Nav />
      {children}
    </>
  )
}
