import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { RegisterBg } from '../../../assets';
import { Button, Gap } from '../../atoms';
import './blogItem.scss';

const BlogItem = (props) => {
  const navigate = useNavigate();
  // destructing untuk mempermudah pamanggilan
  const {image, title, name, date, body} = props;

  return (
    <div className='blog-item'>
        <img className='image-thumb' src={image} alt='pst' />
        <div className='content-detail'>
            <p className='title'>{title}</p>
            <p className='author'>{name} - {date}</p>
            <p className='body'>{body}</p>
            <Gap height={20} />
            <Button title='View Detai' onClick={()=>navigate('/detail-blog')} />
        </div>
    </div>
  )
}

export default BlogItem
