import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
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
    const { 
      containerStyle,
      examSelector,
      dropdownContainerStyle,
      resultContainer
    } = styles;
    return (
      <View>
        <Header headerText="SMS" navigation={this.props.navigation} />
        <View style={containerStyle}>
          <View style={examSelector}>
            <MaterialDropdown 
              data={data}
              label='Choose Exam'
              containerStyle={dropdownContainerStyle}
            />
          </View>
          <View style={resultContainer}>
            <Text>This is result Description</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default ExamHistory;

const styles = StyleSheet.create({
  containerStyle: {
  },
  examSelector: {
    // flex: 1
  },
  dropdownContainerStyle: {
    margin: 40
  },
  resultContainer: {
    flex: 1,
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    alignItems: 'center'
  }
});
