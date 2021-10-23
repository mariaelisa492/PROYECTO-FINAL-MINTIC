import React from 'react';
import { Button, Modal} from "react-bootstrap";
import {FormSales} from "../FormSales/FormSales";

export const Popup = ({title,size='',show,handleClose,inputItems,setInputItems, handleChange, btnTitle}) => {
    return (
        <div>
            <Modal size={size} show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormSales inputSales={inputItems} setInputSales={setInputItems}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleChange}>
                        {btnTitle}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
