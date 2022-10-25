// jika menggunakan 1 reducer

// import React, { useEffect, useState } from 'react'; // setelah kita mempunyai state global ga perlu pake useState
import React, { useEffect } from 'react';
import { BlogItem, Button, Gap } from '../../component';
import './home.scss';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'; // untuk menggunakan state gobal / redux

const Home = () => {
  // const [dataBlog, setDataBlog] = useState([]); // setelah mempunyai sateglobal kita ga perlu lagi ini

  // menggunakan state global
  // const stateGlobal = useSelector(state => state);
  const {dataBlogs, name} = useSelector(state => state);
  // console.log('state global: ', stateGlobal);
  console.log('data blog global:', dataBlogs);
  const dispatch = useDispatch();

  useEffect(() => {
      // menggunakan dan mengubah state global
      // ini akan merujuk ke store.js, otomatis sekarang kita bisa mengubah state global kita
      setTimeout(() => {
          dispatch({type: 'UPDATE_NAME'});
      }, 3000);


      Axios.get('http://localhost:5000/v1/blog/posts?page=1&perPage=5')
      .then(result => {
        console.log('Data api : ', result.data);
        const responApi = result.data;

        // setDataBlog(responApi.data); // setelah mempunyai state global kita tidak perlu lagi ini
        // mengubah state global
        dispatch({type: 'UPDATE_DATA_BLOG', payload: responApi.data});
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  const navigate = useNavigate();
  return (
    <div className='home-page-wrapper'>
        <div className='create-wrapper'>
            <Button title="create blog" onClick={()=>navigate('/create-blog')} />
        </div>

        {/* coba menggunakan state global */}
        <p>{name}</p>

        <Gap height={20} />
        <div className='content-wrapper'>
            {/* {dataBlog.map(blog => { */}
            {dataBlogs.map(blog => { // dataBlogs pake s artinya kita memanggil state global
              return <BlogItem 
                key={blog._id} 
                image={`http://localhost:5000/${blog.image}`} 
                title={blog.title}
                body={blog.body}
                name={blog.author.name}
                date={blog.createdAt}
              />
            })}
            {/* <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem /> */}
        </div>
        <div className='pagination'>
            <Button title='Previous' />
            <Gap width={20} />
            <Button title='Next' />
        </div>
        <Gap height={20} />
    </div>
  )
}

export default Home
