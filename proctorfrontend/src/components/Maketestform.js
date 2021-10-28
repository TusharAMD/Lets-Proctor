import '../App.css';
import {useState} from 'react';
import axios from 'axios';
import ShowTestInfo from './ShowTestInfo';
import { Redirect } from 'react-router';

function Maketestform() {
    
    const [formDetails, setformDetails] = useState({"title":"","gform":"","email":""})
    const [uniqueData, setuniqueData] = useState({})
    const [redirect, setRedirect] = useState(false)
    
    function submitHandler(e){
        e.preventDefault();
        //console.log(formDetails,"Can get data on submit");
        
       axios.post("http://letsproctorbackend.herokuapp.com/api/maketest", {formDetails})
      .then(res => {
        //console.log(res["data"]);
        setuniqueData(res["data"])
        console.log(uniqueData);
        setRedirect(true);
        console.log(redirect);
        
      })
      .catch(function (error) {
            console.log(error);
        });
        
        
    }
    
    
    if (redirect){
    return(
    <Redirect
            to={{
            pathname: "/ShowTestInfo",
            state: { data: uniqueData }
          }}
        />
    );}
    
    return(
    <>
    <div className = "sectionheading">
    Make A Test
    </div>

    <form className ="container" onSubmit={(e)=>{submitHandler(e)}} >
        <div className = "form-group">
            <input className = "form-control" name = "title" placeholder = "Title of Test for eg. Physics" 
            type="text"
            value = {formDetails.title}
            onChange={e=>setformDetails({...formDetails,title:e.target.value})}/>
        </div>
        <div className = "form-group">
            <input className = "form-control" name = "gformlink" placeholder = "Paste google form link here" 
            type="text"
            value = {formDetails.gform}
            onChange={e=>setformDetails({...formDetails,gform:e.target.value})}/>
        </div>
        <div className = "form-group">
            <input className = "form-control" name = "emailid" placeholder = "Please Enter your Email. Make sure its correct"
            type="text"
            value = {formDetails.email}
            onChange={e=>setformDetails({ ... formDetails,email:e.target.value})}/>
        </div>
        
        <button className= "waves-effect waves-light btn light-green accent-3"><b>Make Test</b></button>
    </form>
    
    
    
    </>
    );
    
    
    
    
    
}
export default Maketestform;