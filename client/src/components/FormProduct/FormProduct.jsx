import React from 'react';
// import { saveImages } from './utils/saveImages';
// import { validationFunction } from './utils/validationFunction';
// import { useDispatch } from 'react-redux';
// import { setNewProduct } from './utils/setNewProduct';
// import './FormCreateProducts.css'
import {InputGroup, FormControl } from "react-bootstrap";

export const FormProduct = ({inputProducts, setInputProducts}) => {

  //Funcion para obtener los valores
  const handleInputChange = (value, key) =>{
    setInputProducts({
      ...inputProducts,
      [key]: value
    });
  }

  return (
    <div>
          <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">* Name</InputGroup.Text>
            <FormControl
              id="name"
              aria-label="name"
              aria-describedby="inputGroup-sizing-sm"
              value={inputProducts.name}
              onChange={evt => handleInputChange(evt.target.value, 'name')}
            />
          </InputGroup>
          <br />
          <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">* Description</InputGroup.Text>
            <FormControl
              id="description"
              aria-label="description"
              aria-describedby="inputGroup-sizing-sm"
              value={inputProducts.description}
              onChange={evt => handleInputChange(evt.target.value, 'description')}
            />
          </InputGroup>
          <br />
          <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">* Price</InputGroup.Text>
            <FormControl
              id="price"
              aria-label="price"
              aria-describedby="inputGroup-sizing-sm"
              value={inputProducts.price}
              onChange={evt => handleInputChange(evt.target.value, 'price')}
            />
          </InputGroup>
          <br />
          <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">* Stock</InputGroup.Text>
            <FormControl
              id="stock"
              aria-label="stock"
              aria-describedby="inputGroup-sizing-sm"
              value={inputProducts.stock}
              onChange={evt => handleInputChange(evt.target.value, 'stock')}
            />
          </InputGroup>
          <br />
          <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">* Seller Document</InputGroup.Text>
            <FormControl
              id="sellerDocument"
              aria-label="sellerDocument"
              aria-describedby="inputGroup-sizing-sm"
              value={inputProducts.sellerDocument}
              onChange={evt => handleInputChange(evt.target.value, 'sellerDocument')}
            />
          </InputGroup>
    </div>
    
  )
}
