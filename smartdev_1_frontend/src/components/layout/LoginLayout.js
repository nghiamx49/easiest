import React from 'react'
import HeaderLogin from "../headerlogin"
import Footer from "../footer"
function LoginLayout({ children }) {
  return (
    <>
      <HeaderLogin/>
      {children}
      <Footer/>
    </>
  )
}

export default LoginLayout