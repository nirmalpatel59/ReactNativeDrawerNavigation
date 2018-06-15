import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import MaterialDropdown from '../components/Dropdown';

class ExamHistory extends Component {
  render() {
    const data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];
    return (
      <View>
        <Header headerText="SMS" navigation={this.props.navigation} />
        <View>
          <MaterialDropdown 
            data={data}
            label='Choose Exam'
          />
        </View>
      </View>
    );
  }
}

export default ExamHistory;
