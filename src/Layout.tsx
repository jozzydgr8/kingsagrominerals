import { Footer } from "./Components/Footer"
import Navbar from "./Components/Navbar"
import { About } from "./Pages/About"
import { Benefit } from "./Pages/Benefits"
import { Header } from "./Pages/Header"
import { Mission } from "./Pages/Mission"
import { Product } from "./Pages/Product"
import { Vision } from "./Pages/Vision"

export const Layout = ()=>{
    return(
        <>
        <Navbar/>
        <Header/>
        <About/>
        <Mission/>
        
        <Benefit/>
        <Footer/>
        {/* <a className='whatsappIcon' href='https://wa.link/b8xq56' target='_blank'>
        <img src='https://cdn-icons-png.flaticon.com/128/3670/3670051.png' />
        </a> */}
        </>
    )
}