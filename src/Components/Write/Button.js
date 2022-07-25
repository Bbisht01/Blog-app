import PropTypes from 'prop-types'
import React from 'react'

const Button = ({ onClick }) => {

    return (     
        <button 
        type="submit"
        onClick={onClick}
        className='btn btn-primary'>New Post
        </button>
    )
}
// PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype
Button.propTypes = {
    onClick: PropTypes.func
}

export default Button;