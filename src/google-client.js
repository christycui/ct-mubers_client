import RestClient from 'react-native-rest-client';

export default class GoogleClient extends RestClient {
    constructor () {
        // Initialize with your base URL 
        super('https://maps.googleapis.com/maps/api');
      }
      // Now you can write your own methods easily 
      geocode (street, city, state, zip) {
        // Returns a Promise with the response. 
        let address = [street, city, state, zip].join(', ')
        return this.POST('/geocode/json?address='+address.split(' ').join('+')+'&key=AIzaSyAxfb_fK-AMX7jEWf3nuO6RSr6SP6uVL0E')
          .then(response => response);
      }


}
