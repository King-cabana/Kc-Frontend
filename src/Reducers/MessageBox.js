import React from 'react'

export const MessageBox = (props) => {
    return (
       // <div className={`alert alert-${props.variant || 'info'}`}>
       <div>
        {props.children}          
        </div>
    )
}

export default MessageBox