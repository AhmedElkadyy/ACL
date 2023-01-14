
import './contract.css'

import React, { useState } from 'react'
import {Navigate} from "react-router-dom";

function Contract() {
     
  const [Button, setButton] = useState(false);

  if (Button){
    return <Navigate  to="/Instructor"/>
  }
  

  return (
<div>
    <p>CONTRACT ACCEPTANCE. I, the undersigned, have read and understand this agreement and acknowledge receipt of a copy. It is further understood and agreed that this agreement supersedes all prior or contemporaneous verbal or written agreements and may not be modified without the written agreement of the student and the School Official. I also understand that if I default upon this agreement I will be responsible for payment of any collection fees or attorney fees incurred by Classic Cooking Academy. My signature below signifies that I have read and understand all aspects of this agreement and do recognize my legal responsibilities in regard to this contract. Signed this day of . Signature of Student: Date: Signature of Guardian: Date:</p>

    <button onClick={()=>{setButton(true)}}>ACCEPT</button>
    
    </div>
  );
}


export default Contract;