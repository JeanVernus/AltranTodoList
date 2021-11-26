const Express = require('express');
const Cors = require('cors');
const BodyParser = require('body-parser');
const { json } = require('express');

const Port = 7770

const App = Express();

App.use(Cors());
App.use(BodyParser.json());
App.use(BodyParser.urlencoded({extended:true}));

App.post('/postTask', (req, res) => {
    content = req.body.content 
    res.status(200).json(content)
})

App.listen(Port, () => {
    console.log(`Server started on ${Port}`);
})