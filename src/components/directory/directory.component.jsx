import React, { useState } from "react";
import "./directory.component.jsx.css";
import { Icon } from "../icon/icon.component";
import Modal from "react-responsive-modal";
import { returnName } from "../../return-children";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch } from "react-redux";

import { onClick, editName, deleteItemEl } from "../../index";

export const Directory = ({ id, name, type }) => {
    const dispatch = useDispatch();

    const data = useSelector(store => store.dataReducer);

    const [modal, setModal] = useState({ open: false });
    const [inputValue, setInputValue] = useState(returnName(data, id));

    const onOpenModal = () => {
        setModal({ open: true });
    };

    const onCloseModal = () => {
        setModal({ open: false });
    };

    const handleChange = e => {
        setInputValue(e.target.value);
    };

    const onButtonClick = () => {
        dispatch(editName(data, id, inputValue));
    };

    return (
        <div className="directory">
            <div className="left" onClick={() => dispatch(onClick(id))}>
                <Icon className="icon" type={type} />
                <h1 className="header">{name}</h1>
            </div>
            <FontAwesomeIcon
                className="delete-button"
                onClick={() => dispatch(deleteItemEl(id, data))}
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
