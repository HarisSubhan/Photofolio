import React from 'react'

const Button = ({ content, color, text  }) => {
  return (
    <>
    <button className='btn' style={{ background: color, color: text }} >
        {content}
    </button>
    </>
  )
}

export default Button