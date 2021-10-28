import '../App.css';
import {useState} from 'react';
import axios from 'axios';
import ShowTestInfo from './ShowTestInfo';
import { Redirect } from 'react-router';


function ExamForm() {
    
    const [formDetails, setformDetails] = useState({"name":"","roll":"","email":"","uniqueID":""})
    const [data, setData] = useState({})
    const [redirect, setRedirect] = useState(false)
    
    function submitHandler(e){
        e.preventDefault();
        //console.log(formDetails,"Can get data on submit");
        
       axios.post("http://letsproctorbackend.herokuapp.com/api/exam", {formDetails})
      .then(res => {
        //console.log(res["data"],"DATA AXIOS");
        setData(res["data"])
        console.log(res);
        setRedirect(true);
        setData(res);
        
      })
      .catch(function (error) {
            console.log(error);
        });
        
    }
    
    if (redirect){
    return(
    <Redirect
            to={{
            pathname: "/exammain",
            state: { data: data }
          }}
        />
    );}
    
    return(
    <>
    <div className = "sectionheading">
    Exam Form
    </div>

    <form className ="container" onSubmit={(e)=>{submitHandler(e)}} >
        <div className = "form-group">
            <input className = "form-control" name = "name" placeholder = "Please Enter Your Name" 
            type="text"
            value = {formDetails.name}
            onChange={e=>setformDetails({...formDetails,name:e.target.value})}/>
        </div>
        <div className = "form-group">
            <input className = "form-control" name = "roll_no" placeholder = "Please Enter Your Roll no" 
            type="text"
            value = {formDetails.roll}
            onChange={e=>setformDetails({...formDetails,roll:e.target.value})}/>
        </div>
        
        
        
        
        <div className = "form-group">
            <input className = "form-control" name = "email" placeholder = "Please Enter Your Email ID" 
            type="text"
            value = {formDetails.email}
            onChange={e=>setformDetails({...formDetails,email:e.target.value})}/>
        </div>
        <div className = "form-group">
            <input className = "form-control" name = "uniqueID" placeholder = "Please Enter Test Unique Code"
            type="text"
            value = {formDetails.uniqueID}
            onChange={e=>setformDetails({ ... formDetails,uniqueID:e.target.value})}/>
        </div>
        
        <button className= "waves-effect waves-light btn light-green accent-3"><b>I am Ready</b></button>
    </form>
    </>
    );
}
 export default ExamForm;