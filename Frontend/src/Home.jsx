import Page1 from "./components/Page1"
import image1 from './assets/image1.avif'
import Page2 from "./components/Page2"
import Page3 from "./components/Page3"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"


function App() {


  return (
    // <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
    //   style={{ backgroundImage: "url('${image1}')" }}
    // >
    //   {/* Overlay for better text visibility */}
    //   <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    //   {/* Content on top of the background */}
      <div className="relative z-10 bg-black p-5">
        <Navbar></Navbar>
        <Page1 className="p-5"/>
        <Page2/>
        <Page3 className=""/>
        <Footer/>
      </div>
    // </div>
  )
}

export default App