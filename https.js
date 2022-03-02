const https = require('https');

https.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product', (resp) => {
    let data = ''; // A chunk of data has been received.
    resp.on('data', () => { data += chunk; }) //The whole response has been received.
    resp.on('end', () => {
        console.log(JSON.parse(data));
    });
}).on('error', (err) => {
    console.log("Error: " + err.message);
});