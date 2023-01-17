import "./SearchCourse.css" ;
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Navigate} from "react-router-dom";



function SearchCourse() {
   
    const [SearchPar, setSearchPar] = useState('');
    const [ButtonSearchCourse, setButtonSearchCourse] = useState(false);

if (ButtonSearchCourse){
  return <Navigate  to="/Results"/>
   
}
    const searchCourse = () => {        
        Axios.post("http://localhost:3000/searchCourse1", { SearchPar: SearchPar})
        setButtonSearchCourse(true);
    }

    




    return (
        <div className='SearchCourse'>
            <h1 className='SCheader'> </h1>
            <input onChange={(event) => { setSearchPar(event.target.value) }}  type="text"  placeholder="Search"/>
          <button class="btn" onClick={  searchCourse} >Search</button>
         
      
            
            

        </div>

    );
    }  

export default SearchCourse;