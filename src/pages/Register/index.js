import React from 'react'
import { RegisterBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../component'
import './register.scss'

const Register = () => {
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
            <Button title="Register" />
            <Gap height={100} />
            <Link title="Kembali ke login" />
        </div>
    </div>
  )
}

export default Register
