export const ADD_SITE = "ADD_SITE";
export const REMOVE_SITE = "REMOVE_SITE";

export const addSite = () => {
    return {
        type: ADD_SITE
    };
};
export const removeSite = () => {
    return {
        type: REMOVE_SITE
    };
};
