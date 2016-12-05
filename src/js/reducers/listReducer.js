const initialState = {data: []};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'FETCH_DATA_PENDING': {
            return {...state, data: [], spinner: true};
        }
        case 'FETCH_DATA_FULFILLED': {
            return {...state, data: action.payload.data, spinner: false};
        }
    }

    return state;

}