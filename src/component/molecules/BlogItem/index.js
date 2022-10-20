import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterBg } from '../../../assets';
import { Button, Gap } from '../../atoms';
import './blogItem.scss';

const BlogItem = () => {
  const navigate = useNavigate();
  return (
    <div className='blog-item'>
        <img className='image-thumb' src={RegisterBg} alt='pst' />
        <div className='content-detail'>
            <p className='title'>Title Blog</p>
            <p className='author'>Author - Date post</p>
            <p className='body'>Lorem ipsum dgdsg dsdgaeg agdagdg</p>
            <Gap height={20} />
            <Button title='View Detai' onClick={()=>navigate('/detail-blog')} />
        </div>
    </div>
  )
}

export default BlogItem
