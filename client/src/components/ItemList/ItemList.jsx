import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "./itemList.css";


export const ItemList = ({ columns, items, titleTable, setShow}) => {
    const [pending, setPending] = useState(true);
    useEffect(() => {
		const timeout = setTimeout(() => {
			setPending(false);
		}, 2000);
		return () => clearTimeout(timeout);
	}, []);

    const handleShow = () => setShow(true);

    return (
        <>
            <div className="add-button-div">
                <div>
                    <DataTable
                        columns={columns}
                        data={items}
                        progressPending={pending}
                        title= {titleTable}
                        striped
                        highlightOnHover
                        pointerOnHover
                        pagination
                    />
                </div>
                <div >
                    <button className="add-button" onClick={handleShow}>Create</button>
                </div>
            </div>
        </>
    );
};
