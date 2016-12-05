const initialState = {category: null, startDate: null};

export default function reducer(state = initialState, action) {

    switch(action.type) {
        case 'FILTER_CHANGE_CATEGORY': {
            //return {...state, ...action.filter};
            return Object.assign({}, state, action.filter);
        }
        case 'FILTER_CHANGE_STARTDATE': {
            return {...state, ...action.filter};
        }
    }

    return state;

}