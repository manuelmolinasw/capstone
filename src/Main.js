import { Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage"
import BookingPage from "./components/BookingPage"
import { useReducer, useState } from "react";


function Main(){
    
    const [availableTimes] = useState([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ])
    return (
    <main>
        
        <Routes> 
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage availableTimes={availableTimes}/>}></Route>
        </Routes>
    
        
    </main>
    )
}

export default Main;