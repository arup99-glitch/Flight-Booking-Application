import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeBooking } from './../Redux/actions';

const Book = () => {

    const data= useSelector((state)=> state.data);
    const size = data.length;
    const dispatch = useDispatch();
    const [bookingData,setBookingData] = useState({});

    const handleChange = (e) => {
        const newBookingData ={...bookingData}
        newBookingData[e.target.name]=e.target.value;
        setBookingData(newBookingData)
    };

    const handleBook = (e) => {
        e.preventDafault();
        if(size >= 3){
            alert("Sorry, you can not book more then 3")
        }
        else{
            if(Object.keys(bookingData).length===5){
                dispatch(makeBooking({...bookingData,id: size+1}));
            }
            else {
                alert("Please select data properly");
            }
        }
    };

    return (
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
        <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
          <form className="first-hero lws-inputform">
            <div className="des-from">
              <p>Destination From</p>
              <div className="flex flex-row">
                <img src="./img/icons/Frame.svg" alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="from"
                  id="lws-from"
                  required
                  onChange={(e) => handleChange(e)}
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Dhaka</option>
                  <option>Sylhet</option>
                  <option>Saidpur</option>
                  <option>Cox's Bazar</option>
                </select>
              </div>
            </div>
  
            <div className="des-from">
              <p>Destination To</p>
              <div className="flex flex-row">
                <img src="./img/icons/Frame.svg" alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="to"
                  id="lws-to"
                  required
                  onChange={(e) => handleChange(e)}
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Dhaka</option>
                  <option>Sylhet</option>
                  <option>Saidpur</option>
                  <option>Cox's Bazar</option>
                </select>
              </div>
            </div>
  
            <div className="des-from">
              <p>Journey Date</p>
              <input
                type="date"
                className="outline-none px-2 py-2 w-full date"
                name="date"
                id="lws-date"
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
  
            <div className="des-from">
              <p>Guests</p>
              <div className="flex flex-row">
                <img src="./img/icons/Vector (1).svg" alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="guests"
                  id="lws-guests"
                  required
                  onChange={(e) => handleChange(e)}
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                </select>
              </div>
            </div>
  
            <div className="des-from !border-r-0">
              <p>className</p>
              <div className="flex flex-row">
                <img src="./img/icons/Vector (3).svg" alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="ticketclassName"
                  id="lws-ticketclassName"
                  required
                  onChange={(e) => handleChange(e)}
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Business</option>
                  <option>Economy</option>
                </select>
              </div>
            </div>
  
            <button
              onClick={(e) => handleBook(e)}
              className="addCity"
              type="submit"
              id="lws-addCity"
            >
              <svg
                width="15px"
                height="15px"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span className="text-sm">Book</span>
            </button>
          </form>
        </div>
      </div>
    );
};

export default Book;