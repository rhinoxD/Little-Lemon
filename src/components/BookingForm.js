import { useState, useRef } from 'react'

const BookingForm = ({ availableTimes, dispatch }) => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('')
  const ref = useRef()
  const handleDate = (e) => {
    // console.log(e.target.value)
    setDate(e.target.value)
  }
  const handleTime = (e) => {
    setTime(e.target.value)
  }
  const handleGuests = (e) => {
    // console.log(e.target.value)
    setGuests(e.target.value)
  }
  const handleOccasion = (e) => {
    // console.log(e.target.value)
    setOccasion(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setDate('')
    ref.current.value = ''
    dispatch({ type: time })
    console.log(date, time, guests, occasion)
  }
  return (
    <div className='booking-form'>
      <h1>Booking Form</h1>
      <div className='form'>
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
          <label htmlFor='res-date'>Choose date</label>
          <input type='date' id='res-date' onChange={handleDate} value={date} />
          <label htmlFor='res-time'>Choose time</label>
          <select id='res-time ' onChange={handleTime}>
            {availableTimes &&
              availableTimes.map((avlTime) => (
                <option key={avlTime}>{avlTime}</option>
              ))}
          </select>
          <label htmlFor='guests'>Number of guests</label>
          <input
            type='number'
            placeholder='1'
            ref={ref}
            min='1'
            max='10'
            id='guests'
            onChange={handleGuests}
          />
          <label htmlFor='occasion'>Occasion</label>
          <select id='occasion' onChange={handleOccasion}>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <input
            type='submit'
            value='Make Your reservation'
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  )
}

export default BookingForm
