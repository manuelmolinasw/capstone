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

    
    return(
        <>
        <p>Booking form</p>
        <div style={{display:"flex", justifyContent:"center"}}>
        <form onSubmit={handleSubmit} style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
            <label hmtlFor="res-date">Choose date</label>
            <input type="date" id="res-date" data-testid="date" value={date} onChange={handleReducer}/>
            <label hmtlFor="res-time">Choose time</label>
            <select id="res-time" data-testid="time" value={time} onChange={(e) => setTime(e.target.value)}>
                {props.state.map(t => 
                    <option>{t}</option>
                )}
            </select>
            {/* <button onClick={() => props.dispatch({type: 'hello'})}>Dispatch?</button> */}
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}/>
            <label hmtlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            {/* <input type="submit" value="Make Your Reservation" onClick={() => props.submitForm(FormData)}/> */}
            <input type="submit" value="Make Your Reservation" />
        </form>
        </div>
        </>

    )
}

export default BookingForm;