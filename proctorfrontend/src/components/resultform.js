import '../App.css';
import {useState} from 'react';
import axios from 'axios';
import ShowTestInfo from './ShowTestInfo';
import { Redirect } from 'react-router';


function ResultForm() {
    
    const [formDetails, setformDetails] = useState({"email":"","roll":"","uniqueID":""})
    const [data, setData] = useState({})
    const [redirect, setRedirect] = useState(false)
    
    function submitHandler(e){
        e.preventDefault();
        //console.log(formDetails,"Can get data on submit");
        
       axios.post("http://letsproctorbackend.herokuapp.com/api/results", {formDetails})
      .then(res => {
        //console.log(res["data"]);
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
            pathname: "/showresults",
            state: { data: data }
          }}
        />
    );}
    
    return(
    <>
    <div className = "sectionheading">
    Get Student Proctoring Results
    </div>

    <form className ="container" onSubmit={(e)=>{submitHandler(e)}} >
        <div className = "form-group">
            <input className = "form-control" name = "email" placeholder = "Student Email Id" 
            type="text"
            value = {formDetails.email}
            onChange={e=>setformDetails({...formDetails,email:e.target.value})}/>
        </div>
        <div className = "form-group">
            <input className = "form-control" name = "roll" placeholder = "Student Roll No" 
            type="text"
            value = {formDetails.roll}
            onChange={e=>setformDetails({...formDetails,roll:e.target.value})}/>
        </div>
        <div className = "form-group">
            <input className = "form-control" name = "uniqueID" placeholder = "Please Enter Test Unique Code"
            type="text"
            value = {formDetails.uniqueID}
            onChange={e=>setformDetails({ ... formDetails,uniqueID:e.target.value})}/>
        </div>
        
        <button className= "waves-effect waves-light btn light-green accent-3"><b>Search</b></button>
    </form>
    </>
    );
}
 export default ResultForm;