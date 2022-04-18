import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Thanku() {
    const navigate = useNavigate();
    function goBack(){
        navigate('/', { replace: true })
    }

  return (
    <div>
        <br></br>
        <center>
        <h1 class="fs-1">Thank you for using our super special app, hehe! </h1>
        <br></br>
        <button type="button" class="btn btn-dark" onClick={goBack}>Start Search Again</button>
        </center>
    </div>
  )
}
