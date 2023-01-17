
import { Link } from 'react-router-dom'

import { Navigate } from "react-router-dom";
import React, { useState } from 'react';
import Axios from 'axios';



function PaymentTermsT() {
    
    const [ButtonPaymentTerms, setButtonPaymentTerms] = useState(false);
    if (ButtonPaymentTerms){
        return <Navigate  to="/signupHome"/>

    }
    

    return( 
           
        <div className="login">

            <div className="loginContainer">
            <h1>Payment Terms</h1>
            <p className='loginP'>PAYMENT TERMS

            Payment Terms Invoices are to be submitted in monthly arrears, after services have been completed, to the address specified below. Payment will be net thirty (30) days after receipt of an invoice in a format acceptable to the COUNTY, as applicable. Invoices shall be verified and approved by COUNTY and subject to routine processing requirements. The responsibility for providing an acceptable invoice to COUNTY for payment rests with A-E. Incomplete or incorrect invoices are not acceptable and will be returned to the A-E for correction. Billing shall cover services and/or goods not previously invoiced. The A-E shall reimburse the COUNTY for any monies paid to the A-E for goods or services not provided or when goods or services do not meet the CONTRACT requirements. Payments made by COUNTY shall not preclude the right of COUNTY from thereafter disputing any items or services involved or billed under this CONTRACT and shall not be construed as acceptance of any part of the goods or services

            </p>
<button  className="loginBtn" onClick={()=>{setButtonPaymentTerms(true)}} >ACCEPT</button>

        </div>

        </div>

        


    )



}

export default PaymentTermsT;


