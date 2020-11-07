import React from 'react'
import './form-input.styles.scss'

function FormInput({ handleChange, label, ...restProperty }) {
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...restProperty} />
            {label ? (
                <label className={`${restProperty.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
            ) : null}
        </div>
    )
}


export default FormInput

//  handlechnage prop seems useless