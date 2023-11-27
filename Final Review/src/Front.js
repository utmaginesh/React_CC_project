import React from 'react'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import  Menu  from './Components/Menu/Menu'
import Footer from './Components/Footer/Footer'

export default function Front() {
    return (
        <>
            <Home/>
            <About/>
            <Menu/>
            <Footer/>
        </>
    )
}
