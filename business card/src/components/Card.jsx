import Header from "./Header"
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"
const Card = ()=>{
    return(
        <>
        <div className="cardDiv">
            <img src="./src/assets/headshot.jpeg" className="profilePic" alt="Jane Doe Picture" />
            <Header />
            <About />
            <Interests />
            <Footer />
        </div>
        </>
    )
}

export default Card