import React from 'react';

export default class Row extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.row.startDate}</td>
                <td>{this.props.row.leader}</td>
                <td>{this.props.row.category}</td>
            </tr>);
    }

}