import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const ModalContent = ({ show, handleClose, handleAllCountry, handleUsCountry, contactList, handleCheckboxChange, showEven, handleSearch }) => {

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>

          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-md text-white" style={{ backgroundColor: '#46139f' }} type="button" onClick={() => handleAllCountry('allContacts')} data-bs-toggle="modal" data-bs-target="#exampleModal" >All Contacts</button>
            <button className="btn btn-md text-white" style={{ backgroundColor: '#ff7f50' }} type="button" onClick={() => handleUsCountry('usContacts')} >US Contacts</button>
            <button className="btn btn-md " style={{ backgroundColor: 'white', border: '1px solid #46139f' }} type="button" onClick={handleClose} >Close</button>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className='my-3'>
            <input className='form-control' type="text" placeholder='Search by Phone'
              onChange={handleSearch}
            />
          </div>
          <div> {contactList && contactList?.results?.map((contact, index) => <div>
            <span>{" Phone: "}{contact.phone}</span>
            <span>{" Country: "}  {contact.country.name}</span>
          </div>)}
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-start">
          <label className='flex'>
            <input
              type="checkbox"
              checked={showEven}
              onChange={handleCheckboxChange}
            // className='mt-2'
            /> <span>Only even</span>
          </label>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalContent