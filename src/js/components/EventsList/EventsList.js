import React from 'react';
import Row from '../Row/Row';
import moment from 'moment';


export default class EventsList extends React.Component {

    constructor(props) {
        super();
    }

    renderRows(rows) {
        return this.filterRows(rows).map((row) => {
            return (<Row row={row} key={row.id}/>);
        });
    }

    filterRows(rows) {
        return rows.filter((row) => {
            return row.category === ((this.props.filterData.category) ? this.props.filterData.category : row.category)
                &&
                moment(row.startDate).isSameOrAfter(moment((this.props.filterData.startDate) ? this.props.filterData.startDate : row.startDate ));
        });
    }


    render() {
        return (<table class="table">
            <thead>
            <tr>
                <th>Start Date</th>
                <th>Leader</th>
                <th>Category</th>
            </tr>
            </thead>
                <tbody>
                    {this.renderRows(this.props.listData)}
                </tbody>
            </table>);
    }

}