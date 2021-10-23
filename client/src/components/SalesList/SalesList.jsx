import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "./itemList.scss";

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
            <div className="add-button-div">
                <div className="table">
                    <DataTable
                        columns={columns}
                        data={items}
                        progressPending={pending}
                        title= {titleTable}
                        striped
                        highlightOnHover
                        pointerOnHover
                        paginationPerPage = {5}
                        paginationRowsPerPageOptions = {[5,8]}
                        pagination
                    />
                </div>
                <div className="create">
                    <button className="add-button" onClick={handleShow}>Create</button>
                </div>
            </div>
    );
};
