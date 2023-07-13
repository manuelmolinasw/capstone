import { fireEvent, render, screen } from '@testing-library/react';
import Main, { dispatch, updateTimes, initializeTimes } from './Main';
import BookingPage from './components/BookingPage';
import BookingForm from './components/BookingForm';
import DateObject from 'react-date-object';
import { useReducer } from 'react';

test('Renders the guests element', () => {
  const state  = 
    [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ]
  render(<BookingForm state={state}/>);
  const guests = screen.getByLabelText("Number of guests");
  expect(guests).toBeInTheDocument();
})



test('Returns expected value for initializeTimes', () => {
  

    // const state  = 
    // [
    //     "17:00",
    //     "18:00",
    //     "19:00",
    //     "20:00",
    //     "21:00",
    //     "22:00",
    // ]
    var date = new DateObject();

    const seededRandom = function (seed) {
      var m = 2**35 - 31;
      var a = 185852;
      var s = seed % m;
      return function () {
          return (s = s * a % m) / m;
      };
  }

    const fetchAPI = function(date) {
      let result = [];
      let random = seededRandom(date);
  
      for(let i = 17; i <= 23; i++) {
          if(random() < 0.5) {
              result.push(i + ':00');
          }
          if(random() < 0.5) {
              result.push(i + ':30');
          }
      }
      return result;
  };


   const value = fetchAPI(date) 


  
    expect(value).toContain("17:00");
   

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

    var date = new DateObject();
    // console.log(date.format()); 

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }
    
    
    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date);
    
        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const submitAPI = function(formData) {
        return true;
    }

     const initializeTimes = fetchAPI(date) 

   /*
     const initializeTimes = 
        
        [
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
        ]
    
    */
    
        const updateTimes = (state,action) => {
            if (action.type === 'hello'){
                return (
                /*
                "15:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                */
                fetchAPI(date)
            )}
            return state;
        }
        
        //dispatch = updateTimes(initializeTimes,'hello')
    
    

  render(<BookingForm state={initializeTimes} dispatch={updateTimes(initializeTimes,'hello')}/>);

  const dateChange = screen.getByTestId("date")

  fireEvent.change(dateChange, {target: {value: '2023-12-12'}})
  console.log({dateChange})

  const value = screen.getByTestId("time")
    expect(value).toHaveTextContent("15:00");
  

})


