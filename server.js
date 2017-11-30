const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('app/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./app/routes/apiRoutes.js')(app);
require('./app/routes/htmlRoutes.js')(app);


app.listen(process.env.PORT || 5000)










