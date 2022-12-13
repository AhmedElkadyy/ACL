import "./FilterPar.css"
import { Navigate } from "react-router-dom";
import React, { useState, useEffect} from 'react';
import Axios from 'axios';

function FilterPar() {

    const [subject, setSubject] = useState ('')
    const [rating, setRating] = useState (0)
    const [price, setPrice] = useState (0)
    const [button4, setButton4] = useState (false)


    if (button4){
        return <Navigate  to="/FilterResults"/>}

       const filterCourse =() => {
          setButton4(true) ;
          var priceL;
          var priceH;
          var ratingL;
          var ratingH;
          switch(price){
            case '1': priceL=0; priceH=0; break;
            case '2': priceL=0; priceH=20; break;
            case '3': priceL=20; priceH=50; break;
            case '4': priceL=50; priceH=80; break;
            case '5': priceL=80; priceH=1000000000; break;
            default: priceL=0; priceH=1000000000; break;

          }
          switch(rating){
            case '1': ratingL=0; ratingH=2; break;
            case '2': ratingL=2; ratingH=4; break;
            case '3': ratingL=4; ratingH=7; break;
            case '4': ratingL=7; ratingH=1000000000; break;
            default: ratingL=0; ratingH=1000000000; break;

          }
          Axios.post("http://localhost:3000/filterR", {subject:subject,priceL:priceL,priceH:priceH,ratingL:ratingL,ratingH:ratingH});
      };



      return (

        <div className='filter'> 
        <h1 className='fh1'> Filter</h1>
        <h1 className='fh2' > Price &nbsp;&nbsp;&nbsp;&nbsp;
        <select onChange={(event)=>{
            setPrice(event.target.value);
          }
          }>
        <option value="" default selected>Select Price</option>
        <option value="1">Free</option>
        <option value="2">20 or Less</option>
        <option value="3">Between 20 and 50</option>
        <option value="4">Between 50 and 80</option>
        <option value="5">80 or More</option>
        </select>
        </h1>
  
        <br></br>
        <br></br>
        <br></br>
  
        <h1 className='fh2'> Rating &nbsp;&nbsp;
        <select   onChange={(event)=>{
            setRating(event.target.value);
          }
          } >
        <option value="" default selected>Select Rating</option>
        <option value="1">2 or Less</option>
        <option value="2">Between 2 and 4</option>
        <option value="3">Between 4 and 7</option>
        <option value="4">7 or More</option>
        </select>
        </h1>
  
        <br></br>
        <br></br>
        <br></br>
  
  
        <h1 className='fh2'> Subject &nbsp;&nbsp;
        <input  type="text" className="fi" placeholder="Enter a subject" 
          onChange={(event)=>{
            setSubject(event.target.value);
          }
          }/>
        </h1>
  
        <br></br>
        <br></br>
  
        <button className="b4" onClick={filterCourse}> Filter  </button>
  
        </div>
     
      );
    
 
  
   
}
export default FilterPar;