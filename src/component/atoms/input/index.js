// folder component untuk halaman yang berulang2 dipakai
// atoms untuk component kecil yang akan di panggil berkali2

import React from 'react';
import './input.scss';

// input ini akan dinamis sehingga membutuhkan props, yaitu label dan sisanya semua
const Input = ({label, ...rest}) => {
  return (
    <div className='input-wrapper'>
        <p className='label'>{label}</p>
        <input className='input' {...rest} />
    </div>
  )
}

export default Input
