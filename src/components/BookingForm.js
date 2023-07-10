import { useState } from "react";

function BookingForm (props) {
    const [date,setDate] = useState("")
    const [time,setTime] = useState("17:00")
    const [guests,setGuests] = useState("1")
    const [occasion,setOccasion] = useState("Birthday")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setDate("")
        setTime("17:00")
        setGuests("1")
        setOccasion("Birthday")
    }
    
    
    return(
        <>
        <p>Booking form</p>
        
        <form onSubmit={handleSubmit} style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
            <label hmtlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)}/>
            <label hmtlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                {props.availableTimes.map(t => 
                    <option>{t}</option>
                )}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}/>
            <label hmtlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation"/>
        </form>
        </>

    )
}

export default BookingForm;