import { fireEvent, render, screen } from '@testing-library/react';
import Main, { dispatch, updateTimes, initializeTimes } from './Main';
import BookingPage from './components/BookingPage';
import BookingForm from './components/BookingForm';

test('Returns expected value for initializeTimes', () => {
  

    const state  = 
    [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ]

  render(<BookingPage state={state}/>);
  
  const value = screen.getByTestId("time")
    expect(value).toHaveTextContent("17:0018:0019:0020:0021:0022:00");
   

})


test('Returns expected value for updateTimes', () => {
  

  const state  = 
  [
      "15:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
  ]

render(<BookingForm state={state} dispatch={Main.dispatch}/>);

const dateChange = screen.getByTestId("date")

fireEvent.change(dateChange, {target: {value: '2023-12-12'}})
console.log({dateChange})

const value = screen.getByTestId("time")
  expect(value).toHaveTextContent("15:0018:0019:0020:0021:0022:00");
 

})


