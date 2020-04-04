import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { ADD_SITE, REMOVE_SITE } from "../../action/siteAction";
import getTitleAtUrl from "get-title-at-url";
import uuid from "uuid/v4";
const axios = require("axios");
const cheerio = require("cheerio");

const AddSite = () => {
    const dispatch = useDispatch();

    const [isWriting, setIsWriting] = useState(false);
    const [value, setValue] = useState("");
    const siteInput = useRef(null);

    useEffect(() => {
        siteInput.current.focus();
    }, []);

    const handleInput = e => {
        setIsWriting(true);
        let newValue = e.target.value;
        setValue(newValue);
    };

    const inputReset = () => {
        setIsWriting(false);
        setValue("");
    };

    const inputSubmit = e => {
        e.preventDefault();

        //value 넘기기전에 title 가져오는 axios필요
        async function getHTML() {
            try {
                return await axios.get(value);
            } catch (error) {
                console.error(error);
            }
        }
        console.log(getHTML());
        dispatch({
            type: ADD_SITE,
            id: uuid(),
            siteUrl: value
            //siteName: title
        });

        setIsWriting(false);
        //초기화
        setValue("");
    };

    return (
        <>
            <Form onSubmit={inputSubmit}>
                <div className="inputBlock">
                    <input
                        type="text"
                        placeholder="Enter the address of the site you want to add"
                        value={value}
                        onChange={handleInput}
                        ref={siteInput}
                    />
                    {isWriting && (
                        <div className="controlBlock">
                            <button>ADD</button>
                            <button onClick={inputReset}>RESET</button>
                        </div>
                    )}
                </div>
            </Form>
        </>
    );
};

export default AddSite;
const Form = styled.form`
    margin-bottom: 130px;
    .inputBlock {
        display: flex;
        align-items: center;
        input {
            flex: 1;
            background: transparent;
            padding: 1em 0;
            font-size: 18px;
            &::placeholder {
                opacity: 0.4;
            }
        }
        .controlBlock {
            display: flex;
            align-items: center;
            button {
                margin-left: 1em;
            }
        }
    }
`;
