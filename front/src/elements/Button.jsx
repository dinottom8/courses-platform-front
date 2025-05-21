import React from "react";
import '../styles/button.css'

export default function Button({ type, content, set }) {
    return (
        <button type={type} className={ set === 'primary' ? 'button-primary' : 'button-secondary' }>{content}</button>
    )
}