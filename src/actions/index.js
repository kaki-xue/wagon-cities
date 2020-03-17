// TODO: add and export your own actions
import cities from './cities'
export function setCities() {
//todo api call, for now simulate a db
// this is the backend of frontend , where data is comming from
  return {
    type: 'SET_CITIES',
    payload: cities
  }
 }

 export function selectCity(city) {
//todo api call, for now simulate a db
// this is the backend of frontend , where data is comming from
  return {
    type: 'SELECT_CITY',
    payload: city
  }
 }
