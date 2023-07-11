import { Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage"
import BookingPage from "./components/BookingPage"
import { useReducer } from "react";

const updateTimes = (state,action) => {
    if (action.type === 'hello'){
        return ([
        "15:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ])}
    return state;
}



function Main(){
    const initializeTimes  = 
    [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ]
    


    const [state, dispatch] = useReducer(updateTimes,initializeTimes)
    
    return (
    <main>
        
        <Routes> 
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage state={state} dispatch={dispatch}/>}></Route>
        </Routes>
    
        
    </main>
    )
}

export default Main;