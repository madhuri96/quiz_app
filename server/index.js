const express=require('express');
const morgan=require('morgan');
const cors=require('cors');
require('dotenv').config();
const router=require('./router/route.js');


/** import connection file */
const connect=require('./database/conn.js');

const app = express();


/** app middlewares */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();


/** appliation port */
const port = process.env.PORT || 8080;


/** routes */
app.use('/api', router) /** apis */


app.get('/', (req, res) => {
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error)
    }
})


/** start server only when we have valid connection */
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});


