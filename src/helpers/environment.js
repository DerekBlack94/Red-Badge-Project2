let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3000';
        break;
    case ' db-bike-app-server.herokuapp.com':
        APIURL = ' https://db-bike-app-server.herokuapp.com'
        // APIURL = 'http://localhost:3000';
}

export default APIURL;