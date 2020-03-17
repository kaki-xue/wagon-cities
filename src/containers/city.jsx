import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectCity} from '../actions/index'

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city)
  }
  render() {
    return(<li onClick={this.handleClick} className="list-group-item">{this.props.city.name}</li>)
  }
}

function mapDispatchToProps(dispatch) {
      return bindActionCreators(

        {selectCity:selectCity},
        dispatch
        );
    }
    function mapStateToProps(state) {
      return {
        activeCity: state.activeCity

      }
    }

export default connect(mapStateToProps, mapDispatchToProps)(City);
