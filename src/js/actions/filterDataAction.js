export function filterChange(value) {
    return {
        type: 'FILTER_CHANGE_CATEGORY',
        filter: {category: value}
    }
}

export function startDateChange(value) {
    return {
        type: 'FILTER_CHANGE_STARTDATE',
        filter: {startDate: value}
    }
}