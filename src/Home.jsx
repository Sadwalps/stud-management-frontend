import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Detailscard from './Detailscard';
import { adddetailsAPI } from './service/allApi';

function Home() {

    const [show, setShow] = useState(false);
    const [addstatus, setAddstatus] = useState([])
    const [getstatus, setGetstatus] =useState([])
    const [details, setDetails] = useState({
        profile: "",
        name: "",
        age: "",
        contact: ""
    })
    console.log(details);

    const handleClose = () => {
        handleCancel()
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const handleCancel = () => {
        setDetails({
            profile: "",
            name: "",
            age: "",
            contact: ""
        })
    }

    const handleAdd = async () => {
        const { profile, name, age, contact } = details
        console.log(profile, name, age, contact);
        if (!profile || !name || !age || !contact) {
            alert(`Fill the form completely`)
        } else {
            const result = await adddetailsAPI({ profile, name, age, contact })
            if (result.status >= 200 && result.status < 300) {
                setAddstatus(result)
                alert(`Details successfully added`)
                setTimeout(() => {
                    handleClose()
                }, 1000);
            }
        }
    }


    useEffect(()=>{

    },[getstatus])


    return (
        <>
            <div id='homepage' className='d-flex justify-content-center align-items-center'>
                <button onClick={handleShow} className='btn btn-warning rounded-0 btn-lg' style={{ fontWeight: "bold" }}>Add details</button>
                <Modal show={show} centered onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ fontWeight: "bold" }} className='text-warning'>Add Students Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input value={details.profile} onChange={(e) => setDetails({ ...details, profile: e.target.value })} type="text" className=' mt-2 form-control py-2 rounded-0 bg-warning' style={{ fontWeight: "bold" }} placeholder='Profile pic url' />
                        <input value={details.name} onChange={(e) => setDetails({ ...details, name: e.target.value })} type="text" className=' mt-2 form-control py-2 rounded-0 bg-warning' style={{ fontWeight: "bold" }} placeholder='Name' />
                        <input value={details.age} onChange={(e) => setDetails({ ...details, age: e.target.value })} type="number" className=' mt-2 form-control py-2 rounded-0 bg-warning' style={{ fontWeight: "bold" }} placeholder='Age' />
                        <input value={details.contact} onChange={(e) => setDetails({ ...details, contact: e.target.value })} type="number" className=' mt-2 form-control py-2 rounded-0 bg-warning' style={{ fontWeight: "bold" }} placeholder='Contact Number' />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger rounded-0" onClick={handleCancel} >
                            Cancel
                        </Button>
                        <Button variant="warning rounded-0" onClick={handleAdd} >
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

            {/* All students details */}
            <div id='allstudentsdetails'>
                <h1 className='text-center text-warning mt-4 mb-3' style={{ fontWeight: "bold" }}>All students details</h1>
              { getstatus? <div className='container-fluid'>
                   {getstatus?.map((item)=>( <Detailscard setGetstatus={setGetstatus} item={item} addstatus={addstatus}/>))}

                </div>:

                <h1 className='text-center text-warning mt-4 mb-3' style={{ fontWeight: "bold" }}>No students details added yet!!!</h1>}
            </div>
        </>
    )
}

export default Home