import '../App.css';

function ShowTestInfo(props){
    console.log(props.location.state.data,"<<<<<<<<HERE I AM")
    return(
    <>
    <div class = "sectionheading">
    Test Created
    </div>

    <div class="dashbox">
    <h3>This is what we got from you</h3>
    Test Name: {props.location.state.data["title"]}<br/>
    Google Form Link: {props.location.state.data["gform"]}<br/>
    Email Id: {props.location.state.data["email"]}<br/>
    Unique Id generated: {props.location.state.data["unique_id"]}
    </div>
    </>
    )
}

export default ShowTestInfo;