import React from 'react';
import Button from 'react-bootstrap/Button';
import '../styles.css';

const EditButton = () => {
  return (
    <>
      <div className="d-flex justify-content-end m-2">
        <Button className="white-color edit-button shadow">
          <i className="fa-solid fa-pen"></i>
        </Button>{' '}
      </div>
    </>
  )
}

export default EditButton
