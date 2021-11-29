const Express = require('express');
const Cors = require('cors');
const BodyParser = require('body-parser');
const mySql = require("mysql");
const config = require("./configMySql");


const Port = 7770

const App = Express();

App.use(Cors());
App.use(BodyParser.json());
App.use(BodyParser.urlencoded({extended:true}));

App.post('/postTask', (req, res) => {
    content = req.body.content 
    title = req.body.title
    res.status(200).json(content)
    console.log("req.boyPT", req.body);
})

App.post('/saveTask', (req, res) => {
    console.log("req.bodyST", req.body);

    // config.connect((err)=>{
    //     if(err.fatal){
    //         console.log("connect err");
    //     }
    // })

    // const addTodo = `INSERT INTO todolist (id, Title,
    //     Element1, Element2) VALUES (
    //     ${mySql.escape(req.body.id)},
    //     ${mySql.escape(req.body.title)},
    //     ${mySql.escape(JSON.stringify(req.body.tasksList[0].data))},
    //     ${mySql.escape(JSON.stringify(req.body.tasksList[1].data))}) timeout: 60000`
    //     config.query(addTodo, (err, resultAddTodo) => {
    //     if (err) {
    //         console.log(err.code);
    //         res.status(200).json('error')
    //     }
    //     else {
            res.status(200).json({
                string : 'ok',
            })   

        // }
    // })
})

App.listen(Port, () => {
    console.log(`Server started on ${Port}`);
})
