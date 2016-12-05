import React from 'react';
import { connect } from 'react-redux';


@connect()

export default class DateInput extends React.Component {

    handleOnChange(event) {
        console.log(event.target.value);
        this.props.dispatch(this.props.changeAction(event.target.value));
    }

    render() {
        return (<input type="date" onChange={this.handleOnChange.bind(this)}></input>);
    }

}
