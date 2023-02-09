import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
function layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="mt-28">{children}</main>
      <Footer />
    </>
  )
}

export default layout
