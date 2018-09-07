const Auth = {};


Auth.isAuthenticated = function() {
  return !!this.getToken();
};

Auth.getToken = function() {
  return localStorage.getItem('token');
};

//On login
Auth.setToken = function(token) {
  return localStorage.setItem('token', token);
};

//On logout
Auth.removeToken = function() {
  localStorage.removeItem('token');
};

//Decode the token and get object with values
Auth.getPayload = function() {
  const token = this.getToken();
  const payload = token.split('.')[1];
  return JSON.parse(atob(payload));
};

Auth.currentUsername = function() {
  return this.getPayload().username;
};

Auth.currentUserId = function() {
  return this.getPayload().sub;
};

Auth.bearerHeader = function() {
  return {
    headers: {
      //request headers
      authorization: `Bearer ${Auth.getToken()}`
    }
  };
};

export default Auth;
