const server = require('./api/server');

const port = 8000;

server.listen(port,()=>{
    console.log(`Server is working at ${port}`);
});


// START YOUR SERVER HERE
