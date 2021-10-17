import React, { useEffect, useState } from 'react';
import { ItemList } from '../components/ItemList/ItemList';
import Sidebar from "../components/SideBar/SideBar";
import "./products.scss"
import { useDispatch, useSelector } from 'react-redux'
import { createProduct, deleteProduct } from "../redux/actions/index";
// import { getProducts } from '../redux/actions'
import { MdDeleteForever } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';
import { Button, Modal} from "react-bootstrap";
import {FormProduct} from "../components/FormProduct/FormProduct"

export const Products = () => {

    //estados de intput y errores
    const [inputProducts, setInputProducts] = useState({
        name: '',
        description: '',
        // image: '',
        price: '',
        stock: '',
        sellerDocument: ''
    });
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const [items, setItems] = useState(products);
    const titleTable = "Products";
    const columns = [
        {
            name: "Name",
            selector: "name",
            sortable: true
        },
        {
            name: "Price",
            selector: "price",
            sortable: true
        },
        {
            name: "Stock",
            selector: "stock",
            sortable: true
        },
        {
            name: "Description",
            selector: "description",
            sortable: true
        },
        {
            name: "Seller document",
            selector: "sellerDocument",
            sortable: true
        },
        {
            name: "Actions",
            cell: row => (<div className="actions"> <button type="button"><FaRegEdit /></button><button type="button" onClick={() => handleDeleteProduct(row)}><MdDeleteForever /></button></div>)
        }
    ]

    useEffect(() => {
        // dispatch(getProducts())
        setItems(products)
    }, [products])

    const handleClose = () => {
        setInputProducts({
            name: '',
            description: '',
            // image: '',
            price: '',
            stock: '',
            sellerDocument: ''
        });
        setShow(false)
      };

      const handleCreateProduct = () => {
          dispatch(createProduct(inputProducts));
          handleClose()
      }

      const handleDeleteProduct = (row) => {
        dispatch(deleteProduct(row._id));
      }

    return (
        <>
            <div className="container-products">
                <div>
                    <Sidebar />
                </div>
                <div className="list__product">
                    <ItemList columns={columns} items={items} titleTable={titleTable} setShow={setShow}/>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Create product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormProduct inputProducts={inputProducts} setInputProducts={setInputProducts}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCreateProduct}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
