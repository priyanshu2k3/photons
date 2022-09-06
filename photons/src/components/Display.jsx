import React from "react";
function Display(props){
    var photo=""; 
    //var element={}
    if(props.val===undefined){console.log("here"); return(<div>nothing to display</div>);}
    else{
    console.log(props.val,"display")
    var valu=props.val;
    const elements=valu.map((element) =>

    <div key={element.id} className="card" style={{width: "18rem"}}>
        <a href="https://www.pexels.com">Photos provided by Pexels</a>
        <img src={element.url} alt="" />
    <a className="card-img-top"  src={photo} alt={element.url}/>
    
    <div className="card-body">
      <h5 className="card-title">{element.photographer}</h5>
      <p className="card-text">fdsfs</p>
      <a href="#" className="btn btn-primary">Download</a>
    </div>
  </div>)

    return(
   <div>{elements}</div>
    );}

}
export default Display;