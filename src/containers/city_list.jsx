import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import City from './city';
import {setCities} from '../actions/index'


class CityList extends Component {
  // static defaultProps = {
  //   cities: [{ name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
  // { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
  // { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' },]
  // }

  componentWillMount() {
    this.props.setCities()

  }

  render() {
    return(
      <div className="cities"> {this.props.cities.map((city) => {
        return <City key={city.name} city={city}/>
      })
    }
      </div>
      )
  }
}

function mapDispatchToProps(dispatch) {
      return bindActionCreators(

        {setCities:setCities},
        dispatch
        );
    }
    function mapStateToProps(state) {
      return {
        cities: state.cities

      }
    }

export default connect(mapStateToProps, mapDispatchToProps)(CityList);



