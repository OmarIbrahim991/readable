import React from 'react'


const Button = ({ children, ...props }) => (
    <button className="btn clickable" {...props}>
        {children}
    </button>
)

export default Button
