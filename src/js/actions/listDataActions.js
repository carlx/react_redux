import axios from 'axios';

export function fetchData(data) {
    return {
        type: 'FETCH_DATA',
        payload: axios.get('http://demo5405999.mockable.io/rekolekcje')
    }
}
