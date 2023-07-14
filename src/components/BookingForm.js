import { useState } from "react";
import DateObject from "react-date-object";


function BookingForm (props) {
    var today = new DateObject();
    const [date,setDate] = useState(today.format("YYYY-MM-DD"))
    const [time,setTime] = useState("17:00")
    const [guests,setGuests] = useState("1")
    const [occasion,setOccasion] = useState("Birthday")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setDate(today.format("YYYY-MM-DD"))
        setTime("17:00")
        setGuests("1")
        setOccasion("Birthday")
        props.submitForm(FormData)
    }
    const handleReducer = (e) => {
        setDate(e.target.value)
        props.dispatch({type: 'hello'})
        
    }

    const isButtonDisabled = () => {
        var boolean = false
        if (date < today.format("YYYY-MM-DD") || guests < 1 || guests > 10) {
            boolean = true
        }
        return boolean
    }
   
    const isTimeDisabled = () => {
        var boolean = false
        if (date < today.format("YYYY-MM-DD")) {
            boolean = true
        }
        return boolean
    }

    return(
        <>
        
        <div style={{display:"flex", justifyContent:"center", margin:"7rem 0"}}>
        <form onSubmit={handleSubmit} style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
            <label hmtlFor="date" style={{fontFamily:"Markazi Text", fontSize:"20px"}}>Choose date. Minimum date should be today's date.</label>
            <input type="date" id="date" data-testid="date" value={date} min={today.format("YYYY-MM-DD")} style={{fontFamily:"Markazi Text", fontSize:"18px"}} onChange={handleReducer}/>
            <label hmtlFor="res-time" style={{fontFamily:"Markazi Text", fontSize:"20px"}}>Choose time</label>
            <select id="res-time" data-testid="time" style={{fontFamily:"Markazi Text", fontSize:"18px"}} value={time} disabled={isTimeDisabled()}onChange={(e) => setTime(e.target.value)}>
                {props.state.map(t => 
                    <option key={t}>{t}</option>
                )}
            </select>
            {/* <button onClick={() => props.dispatch({type: 'hello'})}>Dispatch?</button> */}
            <label htmlFor="guests" style={{fontFamily:"Markazi Text", fontSize:"20px"}}>Number of guests. Must be between 1 and 10.</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} style={{fontFamily:"Markazi Text", fontSize:"18px", invalid:{border:"2px solid red"}}} onChange={(e) => setGuests(e.target.value)}/>
            <label hmtlFor="occasion" style={{fontFamily:"Markazi Text", fontSize:"20px"}}>Occasion</label>
            <select id="occasion" value={occasion}  style={{fontFamily:"Markazi Text", fontSize:"18px"}} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            {/* <input type="submit" value="Make Your Reservation" onClick={() => props.submitForm(FormData)}/> */}
            <button type="submit" disabled={isButtonDisabled()} style={{fontFamily:"Karla", fontSize:"18px", borderRadius:"16px", backgroundColor:"#F4CE14", fontWeight:"bold"}} >Make Your Reservation</button>
        </form>
        </div>
        </>

    )
}

export default BookingForm;