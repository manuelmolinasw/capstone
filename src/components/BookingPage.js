import BookingForm from "./BookingForm";




function BookingPage (props) {
    

    return(
        <>
        
        <BookingForm state={props.state} dispatch={props.dispatch} submitForm={props.submitForm}/>
        </>
    )
}

export default BookingPage;