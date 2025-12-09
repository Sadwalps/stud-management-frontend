import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Edit from './Edit';
import { adddetailsAPI } from './service/allApi';
function Home() {
    const [show, setShow] = useState(false);
    const [preview, setPreview] = useState("")
    const [key, setKey] = useState(0)

    const handleClose = () => {
        handleCancel()
        setShow(false);
    }
    const handleShow = () => setShow(true);
    const [details, setDetails] = useState({
        profile: preview?preview:"",
        name: "",
        age: "",
        contact: ""

    })
    console.log(details);



    const handleFile = (e) => {
        console.log(e);
        setDetails({ ...details, profile: e.target.files[0] })
    }

    const handleCancel = () => {
        setDetails({
            profile: "",
            name: "",
            age: "",
            contact: ""
        })
        setPreview("")
        if (key == 0) {
            setKey(1)
        } else {
            setKey(0)
        }
    }

    const handleAdd=async()=>{
        const { profile,name,age,contact} = details
        console.log(profile,name,age,contact);
        if(!profile || !name || !age || !contact){
            alert(`Fill the form completely`)
        }else{
           
             const result = await adddetailsAPI({profile,name,age,contact})
             if(result.status>=200 && result.status<300){
               alert(`Details added successfully`)  
             }else{
                alert(`hsajhas`)
             }  
        }
        
    }


    useEffect(() => {
        if (details.profile) {
            setPreview(URL.createObjectURL(details.profile))

        }
    }, [details.profile])






    return (
        <>
            <div id='homepage' className='d-flex justify-content-center align-items-center'>
                <button onClick={handleShow} className='btn btn-warning rounded-0 btn-lg' style={{ fontWeight: "bold" }}>Add details</button>
                <Modal show={show} centered onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ fontWeight: "bold" }} className='text-warning'>Add Students Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='container-fluid '>
                            <label htmlFor="profile" className='d-flex flex-column justify-content-center w-100'>
                                <input key={key} value={details.value} type="file" id='profile' className='d-none' onChange={(e) => handleFile(e)} />
                                <img src={preview ? preview : "https://img.freepik.com/premium-photo/user-icon-with-tick-mark_1255023-23188.jpg"} className='w-100' alt="" />
                            </label>

                        </div>
                        <input value={details.name} onChange={(e) => setDetails({ ...details, name: e.target.value })} type="text" className=' mt-2 form-control py-2 rounded-0 bg-warning' style={{ fontWeight: "bold" }} placeholder='Name' />
                        <input value={details.age} onChange={(e) => setDetails({ ...details, age: e.target.value })} type="number" className=' mt-2 form-control py-2 rounded-0 bg-warning' style={{ fontWeight: "bold" }} placeholder='Age' />
                        <input value={details.contact} onChange={(e) => setDetails({ ...details, contact: e.target.value })} type="number" className=' mt-2 form-control py-2 rounded-0 bg-warning' style={{ fontWeight: "bold" }} placeholder='Contact Number' />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger rounded-0" onClick={handleCancel}>
                            Cancel
                        </Button>
                        <Button variant="warning rounded-0" onClick={handleAdd}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

            {/* All students details */}
            <div id='allstudentsdetails'>
                <h1 className='text-center text-warning mt-4 mb-3' style={{ fontWeight: "bold" }}>All students details</h1>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-md-4 d-flex justify-content-center align-items-center ">
                            <Card className='border-0 bg-warning rounded-0 shadow-full mt-2' style={{ width: '22rem', fontWeight: "bold" }}>
                                <Card.Img variant="top" className='rounded-0' src="https://img.freepik.com/premium-photo/user-icon-with-tick-mark_1255023-23188.jpg" />
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: "bold" }}>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>

                                </Card.Body>
                                <div className='d-flex justify-content-between'>
                                    <Edit />
                                    <button className='btn btn-danger rounded-0' style={{ fontWeight: "bold" }}>Delete</button>
                                </div>
                            </Card>
                        </div>
                    </div>

                </div>

                <h1 className='text-center text-warning mt-4 mb-3' style={{ fontWeight: "bold" }}>No students details added yet!!!</h1>
            </div>
        </>
    )
}

export default Home