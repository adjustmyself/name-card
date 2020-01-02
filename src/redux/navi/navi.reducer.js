const INITIAL_STATE = {
    naviTitle:'HOME'
}

const naviReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_NAVI_TITLE':
            return {
                ...state,
                naviTitle:action.payload
            }
        default:
            return state;
    }
}

export default naviReducer;