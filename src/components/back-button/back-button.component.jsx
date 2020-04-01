import React from "react";
import "./back-button.styles.css";

import { returnName } from "../../return-children";

import { useSelector, useDispatch } from "react-redux";

import { onBackClick } from "../../index";

const BackButton = () => {
    const data = useSelector(store => store.dataReducer);
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
                                    data: data,
                                    id: path[path.length - 1].id
                                })
                            )
                        }
                    >
                        <b>{returnName(data, item.id)}</b>
                    </button>
                );
            })}
        </div>
    );
};

export default BackButton;
