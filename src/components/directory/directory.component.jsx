import React, { useState } from "react";
import "./directory.component.jsx.css";
import { Icon } from "../icon/icon.component";
import Modal from "react-responsive-modal";
import { returnName } from "../../return-children";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch } from "react-redux";

import { deleteItemEl } from "../../index";

import { onClick, editName } from "../../index";

export const Directory = ({ id, name, type, itemDelete, changeFileName }) => {
    const dispatch = useDispatch();

    const data = useSelector(store => store.dataReducer);
    const manipulateData = useSelector(store => store.manipulateReducer);

    const [modal, setModal] = useState({ open: false });
    const [inputValue, setInputValue] = useState(
        returnName(manipulateData, id)
    );

    const onOpenModal = () => {
        setModal({ open: true });
    };

    const onCloseModal = () => {
        setModal({ open: false });
    };

    const handleChange = e => {
        setInputValue(e.target.value);
    };

    const path = useSelector(store => store.pathReducer);
    
    const onButtonClick = () => {
        dispatch(
            editName(manipulateData, id, inputValue, path[path.length - 1].id)
        );
    };

    return (
        <div className="directory">
            <div className="left" onClick={() => dispatch(onClick(id))}>
                <Icon className="icon" type={type} />
                <h1 className="header">{name}</h1>
            </div>
            <FontAwesomeIcon
                className="delete-button"
                onClick={() => dispatch(deleteItemEl(id, data, manipulateData))}
                icon={faTrash}
            />
            <FontAwesomeIcon icon={faEdit} onClick={onOpenModal} />
            <Modal open={modal.open} onClose={onCloseModal} little>
                <p>Edit file name</p>
                <input type="text" value={inputValue} onChange={handleChange} />
                <button
                    onClick={() => {
                        onButtonClick();
                        onCloseModal();
                    }}
                >
                    Change
                </button>
            </Modal>
        </div>
    );
};
