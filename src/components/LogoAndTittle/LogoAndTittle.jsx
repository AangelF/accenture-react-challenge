import React from 'react'
import '../styles.css';

const LogoAndTittle = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <div className="orange-color d-flex">
          <p className="fs-3">[</p>
          <p className="d-flex align-items-end pb-1">Making your Life Easier</p>
          <p className="fs-3">]</p>
        </div>
        <p className="fs-1 fw-bold text-center">Discovering the World</p>
      </div>
    </>
  )
}

export default LogoAndTittle
