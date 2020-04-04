import React from "react";
import styled from "styled-components";
import SiteItem from "./SiteItem";
import { useSelector } from "react-redux";
const SiteList = () => {
    const sites = useSelector(state => state.sites);
    return (
        <SiteListContainer>
            <ul>
                {sites.map(site => (
                    <SiteItem site={site} key={site.id} />
                ))}
            </ul>
        </SiteListContainer>
    );
};

export default SiteList;
const SiteListContainer = styled.div``;
