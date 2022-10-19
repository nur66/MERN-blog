import React from 'react';
import { RegisterBg } from '../../../assets';
import './blogItem.scss';

const BlogItem = () => {
  return (
    <div className='blog-item'>
        <img className='image-thumb' src={RegisterBg} alt='pst' />
        <div className='content-detail'>
            <p className='title'>Title Blog</p>
            <p className='author'>Author - Date post</p>
            <p className='body'>Lorem ipsum dgdsg dsdgaeg agdagdg</p>
        </div>
    </div>
  )
}

export default BlogItem
