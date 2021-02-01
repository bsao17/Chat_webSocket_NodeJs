const app = require ('express')();
const http = require ('http').createServer(app);

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

http.listen(2005, () => {
    console.log('listen on * : 2005');
});