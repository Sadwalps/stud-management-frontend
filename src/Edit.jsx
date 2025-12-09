import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Edit() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button onClick={handleShow} className='btn btn-primary rounded-0' style={{ fontWeight: "bold" }}>Edit</button>
            <Modal show={show} centered onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontWeight: "bold" }} className='text-warning'>Edit Students Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='container-fluid d-flex justify-content-center'>
                        <img src="https://img.freepik.com/premium-photo/user-icon-with-tick-mark_1255023-23188.jpg" className='w-75' alt="" />
                    </div>
                    <input type="text" className=' mt-2 form-control py-2 rounded-0 bg-warning' style={{ fontWeight: "bold" }} placeholder='Name' />
                    <input type="number" className=' mt-2 form-control py-2 rounded-0 bg-warning' style={{ fontWeight: "bold" }} placeholder='Age' />
                    <input type="number" className=' mt-2 form-control py-2 rounded-0 bg-warning' style={{ fontWeight: "bold" }} placeholder='Contact Number' />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger rounded-0" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="warning rounded-0" onClick={handleClose}>
                        Save changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Edit