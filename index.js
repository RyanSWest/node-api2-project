 require('dotenv').config();
 
 const server = require('./data/server.js');
const port = process.env.PORT || 5000
 server.listen(4000, ()=> {
     console.log(`server running on ${port}`)
 });


