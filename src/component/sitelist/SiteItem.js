import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { ADD_SITE, REMOVE_SITE } from "../../action/siteAction";

const SiteItem = ({ site }) => {
    const dispatch = useDispatch();

    const removeItem = () => {
        dispatch({ type: REMOVE_SITE, id: site.id });
    };
    return (
        <SiteItemBlock>
            <div className="favicon">
                <span>
                    <FontAwesomeIcon icon={faCompass} className="icon" />
                </span>
            </div>
            <div className="siteInfo">
                <a
                    href={site.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h3 className="title">{site.siteName}</h3>
                    <p className="url">{site.siteUrl}</p>
                </a>
            </div>
            <div className="more">
                <div className="moreBtn">
                    <span></span>
                </div>
                <div className="popMenu">
                    <button onClick={removeItem}>Remove</button>
                    <button>Modify</button>
                </div>
            </div>
        </SiteItemBlock>
    );
};

export default SiteItem;
const SiteItemBlock = styled.li`
    display: flex;
    padding-bottom: 1.75em;
    border-bottom: 1px solid rgba(79, 97, 109, 0.08);
    margin-bottom: 1.75em;
    .favicon {
        flex: 0;
        span {
            display: block;
            width: 52px;
            height: 52px;
            border-radius: 50% 50%;
            background: #f2f2f2;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            .icon {
                opacity: 0.9;
            }
        }
    }
    .siteInfo {
        flex: 1;
        padding-left: 1.56em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: color 0.2s;
        .title {
            font-size: 18px;
            font-weight: 900;
            margin: 0.22em 0;
        }
        .url {
            opacity: 60%;
        }
        &:hover {
            color: #0e8bde;
        }
    }
    .more {
        position: relative;
        padding-top: 0.8em;
        .moreBtn {
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 24px;
            height: 24px;
            span {
                display: block;
                width: 4px;
                height: 4px;
                border-radius: 50% 50%;
                background: #ddd;
                margin: 2px 0;
                transition: background 0.2s;
            }
            &::after,
            &::before {
                content: "";
                display: block;
                width: 4px;
                height: 4px;
                border-radius: 50% 50%;
                background: #ddd;
                transition: background 0.2s;
            }
            &:hover span,
            &:hover:after,
            &:hover:before {
                background: #888;
            }
        }
        .popMenu {
            position: absolute;
            width: 140px;
            top: 50%;
            transform: translateY(-50%);
            right: 0;
            background: #fff;
            border-radius: 8px;
            border: 1px solid #eee;
            display: flex;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.2s;
            overflow: hidden;
            button {
                font-size: 14px;
                width: 50%;
                padding: 0.5em 0.2em;
                text-align: center;
                border-right: 1px solid #eee;
                transition: all 0.2s;
                &:last-child {
                    border-right: none;
                }
                &:hover {
                    background: #4f616d;
                    color: #fff;
                }
            }
        }
        &:hover .popMenu {
            opacity: 1;
            visibility: visible;
        }
    }
`;
