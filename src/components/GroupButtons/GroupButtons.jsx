import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const GroupButtons = () => {
  return (
    <>
      <div className='container d-flex justify-content-center'>
        <ButtonGroup aria-label="GroupButtons">
          <Button variant="light" className='buttons-group'>All</Button>
          <Button variant="light" className='buttons-group'>Travel</Button>
          <Button variant="light" className='buttons-group'>Lifestyle</Button>
          <Button variant="light" className='buttons-group'>Business</Button>
          <Button variant="light" className='buttons-group'>Food</Button>
          <Button variant="light" className='buttons-group'>Work</Button>
        </ButtonGroup>
      </div>
    </>
  )
}

export default GroupButtons
