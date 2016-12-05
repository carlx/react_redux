import React from 'react';
import { connect } from 'react-redux';
import { filterChange } from '../actions/filterDataAction';

@connect()
export default class Select extends React.Component {

    constructor(props) {
        super(props);
    }

    handleOnChange(event) {
        this.props.dispatch(filterChange(event.target.value))
    }

    renderOptions() {
        return this.props.selectData.map((option) => {
            return (<option value={option.value} key={option.value}>{option.label}</option>)
        })
    }

    render() {
        return (
            <select value={this.props.selectedValue} onChange={this.handleOnChange.bind(this)}>
                <option value="">----</option>
                {this.renderOptions()}
            </select>
        );
    }

}