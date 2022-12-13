import "./ViewDetails.css"
import { Navigate } from "react-router-dom";
import React, { useState, useEffect} from 'react';
import Axios from 'axios';

function ViewDetails() {

    const [detailsList, setDetailsList] = useState ([])
    // const [subList, setSubList] = useState ([])

 
    useEffect(() => {
        Axios.get("http://localhost:3000/viewDetails").then(function (response) {
          setDetailsList(response.data);
        });
      },[] );

      // useEffect(() => {
      //   Axios.get("http://localhost:3000/viewSubtitles").then(function (response) {
      //     setSubList(response.data);
      //   });
      // },[] );

      // const subtitles = subList.map((item) => 
      //                        <div>{item}</div>
      //                      );



      return (

        <div className="viewDetails">

          { detailsList.map((val,key)=>{ 
            const sub=val.Subtitle;
            return <div> <h2 className='VDh1'>  {val.Title} </h2>
            <h2 className='VDh2'> 
            Total Hours of the Course:  {val.TotalHoursCourse}  <br></br> <br></br>
            Price: {val.Price} <br></br> <br></br>
            Discount: {val.Discount} <br></br> <br></br>
             </h2>
             <h2 className='VDh3' >Subtitles: </h2>
             <h2 className='VDh2'> {sub.map((val1,key1)=>{ 
        return <div> {val1}
        </div> 
      }
      )}</h2>
             
            </div> 
          }
          )
        }

        
    
        </div>
     
      );
    
 
  
   
}
export default ViewDetails;