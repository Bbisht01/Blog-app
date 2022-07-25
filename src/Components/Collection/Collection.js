import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { IoTrash } from "react-icons/io5";
import "./Collection.css"

export default function Collection() {
  const history = useHistory()

 const [publishedData, setPublishedData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/blogs")
    .then((res)=> setPublishedData(res.data))
    
  },[])
  const redirectToWritePage = ()=>{
      history.push('/write')
  }
  return (
    <div  className="mainContainer">
      <h3>Your Stories</h3>
      <div className='publishedTitle'><p>Published</p></div>
      <button className='writeButton' onClick={()=> redirectToWritePage()}>Write Story</button>
      <div className='contentcard'>
        {
          publishedData.map((ele)=>{
            return(
              <div className='innerCard'>
              <h6>{ele.title}</h6>
              <p>{ele.post}</p>
              <div style={{width:"50%",height:"200px",marginBottom:"20px"}}>
              <img src={ele.image} width="100%" height="100%"/>
              </div>              
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
