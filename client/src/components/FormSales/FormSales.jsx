import React from 'react';
// import { saveImages } from './utils/saveImages';
// import { validationFunction } from './utils/validationFunction';
// import { useDispatch } from 'react-redux';
// import { setNewProduct } from './utils/setNewProduct';
// import './FormCreateProducts.css'
import {InputGroup, FormControl } from "react-bootstrap";

export const FormSales = ({inputSales, setInputSales}) => {

  //Funcion para obtener los valores
  const handleInputChange = (value, key) =>{
    setInputSales({
      ...inputSales,
      [key]: value
    });
  }

  return (
    <div>
          <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">* Seller document</InputGroup.Text>
            <FormControl
              id="sellerDocument"
              aria-label="SsellerDocument"
              aria-describedby="inputGroup-sizing-sm"
              value={inputSales.sellerDocument}
              onChange={evt => handleInputChange(evt.target.value, 'sellerDocument')}
            />
          </InputGroup>
          <br />
          <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">* Product</InputGroup.Text>
            <FormControl
              id="products"
              aria-label="products"
              aria-describedby="inputGroup-sizing-sm"
              value={inputSales.producs}
              onChange={evt => handleInputChange(evt.target.value, 'products')}
            />
          </InputGroup>
          <br />
          <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">* Name Customer</InputGroup.Text>
            <FormControl
              id="nameCustome"
              aria-label="nameCustome"
              aria-describedby="inputGroup-sizing-sm"
              value={inputSales.nameCustome}
              onChange={evt => handleInputChange(evt.target.value, 'nameCustome')}
            />
          </InputGroup>
          <br />
          <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">* Quantity</InputGroup.Text>
            <FormControl
              id="quantity"
              aria-label="quantity"
              aria-describedby="inputGroup-sizing-sm"
              value={inputSales.quantity}
              onChange={evt => handleInputChange(evt.target.value, 'quantity')}
            />
          </InputGroup>
          <br />
          <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">* Total Price</InputGroup.Text>
            <FormControl
              id="totalPrice"
              aria-label="totalPrice"
              aria-describedby="inputGroup-sizing-sm"
              value={inputSales.toralPrice}
              onChange={evt => handleInputChange(evt.target.value, 'totalPrice')}
            />
            
          </InputGroup>
          <br/>
          <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">* Status</InputGroup.Text>
            <FormControl
              id="status"
              aria-label="status"
              aria-describedby="inputGroup-sizing-sm"
              value={inputSales.status}
              onChange={evt => handleInputChange(evt.target.value, 'status')}
            />
          </InputGroup>
    </div>
    
  )
}
