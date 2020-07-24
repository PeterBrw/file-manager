import React, { useState } from "react";
import "./directory.component.jsx.css";
import { Icon } from "../icon/icon.component";
import Modal from "react-responsive-modal";
import { returnName } from "../../return-children";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch } from "react-redux";

import {
    onClick,
    editName,
    deleteItemEl,
    addIdFrom,
    dragAndDrop,
} from "../../index";

export const Directory = ({ id, name, type }) => {
    const dispatch = useDispatch();

    const data = useSelector((store) => store.dataReducer);

    const idFrom = useSelector((store) => store.idFromReducer);

    const [modal, setModal] = useState({ open: false });
    const [inputValue, setInputValue] = useState(returnName(data, id));

    const onOpenModal = () => {
        setModal({ open: true });
    };

    const onCloseModal = () => {
        setModal({ open: false });
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const onButtonClick = () => {
        dispatch(editName(data, id, inputValue));
    };

    const dragStart = (e) => {
        e.dataTransfer.setData("text/plain", e.target.id);
        console.log(parseInt(e.target.id));
        dispatch(addIdFrom(parseInt(e.target.id)));
    };

    const allowDrop = (e) => {
        e.preventDefault();
        console.log(e.target.id);
    };

    const dragDrop = (e) => {
        e.preventDefault();
        console.log("finish", parseInt(e.target.id), idFrom[idFrom.length - 1]);
        if (
            idFrom[idFrom.length - 1] === parseInt(e.target.id) ||
            Number.isNaN(idFrom[idFrom.length - 1]) ||
            Number.isNaN(parseInt(e.target.id))
        ) {
            return;
        }

        dispatch(
            dragAndDrop(data, idFrom[idFrom.length - 1], parseInt(e.target.id))
        );
    };

    const dragEnter = (e) => {};

    const displayStart = (e) => {
        // let id = e.target.id;
        // dispatch(onClick(parseInt(id)));
    };

    return (
        <div
            className="directory"
            onDrop={dragDrop}
            onDragOver={allowDrop}
            id={id}
            onDragEnter={dragEnter}
        >
            <div className="left" onClick={() => dispatch(onClick(id))}>
                <Icon className="icon" type={type} />
                <h1
                    className="header"
                    draggable="true"
                    onDragStart={dragStart}
                    id={id}
                    onDrag={displayStart}
                >
                    {name}
                </h1>
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
