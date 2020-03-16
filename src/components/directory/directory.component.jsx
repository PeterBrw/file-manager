import React, { useState } from "react";
import "./directory.component.jsx.css";
import { Icon } from "../icon/icon.component";
import Modal from "react-responsive-modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

export const Directory = ({
    id,
    name,
    type,
    onClick,
    path,
    itemDelete,
    changeFileName,
    originalData
}) => {
    const [modal, setModal] = useState({ open: false });
    const [inputValue, setInputValue] = useState("");

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
        changeFileName(originalData, id, inputValue);
        // setInputValue("");
    };

    return (
        <div className="directory">
            <div className="left" onClick={onClick.bind(null, id)}>
                <Icon className="icon" type={type} />
                <h1 className="header">{name}</h1>
            </div>
            <FontAwesomeIcon
                className="delete-button"
                onClick={itemDelete.bind(null, id)}
                icon={faTrash}
            />
            <FontAwesomeIcon icon={faEdit} onClick={onOpenModal} />
            <Modal open={modal.open} onClose={onCloseModal} little>
                <p>Edit file name</p>
                <input
                    type="text"
                    placeholder="Edit name"
                    onChange={handleChange}
                />
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
