import React from 'react';
import BlogCard from './BlogCard';
import './blog.css'

function Blog() {
  return (
    <div className='blogcontainer'>
      <div className='blog-page'>
        <div className='blogs'>
           <h1>My Blogs</h1>
           <BlogCard />
        </div> 
      </div>
    </div>
  )
}

export default Blog