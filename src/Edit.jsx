import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { editdetailsAPI } from './service/allApi';
function Edit({ item, setEditstatus }) {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        handleCancel()
    }
    const handleShow = () => setShow(true);

    const [editdetails, setEditdetails] = useState({
        name: item?.name,
        age: item?.age,
        contact: item?.contact,
        profile: item?.profile
    })
    console.log(editdetails);

    const handleCancel = () => {
        setEditdetails({
            name: item?.name,
            age: item?.age,
            contact: item?.contact,
            profile: item?.profile
        })
    }

    const handleEdit = async (id) => {
        const { name, age, contact, profile } = editdetails
        console.log(name, age, contact, profile);
        if (!name || !age || !contact || !profile) {
            alert(`Fill the form completely`)
        } else {
            const reqbody = {
                name: name,
                age: age,
                contact: contact,
                profile: profile
            }
            const result = editdetailsAPI(id, reqbody)
            console.log(result);

            setEditstatus(result)
            alert(`Details successfully updated`)
            setTimeout(() => {
                handleClose()
            }, 1000);
        }
    }

    return (
        <>
            <button onClick={handleShow} className='btn btn-primary rounded-0' style={{ fontWeight: "bold" }}>Edit</button>
            <Modal show={show} centered onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontWeight: "bold" }} className='text-warning'>Edit Students Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input value={editdetails.profile} onChange={(e) => setEditdetails({ ...editdetails, profile: e.target.value })} type="text" className=' mt-2 form-control py-2 rounded-0 bg-warning' style={{ fontWeight: "bold" }} placeholder='Profile pic url' />
                    <input value={editdetails.name} onChange={(e) => setEditdetails({ ...editdetails, name: e.target.value })} type="text" className=' mt-2 form-control py-2 rounded-0 bg-warning' style={{ fontWeight: "bold" }} placeholder='Name' />
                    <input value={editdetails.age} onChange={(e) => setEditdetails({ ...editdetails, age: e.target.value })} type="number" className=' mt-2 form-control py-2 rounded-0 bg-warning' style={{ fontWeight: "bold" }} placeholder='Age' />
                    <input value={editdetails.contact} onChange={(e) => setEditdetails({ ...editdetails, contact: e.target.value })} type="number" className=' mt-2 form-control py-2 rounded-0 bg-warning' style={{ fontWeight: "bold" }} placeholder='Contact Number' />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger rounded-0" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="warning rounded-0" onClick={() => handleEdit(item.id)}>
                        Save changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Edit