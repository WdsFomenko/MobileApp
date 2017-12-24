import RestClient from 'react-native-rest-client';

import config from '../../configs/app.config';

export default class AuthService extends RestClient {
  constructor() {
    // Initialize with your base URL
    super(config.backedApiUrl);
  }

  // Now you can write your own methods easily
  login(username, password) {
    // Returns a Promise with the response.
    return this.POST('/oauth/token', {username, password});
  }

  getCurrentUser() {
    // If the request is successful, you can return the expected object
    // instead of the whole response.
    return this.GET('/auth')
      .then(response => response.user);
  }
};
