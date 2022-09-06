import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Display from "./Display";

function Search(){
    const [img,setimgs]=useState({});
    
    async function getImg(){
        try {
        const baseURL="https://api.pexels.com/v1/curated"
        const response=await fetch (baseURL,{
            method:'GET',
            headers:{
                Accept:"application/json",
                Authorization:process.env.REACT_APP_API_KEY
            }
        })
        setimgs(await response.json())
        console.log(img,"Sucessfully fetched!!") ;
        } 
        catch (error) {
            console.log(error,"error in fetching")
        }
    }
    useEffect(() =>getImg,[0])

    return(<div>
<form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
           </form>
            <Display val={img.photos}/>
          </div>
    )
}
export default Search;
