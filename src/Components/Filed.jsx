import React from 'react'

const Filed = ({lblfor,children,txttype}) => {
    return (
        <div className='flex gap-6 justify-end'>
            <label htmlFor={lblfor}>{children}</label>
            <input className='border border-b-3 text-black ' type={txttype} id={lblfor} />
        </div>
    )
}

export default Filed