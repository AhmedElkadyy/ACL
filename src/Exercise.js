import { useEffect, useState } from 'react';
import './Exercise.css';
import axios from 'axios';


function Exercise() {
  const [exercise,Setexercise]=useState([]);
  const [Question,SetQuestion]=useState("");

  const ViewExercises =(i) =>{
    console.log(Question)


  }
  
  

    useEffect(() =>{
        axios.get("http://localhost:3000/readExercises").then((response)=>{
          console.log(response);
          Setexercise(response.data);

        })
      },[])

    return (
        <div align="center">
            <h1 align="center">Exercises</h1>
            
            {exercise.map((val,key)=>{
            const x=val.Exercies;
            let i=-1
      return <div>{x.map((val1,key1)=>{
       
        i=i+1
        return <button className='input' onClick={(event)=>{
          SetQuestion(getSelection.text)
          ViewExercises(Question);

        }}
        
        >{"EXERCISE "+i}</button> 
        
      })}
      
      {exercise.map((val,key)=>{
      return <h1>{val.Exercies[1]}</h1>

    }
    
    )}
      </div>
     
    })}
    

    
    
            
        </div>
    )
}
export default Exercise;