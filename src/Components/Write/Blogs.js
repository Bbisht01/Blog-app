import Blog from './Blog'
import React from 'react';



const Blogs = ({ blogs, onDelete }) => {
  
    return (
        <div className="col-md-6 p-1                                                                                                                                                                                                                                                                                    ">
          {blogs.map((blog) => (
            <>
          <Blog key={blog.id} blog={blog} onDelete={onDelete}/>          
          </>
          ))}
        </div>
    )
}

export default Blogs;