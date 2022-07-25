import React from 'react';
import { useState } from 'react'
import Button from './Button'
import "./WriteBlog.css"
// import DropFile from './DropFile';

import "./WriteBlog.css"

const AddBlog = ({onAdd}) => {
    const [post, setPost] = useState('')
    const [title, setTitle] = useState('')

    const [image, setImage]= useState("");

    const [loading, setLoading]= useState("");

    const postDetails = (pics) => {		
      if (pics === undefined) {
          return;
        
      }
      setLoading("Loading ...");
      if (pics.type === "image/jpeg" || pics.type === "image/png") {
        const data = new FormData();
        data.append("file", pics);
        data.append("upload_preset", "Pet app");
        data.append("cloud_name", "dxma3isad");
        fetch("https://api.cloudinary.com/v1_1/dxma3isad/image/upload", {
          method: "POST",
          body: data,
        })
          .then((res) => res.json())
          .then((data) => {					
            console.log(data);
            setImage(data.url.toString())
            setLoading("");
          })
          .catch((err) => console.log(err))
          
      }
    };



    const onSubmit = (e) => {
      e.preventDefault()

      if(post==="" || title=== "" ||image === "") {
        alert("please fill in all the blanks and also upload the image")
        return
      }
      
      onAdd({post, title,image})

      setPost('')
      setTitle('')
       setImage('')
    }

  return (
    <div className="col-md-6 mb-4" id='writePostContainer'>
      <h3>Write Your story</h3>
      
      <form onSubmit={onSubmit}>
        
        <div className="mb-2">
            <h5 className="form-label"> Title</h5>
            <input type="text" className="form-control" id="postTitle" aria-describedby="Help" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="mb-4">
            <h5 className="form-label">Blog</h5>
            <textarea className="form-control" id="contentInput" rows="3" value={post} onChange={(e) => setPost(e.target.value)}/>
            {/* <FileUploadComponent/> */}
        </div>
        <div className='imageUploadCard' > 
    {image!==""? <h3>Image Uploaded</h3> :<h2>{loading}</h2>}     
      <input type="file" onChange={(e) => postDetails(e.target.files[0])}/>
    </div>
        <div>
            <Button />
        </div>
      </form>
    </div>
  )
}

export default AddBlog