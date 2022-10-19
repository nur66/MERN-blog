import React from 'react'
import { LoginBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../component'

const Login = () => {
  return (
    <div className='main-page'>
        <div className='left'>
            <img src={LoginBg} alt="-background" className="bg-image" />
        </div>
        <div className='right'>
            <p className='title'>Form Login</p>
            <Input label="Email" placeholder="Email" />
            <Gap height={18} />
            <Input label="Password" placeholder="Password" />
            <Gap height={50} />
            <Button title="Login" />
            <Gap height={100} />
            <Link title="Belum punya akun, silahkan daftar" />
        </div>
    </div>
  )
}

export default Login
