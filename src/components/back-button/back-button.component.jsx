import React from "react";
import "./back-button.styles.css";

import { returnName } from "../../return-children";

import { useSelector, useDispatch } from "react-redux";

import { onBackClick } from "../../index";

const BackButton = () => {
    const manipulateData = useSelector(store => store.manipulateReducer);
    const dispatch = useDispatch();
    const path = useSelector(store => store.pathReducer);
    return (
        <div className="back-button">
            {path.map(item => {
                return (
                    <button
                        key={Math.floor(
                            Math.random() * (10000 - 1000 + 1) + 1000
                        )}
                        onClick={() =>
                            dispatch(
                                onBackClick(item.id, {
                                    data: manipulateData,
                                    id: path[path.length - 1].id
                                })
                            )
                        }
                    >
                        <b>{returnName(manipulateData, item.id)}</b>
                    </button>
                );
            })}
        </div>
    );
};

export default BackButton;
