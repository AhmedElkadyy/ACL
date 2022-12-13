
import './FilterResults.css'
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
function FilterResults (){
    const [filterResults, setFilterResults] = useState ([])
    useEffect(() => {
        Axios.get("http://localhost:3000/filterResultR").then(function (response) {
            setFilterResults(response.data);

        });
    },[] );


    
    return (
        
        <div>
  <h1>Filter Results</h1>
  <br></br>
            { filterResults.map((val,key)=>{
                return <div> <h2 className='FRh1'>  {val.Title} </h2>
                <br></br>
                <h2 className='FRh2'> Total Hours: {val.TotalHoursCourse} &nbsp;&nbsp; 
                Rating: {val.Rating} &nbsp;&nbsp; Price: {val.Price} &nbsp;&nbsp;
              </h2>
              <br></br>
                 <h2>  __________  </h2>
                </div>

            }

            )
            }
            
            
        
      
        </div>
    );

}

export default FilterResults;