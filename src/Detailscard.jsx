import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { getdetailsAPI } from './service/allApi';
function Detailscard({setGetstatus,item, addstatus}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getalldetails = async () => {
        const result = await getdetailsAPI()
        console.log(result);
        setGetstatus(result.data)
    }

    useEffect(() => {
        getalldetails()
    }, [addstatus])
    return (
        <>
            <div className="row">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <Card className='border border-0  bg-warning rounded-0 mt-2' style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={item?.profile} />
                    <Card.Body className='' style={{ fontWeight: "bold" }}>
                        <Card.Title style={{ fontWeight: "bold" }}>Name: {item?.name}</Card.Title>
                        <Card.Text>
                            Age: {item?.age}
                        </Card.Text>
                        <Card.Text>
                            Contact: {item?.contact}
                        </Card.Text>
                    </Card.Body>
                    <div className='d-flex justify-content-between'>
                        <button onClick={handleShow} className='rounded-0 btn btn-primary '>Edit</button>
                        <Modal show={show} centered onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title style={{ fontWeight: "bold" }} className='text-warning'>Edit Details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <input type="text" className=' mt-2 form-control py-2 rounded-0 bg-warning' style={{ fontWeight: "bold" }} placeholder='Profile pic url' />
                                <input type="text" className=' mt-2 form-control py-2 rounded-0 bg-warning' style={{ fontWeight: "bold" }} placeholder='Name' />
                                <input type="number" className=' mt-2 form-control py-2 rounded-0 bg-warning' style={{ fontWeight: "bold" }} placeholder='Age' />
                                <input type="number" className=' mt-2 form-control py-2 rounded-0 bg-warning' style={{ fontWeight: "bold" }} placeholder='Contact Number' />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger rounded-0" >
                                    Cancel
                                </Button>
                                <Button variant="warning rounded-0" >
                                    Save changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <button className='rounded-0 btn btn-danger '>Delete</button>
                    </div>
                </Card></div>
            </div>
        </>
    )
}

export default Detailscard