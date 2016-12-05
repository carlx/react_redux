import React from 'react';
import EventList from './EventsList/EventsList';
import Select from './Select/Select';
import Spinner from './Spinner/Spinner';
import data from '../mocks/list';
import selectData from '../mocks/select';
import { connect } from 'react-redux';
import { fetchData } from '../actions/listDataActions';
import DateInput from './DateInput/DateInput';
import { startDateChange } from '../actions/filterDataAction';


@connect((store) => {
    return {
        listData: store.listReducer.data,
        isLoading: store.listReducer.spinner,
        filterData: store.filterReducer
    };
})
export default class Layout extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchData(data));
    }

  constructor() {
    super();
  }

  render() {
    return (
          <div>
                <Spinner isLoading={this.props.isLoading}/>
              <DateInput changeAction={startDateChange} />
            <Select selectedValue={this.props.filterData.category} selectData={selectData} />
            <EventList listData={this.props.listData} filterData={this.props.filterData} />
          </div>
    );
  }
}
