import  express  from 'express';
import cors from 'cors';
import Routes from './routers/routes.js';
import  bodyParser from 'body-parser';
import Connection from './database/db.js';
// createing express server
const app = express();
const port = 5000;

app.use(cors());    //cors middleware
app.use(express.json()); //allow us to parse json
app.use(express.static('public'));
app.use(express.static('public/build'));

Connection();

app.use(express.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', Routes);
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'build', 'index.html'));
  });

//server listening on specific port
app.listen(port, () => {
    console.log(`Server is running in port : ${port}`);
});
 


