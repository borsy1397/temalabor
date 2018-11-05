const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./assets/oktober_13_swagger_routes.json');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// const session = require('express-session');
//app.use(express.json());
//app.use(express.urlencoded({extended:true}));
//app.use(express-static('assets'));


app.get('/', (req, res) => {
    res.send('Sportify application');
});


require('./routes/users')(app);
require('./routes/events')(app);

app.use((err, req, res, next) =>{
    res.status(500).send('Error!!!');
    console.error(err.stack);
});


const port = 3000;
app.listen(port, () => console.log(`Listening....${port}`));