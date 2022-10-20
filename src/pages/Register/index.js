import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../component';
import './register.scss';

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className='main-page'>
        <div className='left'>
            <img src={RegisterBg} alt="Register-background" className="bg-image" />
        </div>
        <div className='right'>
            <p className='title'>Form Register</p>
            <Input label="Full Name" placeholder="Full Name" />
            <Gap height={18} />
            <Input label="Email" placeholder="Email" />
            <Gap height={18} />
            <Input label="Password" placeholder="Password" />
            <Gap height={50} />
            <Button title="Register" onClick={()=>navigate('/login')} />
            <Gap height={100} />
            <Link title="Kembali ke login" onClick={()=>navigate('/login')} />
        </div>
    </div>
  )
}

export default Register
