import AddBlog from './AddBlog'
import React from 'react';
import { useState, useEffect } from 'react'
// import { useDispatch,useSelector } from 'react-redux'
import Blogs from './Blogs';
import "./WriteBlog.css"
// import { publishedData } from '../../Redux/Action';

const WriteBlogs = () => {

  //const dispatch = useDispatch()
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const blogsFromServer = await fetchBlogs()
      setBlogs(blogsFromServer)
    }
    getBlogs()
  }, [])

  const fetchBlogs = async () => {
    const res = await fetch('http://localhost:5000/blogs')
    const data = await res.json()

    return data
  }

  const deleteBlog = async (id) => {
    await fetch(`http://localhost:5000/blogs/${id}`, {
      method: 'DELETE',
    })
    setBlogs(blogs.filter((blog) => blog.id !== id))
  }

  const addBlog = async (blog) => {
    console.log(blog)
    const res = await fetch('http://localhost:5000/blogs', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(blog),
    })

    const data = await res.json()

    setBlogs([...blogs, data])
    
  
  }

  return (
    <div className="container" >
      <div className="row" >
        <AddBlog onAdd={addBlog}/>
        {blogs.length > 0 ? <Blogs blogs={blogs} onDelete={deleteBlog}/> : 'No blogs'}
      </div>
    </div>
  )
}

export default WriteBlogs
