import { ADD_SITE, REMOVE_SITE } from "../action/siteAction";

const initialState = [];

const sites = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SITE:
            return [
                ...state,
                {
                    id: action.id,
                    siteName: action.siteName,
                    siteUrl: action.siteUrl
                }
            ];
        case REMOVE_SITE:
            return state.filter(state => state.id !== action.id);
        default:
            return state;
    }
};

export default sites;
