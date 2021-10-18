import React, { useEffect, useState } from 'react';
import { ItemList } from '../components/ItemList/ItemList';
import Sidebar from "../components/SideBar/SideBar";
import "./products.scss";
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, deleteProduct, updateProduct } from "../redux/actions/index";
import { MdDeleteForever } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';
import {Popup} from '../components/Popup/Popup';

export const Products = () => {

    //estados de intput y errores
    const [inputItems, setInputItems] = useState({
        id : '',
        name: '',
        description: '',
        image: '',
        price: '',
        stock: '',
        sellerDocument: ''
    });
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const [items, setItems] = useState(products);
    const titleTable = "Products";
    const [titlePopup, setTitlePopup] = useState('Create product');
    const [btnTitle, setBtnTitle] = useState('Create');
    const [size, setSize] = useState('');
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
            cell: row => (<div className="actions"> <button type="button" onClick={() => handleEdit(row)}><FaRegEdit /></button><button type="button" onClick={() => handleDeleteProduct(row)}><MdDeleteForever /></button></div>)
        }
    ]

    useEffect(() => {
        setItems(products)
    }, [products])

    const handleClose = () => {
        setInputItems({
            name: '',
            description: '',
            image: '',
            price: '',
            stock: '',
            sellerDocument: ''
        });
        setShow(false)
      };

      const handleChange = () => {
          if(btnTitle === 'Create'){
              dispatch(createProduct(inputItems));
          }else{
              dispatch(updateProduct(inputItems));
          }
          handleClose()
      }

      const handleEdit = (row) => {
        setTitlePopup('Update product');
        setBtnTitle('Update');
        setSize('lg');
        setShow(true);
        setInputItems(row);
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
            <Popup title={titlePopup} size={size} show={show} handleChange={handleChange} handleClose={handleClose} inputItems={inputItems} setInputItems={setInputItems} btnTitle={btnTitle}/>
        </>
    )
}
