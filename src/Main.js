import { Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage"
import BookingPage from "./components/BookingPage"
import CallToAction from "./components/CallToAction"
import Specials from "./components/Specials"
import CustomersSay from "./components/CustomersSay"
import Chicago from "./components/Chicago"
function Main(){
    return (
    <main>
        <CallToAction />
        <Specials />
        <CustomersSay />
        <Chicago />
        <Routes> 
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
    
        
    </main>
    )
}

export default Main;