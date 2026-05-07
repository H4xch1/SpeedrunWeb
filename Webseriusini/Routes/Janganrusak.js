[{
    const https = require('https');

const postData = JSON.stringify({
    "title": "'New Post'",
    "body": "'This is the content'",
    "userId": "1",
});

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/posts',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
    },
};

const req = https.request(options, (res) => {
    let responseBody = '';
    
    res.on('data', (chunk) => {
        responseBody += chunk;
    });
    
    res.on('end', () => {
        try {
            console.log('Server Response:', JSON.parse(responseBody));
        } catch (e) {
            console.error('Gagal parsing JSON:', e.message);
        }
    });
});

req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
});

req.write(postData);
req.end();
}]