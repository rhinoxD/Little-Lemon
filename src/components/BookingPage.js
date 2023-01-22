import BookingForm from './BookingForm'

const BookingPage = ({ availableTimes, setAvailableTimes, submitForm }) => {
  return (
    <section id='booking' className='booking-section'>
      <div className='container booking-container flex'>
        <BookingForm
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
          submitForm={submitForm}
        />
      </div>
    </section>
  )
}

export default BookingPage
