import {React,createRef,useState,useEffect} from "react";
import { render } from "react-dom";
import VideoRecorder from "react-video-recorder";
import axios from 'axios';
import '../App.css';
import Canvas from "./Canvas"
import PageVisibility from 'react-page-visibility';
import useResize from "use-resizing"


function ExamMain (props) {
  const [videoBlob,setvideoBlob] = useState()
  const [totaltabChange, settotaltabChange] =useState(0)
  const [videoresponse,setvideoresponse] = useState()
  const [totalSize, settotalSize] = useState(0)

  const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
  //console.log(videoBlob)
  //console.log(props.location.state,"pros received")
  const propdata = props.location.state.data
  const screenSize = useResize()
  
  useEffect(()=>{
  var screenResolution = window.screen.width*window.screen.height
  var broswerSize = screenSize.width * screenSize.height
  if (broswerSize*100/screenResolution < 50)
  {
      console.log(totalSize)
  settotalSize(before=>before+1)
  }
  });
  
  
  
  //if (document.visibilityState == "hidden"){console.log("hidden")}
  function handleVisibilityChange(){
      //console.log("visibility change")
      settotaltabChange(before=>before+0.5)
      //console.log(totaltabChange)
  }

  
  function videoprocess(videoBlob) {
  
  var formData = new FormData();
  var extension = videoBlob.type.split('/')[1];
  
  var imageFile = new File([videoBlob], `${Date.now()}.${extension}`, {
           type: videoBlob.type,});
  formData.append('image', imageFile);
  console.log(formData,"After")
  axios({
            method: 'post',
            url: 'http://letsproctorbackend.herokuapp.com/api/video',
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              
            },
            data: formData,
          })
            .then(response => {
              console.log(response);
              setvideoresponse(response);
            })
            .catch(err => {
              console.log(err);
            });
  };
  
  function submitTestHandler(){
      console.log("in submitTestHandler")
      axios.post("http://letsproctorbackend.herokuapp.com/api/submittest", {"alldata":[totaltabChange,totalSize,videoresponse.data,propdata]})
      .then(res => {
        //console.log(res["data"],"DATA AXIOS");
        
        console.log(res);
        
        
      })
      .catch(function (error) {
            console.log(error);
        });
      
      
  }
  
  
  return(
  <>
  <div className="mainexam">
  
  
  
  <PageVisibility onChange={handleVisibilityChange} />
  
  {/*<div className = "overlay">

  </div>*/}
  <div className="canvas">
  <Canvas name={props.location.state.data.email}/>
  </div>
  <div className = "videocam">
  <VideoRecorder
    countdownTime={0}
    isOnInitially
    onRecordingComplete={(videoBlob) => {
      videoprocess(videoBlob)

    }}
    
  />
  <button onClick={()=>submitTestHandler()} id = "endtest" className= "waves-effect waves-light btn light-green accent-3"> END TEST </button>
  
  </div>
  <div className = "googleform">
  <iframe src={props.location.state.data.g_form} width="640" height="1200" frameborder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
  </div>
  </div>
  </>
  )
  };

export default ExamMain;
