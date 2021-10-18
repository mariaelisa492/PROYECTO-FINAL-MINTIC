import React from 'react';
import { Button, Modal} from "react-bootstrap";
import {FormProduct} from "../FormProduct/FormProduct";

export const Popup = ({title,size='',show,handleClose,inputItems,setInputItems, handleChange, btnTitle}) => {
    return (
        <div>
            <Modal size={size} show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormProduct inputProducts={inputItems} setInputProducts={setInputItems}/>
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
