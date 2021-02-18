
import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './Hero'
import Petlab from './Petlab'

const Layout = ({ children }) => {
    return(
        <>
            <Navbar />
            <Hero />
            <Petlab />
            <Footer />
            {children}
        </>
    )
}

export default Layout