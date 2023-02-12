import React from 'react'
import { Link } from 'react-router-dom';
import '../styles.css';

const ReturnArrow = () => {
  return (
    <>
      <Link to="/" className='text-decoration-none'>
        <div className="d-flex white-color">
          <i className="fa-solid fa-arrow-left m-1"></i>
          <p className="fst-bold">View Posts</p>
        </div> 
      </Link>
    </>
  )
}

export default ReturnArrow