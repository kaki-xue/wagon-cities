import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ActiveCity extends Component {
  render() {
    return(
      <div className="active-city">
       <h3 >{this.props.activeCity.name}</h3>
       <div>{this.props.activeCity.address}</div>
       <img className="image"src={`https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`} alt=""/>
      </div>

      )
  }
}
   function mapStateToProps(state) {
      return {
        activeCity: state.activeCity

      }
    }

export default connect(mapStateToProps)(ActiveCity);

