import BookingForm from "./BookingForm";

function BookingPage (props) {
    return(
        <>
        <p>Booking page</p>
        <BookingForm availableTimes={props.availableTimes} />
        </>
    )
}

export default BookingPage;