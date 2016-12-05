import React from 'react';
import { connect } from 'react-redux';

@connect()
export default class Spinner extends React.Component {

    conditionalRender() {
        if(this.props.isLoading) {
            return (<div class="cssload-container">
                <div class="cssload-speeding-wheel"></div>
            </div>)
        }
        return null;
    }

    render() {
        return(this.conditionalRender());
    }
}