import '../App.css';

function ShowResults(props){
    
    
    
    console.log(props.location.state.data["imageurls"]);
    var x = props.location.state.data["imageurls"]
    for (var i=0; i<=x.length; i++){
        console.log(x[i])
    }
    
    return(
    <>
    <div class = "sectionheading">
    Proctoring Result
    </div>
    
    <div class = "subheading">
    These are Violations Detected
    </div>

    <table class="styled-table">
    <thead>
        <tr>
            <th>Frames</th>
            <th>Tilted Head</th>
            <th>Multiple or no People</th>
            <th>Tab Changed</th>
  
            <th>Browser Size Reduced</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{props.location.state.data["frames"]}</td>
            <td>{props.location.state.data["headtilt"]}</td>
            <td>{props.location.state.data["people"]}</td>
            <td>{props.location.state.data["tabchange"]}</td>
       
            <td>{props.location.state.data["browsersize"]}</td>
        </tr>
    </tbody>
    </table>
    
    
    
    <table class="styled-table">
    <thead>
        <tr>
            <th>Violation</th>
            <th>Image</th>
        </tr>
    </thead>
    <tbody>
        
        {x.map(y => (
        <tr>
            <td>{y[1]}</td>
            <td><img src = {y[0]}></img></td>
        </tr>
        
    ))}
    
        
        
    </tbody>
    </table>
    
    </>
    )
}

export default ShowResults;