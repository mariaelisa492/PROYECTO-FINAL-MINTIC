import React, { useEffect, useState } from 'react';
import { ItemList } from '../components/ItemList/ItemList';
import Sidebar from "../components/SideBar/SideBar";
import "./Sales.scss";
import { useDispatch, useSelector } from 'react-redux';
import {  createSale, deleteSale,updateSale } from "../redux/actions/index";
import { MdDeleteForever } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';
import {Popup} from '../components/Popup/PopupSale';

export const Sales = () => {

    //estados de intput y errores
    const [inputItems, setInputItems] = useState({
        id : '',
        sellerDocument: '',
        products: '',
        nameCostume: '',
        quantity: '',
        totalPrice: '',
        status: ''
    });
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const sales = useSelector(state => state.sales);
    const [items, setItems] = useState(sales);
    const titleTable = "Sales";
    const [titlePopup, setTitlePopup] = useState('Create sale');
    const [btnTitle, setBtnTitle] = useState('Create');
    const [size, setSize] = useState('');
    const columns = [
        {
            name: "Seller Document",
            selector: "sellerDocument",
            sortable: true
        },
        {
            name: "Products",
            selector: "products",
            sortable: true
        },
        {
            name: "Name Costumer",
            selector: "nameCostume",
            sortable: true
        },
        {
            name: "Quantity",
            selector: "quantity",
            sortable: true
        },
        {
            name: "Total Price",
            selector: "totalPrice",
            sortable: true
        },
        {
            name: " status",
            selector: " status",
            sortable: true
        },
        {
            name: "Actions",
            cell: row => (<div className="actions"> <button type="button" onClick={() => handleEdit(row)}><FaRegEdit /></button><button type="button" onClick={() => handleDeleteSale(row)}><MdDeleteForever /></button></div>)
        }
    ]

    useEffect(() => {
        setItems(sales)
    }, [sales])

    const handleClose = () => {
        setInputItems({
            sellerDocument: '',
            products: '',
            nameCostume: '',
            quantity: '',
            totalPrice: '',
            status: ''
            });
        setShow(false)
      };

      const handleChange = () => {
          if(btnTitle === 'Create'){
              dispatch(createSale (inputItems));
          }else{
              dispatch(updateSale(inputItems));
          }
          handleClose()
      }

      const handleEdit = (row) => {
        setTitlePopup('Update Sale');
        setBtnTitle('Update');
        setSize('lg');
        setShow(true);
        setInputItems(row);
      }

      const handleDeleteSale = (row) => {
        dispatch(deleteSale(row._id));
      }

    return (
        <>
            <div className="container-sales">
                <div>
                    <Sidebar />
                </div>
                <div className="list__sales">
                    <ItemList columns={columns} items={items} titleTable={titleTable} setShow={setShow}/>
                </div>
            </div>
            <Popup title={titlePopup} size={size} show={show} handleChange={handleChange} handleClose={handleClose} inputItems={inputItems} setInputItems={setInputItems} btnTitle={btnTitle}/>
        </>
    )

}
