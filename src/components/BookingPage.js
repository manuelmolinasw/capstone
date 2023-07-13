import BookingForm from "./BookingForm";




function BookingPage (props) {
    

    return(
        <>
        <p>Booking page</p>
        <BookingForm state={props.state} dispatch={props.dispatch} submitForm={props.submitForm}/>
        </>
    )
}

export default BookingPage;