import RestClient from 'react-native-rest-client';

export default class ApiClient extends RestClient {
    constructor () {
        // Initialize with your base URL 
        super('http://a3247adf.ngrok.io');
      }
      // Now you can write your own methods easily 
      login (username, password) {
        // Returns a Promise with the response. 
        return this.POST('/auth', { username, password });
      }
      getCurrentUser () {
        // If the request is successful, you can return the expected object 
        // instead of the whole response. 
        return this.GET('/auth')
          .then(response => response.user);
      }

      createUser (email, password) {
        return this.POST('/users/create', {'email': email, 'password': password})
          .then(response => response);
      }

      createCode (user_id, phone) {
        return this.POST('/codes/create', {'user_id': user_id, 'phone': phone})
          .then(response => response);
      }

      validateCode (user_id, user_code) {
        return this.POST('/codes/validate', {'user_id': user_id, 'user_code': user_code})
          .then(response => response);
      }

      updateUser (user_obj) {
        console.log(user_obj);
        return this.POST('/users/update', user_obj)
          .then(response => response);
      }

      createJobs (job_obj) {
        console.log(job_obj);
        return this.POST('/jobs/create', job_obj)
          .then(response => response);
      }

      updateJobs (job_obj) {
        return this.POST('/jobs/update', job_obj)
          .then(response => response);
      }
}
