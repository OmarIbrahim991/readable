import React from 'react'


const Input = ({ text, setText, label, ...props}) => (
    <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <label style={{ flex: 1 }}>{label}</label>
        <input
            className="input"
            value={text}
            onChange={e => setText(e.target.value)}
            style={{ flex: 4, padding: "0.25em" }}
            {...props}
        />
    </div>
)

export default Input
