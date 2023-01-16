import { useState } from 'react'

const BookingForm = () => {
  const [date, setDate] = useState('')
  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ])
  const [time, setTime] = useState('')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('')
  const handleDate = (e) => {
    // console.log(e.target.value)
    setDate(e.target.value)
  }
  const handleTime = (e) => {
    // console.log(e.target.value)
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
    console.log(date, time, guests, occasion)
  }
  return (
    <div className='form'>
      <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
        <label htmlFor='res-date'>Choose date</label>
        <input type='date' id='res-date' onChange={handleDate} />
        <label htmlFor='res-time'>Choose time</label>
        <select id='res-time ' onChange={handleTime}>
          {availableTimes.map((avlTime) => (
            <option key={avlTime}>{avlTime}</option>
          ))}
        </select>
        <label htmlFor='guests'>Number of guests</label>
        <input
          type='number'
          placeholder='1'
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
  )
}

export default BookingForm
