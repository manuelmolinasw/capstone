import { Routes, Route, useNavigate} from "react-router-dom";
import HomePage from "./components/HomePage"
import BookingPage from "./components/BookingPage"
import ConfirmBooking from "./components/ConfirmBooking";
import { useEffect, useReducer } from "react";
import DateObject from "react-date-object";


function Main(){

    var date = new DateObject();
    // console.log(date.format()); 

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }
    
    
    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date);
    
        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const submitAPI = function(formData) {
        return true;
    }

     const initializeTimes = fetchAPI(date) 

   /*
     const initializeTimes = 
        
        [
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
        ]
    
    */
    
        const updateTimes = (state,action) => {
            if (action.type === 'hello'){
                return (
                /*
                "15:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                */
                fetchAPI(date)
            )}
            return state;
        }
        

    const [state, dispatch] = useReducer(updateTimes,initializeTimes)
    

    const navigate = useNavigate();

    const submitForm = (formData) => {
        const boolean = submitAPI(formData)
        if (boolean){
            console.log("success")
        return(
            navigate('/confirmed')
            
        )
            
        
        }
    }

    return (
    <main>
        
        <Routes> 
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage state={state} dispatch={dispatch} submitForm={submitForm}/>}></Route>
            <Route path="/confirmed" element={<ConfirmBooking />}></Route>
        </Routes>
    
        
    </main>
    )
}

export default Main;