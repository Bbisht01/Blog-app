import React from 'react';
import { IoTrash } from "react-icons/io5";
import "./WriteBlog.css"

const Blog = ({blog, onDelete }) => {
  return (
    <div className="row mb-3" id='postedComments' >
      <div className="col-4">
          <h6>{blog.title}</h6>
      </div>
      <div className="col-12">       
        <p>{blog.post}</p>
      </div>
      <div className="col-12">       
        <img src ={blog.image} alt='writeBlogs' height="200px"/>
      </div>
      <div className="col-8" id="deleteButton">
        <button type="button"  onClick={() => onDelete(blog.id)}><IoTrash/></button>
      </div>
      
    </div>
  )
}

export default Blog;

