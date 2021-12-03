const express = require('express');
const Cors = require('cors');
const BodyParser = require('body-parser');
const mySql = require("mysql");
const config = require("./configMySql");


const Port = 7770

const App = express();

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
    console.log("req.bodyST", req.body.tasksList.length);

    if(req.body.tasksList.length < 1){
      
            res.status(200).json("error")      
    }

    if(req.body.tasksList.length === 1 ){
        const addTodo = `INSERT INTO todolist1 (id, title, element1) VALUeS
            (${mySql.escape(req.body.id)},
            ${mySql.escape(req.body.title)},
            ${mySql.escape(JSON.stringify(req.body.tasksList[0].data))})`
            config.query(addTodo, (err, resultAddTodo) => {
        if (err) {
            console.log(err.code);
            console.log('resultAddTodo', resultAddTodo);

            res.status(200).json('error')
        }
        else {
            console.log('resultAddTodo', resultAddTodo);
            res.status(200).json({
                string : 'ok',
            })   

        }
        })
    }
    if(req.body.tasksList.length === 2 ){
        const addTodo = `INSERT INTO todolist1 (id, title, element1, element2) VALUeS
            (${mySql.escape(req.body.id)},
            ${mySql.escape(req.body.title)},
            ${mySql.escape(req.body.tasksList[0].data)},
            ${mySql.escape(req.body.tasksList[1].data)})`
            config.query(addTodo, (err, resultAddTodo) => {
        if (err) {
            console.log(err.code);
            res.status(200).json('error')
        }
        else {
            res.status(200).json({
                string : 'ok',
            })   

        }
        })
    }
    if(req.body.tasksList.length === 3){
        const addTodo = `INSERT INTO todolist1 (id, title, element1, element2, element3) VALUeS
            (${mySql.escape(req.body.id)},
            ${mySql.escape(req.body.title)},
            ${mySql.escape(req.body.tasksList[0].data)},
            ${mySql.escape(req.body.tasksList[1].data)},
            ${mySql.escape(req.body.tasksList[2].data)})`
            config.query(addTodo, (err, resultAddTodo) => {
        if (err) {
            console.log(err.code);
            res.status(200).json('error')
        }
        else {
            res.status(200).json({
                string : 'ok',
            })   

        }
        })
    }
    if(req.body.tasksList.length === 4 ){
        const addTodo = `INSERT INTO todolist1 (id, title, element1, element2, element3, element4) VALUeS
            (${mySql.escape(req.body.id)},
            ${mySql.escape(req.body.title)},
            ${mySql.escape(req.body.tasksList[0].data)},
            ${mySql.escape(req.body.tasksList[1].data)},
            ${mySql.escape(req.body.tasksList[2].data)},
            ${mySql.escape(req.body.tasksList[3].data)})`
            config.query(addTodo, (err, resultAddTodo) => {
        if (err) {
            console.log(err.code);
            res.status(200).json('error')
        }
        else {
            res.status(200).json({
                string : 'ok',
            })   

        }
        })
    }
    if(req.body.tasksList.length ===  5 ){
        const addTodo = `INSERT INTO todolist1 (id, title, element1, element2, element3, element4, element5) VALUeS
            (${mySql.escape(req.body.id)},
            ${mySql.escape(req.body.title)},
            ${mySql.escape(req.body.tasksList[0].data)},
            ${mySql.escape(req.body.tasksList[1].data)},
            ${mySql.escape(req.body.tasksList[2].data)},
            ${mySql.escape(req.body.tasksList[3].data)},
            ${mySql.escape(req.body.tasksList[4].data)})`
            config.query(addTodo, (err, resultAddTodo) => {
        if (err) {
            console.log(err.code);
            res.status(200).json('error')
        }
        else {
            res.status(200).json({
                string : 'ok',
            })   

        }
        })
    }
    if(req.body.tasksList.length === 6 ){
        const addTodo = `INSERT INTO todolist1 (id, title, element1, element2, element3, element4, element5, element6) VALUeS
            (${mySql.escape(req.body.id)},
            ${mySql.escape(req.body.title)},
            ${mySql.escape(req.body.tasksList[0].data)},
            ${mySql.escape(req.body.tasksList[1].data)},
            ${mySql.escape(req.body.tasksList[2].data)},
            ${mySql.escape(req.body.tasksList[3].data)},
            ${mySql.escape(req.body.tasksList[4].data)},
            ${mySql.escape(req.body.tasksList[5].data)})`
            config.query(addTodo, (err, resultAddTodo) => {
        if (err) {
            console.log(err.code);
            res.status(200).json('error')
        }
        else {
            res.status(200).json({
                string : 'ok',
            })   

        }
        })
    }
    if(req.body.tasksList.length === 7 ){
        const addTodo = `INSERT INTO todolist1 (id, title, element1, element2, element3, element4, element5, element6 , element7) VALUeS
            (${mySql.escape(req.body.id)},
            ${mySql.escape(req.body.title)},
            ${mySql.escape(req.body.tasksList[0].data)},
            ${mySql.escape(req.body.tasksList[1].data)},
            ${mySql.escape(req.body.tasksList[2].data)},
            ${mySql.escape(req.body.tasksList[3].data)},
            ${mySql.escape(req.body.tasksList[4].data)},
            ${mySql.escape(req.body.tasksList[5].data)},
            ${mySql.escape(req.body.tasksList[6].data)})`
            config.query(addTodo, (err, resultAddTodo) => {
        if (err) {
            console.log(err.code);
            res.status(200).json('error')
        }
        else {
            res.status(200).json({
                string : 'ok',
            })   

        }
        })
    }
    if(req.body.tasksList.length === 8 ){
        const addTodo = `INSERT INTO todolist1 (id, title, element1, element2, element3,element4, element5, element6 , element7, element8) VALUeS
            (${mySql.escape(req.body.id)},
            ${mySql.escape(req.body.title)},
            ${mySql.escape(req.body.tasksList[0].data)},
            ${mySql.escape(req.body.tasksList[1].data)},
            ${mySql.escape(req.body.tasksList[2].data)},
            ${mySql.escape(req.body.tasksList[3].data)},
            ${mySql.escape(req.body.tasksList[4].data)},
            ${mySql.escape(req.body.tasksList[5].data)},
            ${mySql.escape(req.body.tasksList[6].data)},
            ${mySql.escape(req.body.tasksList[7].data)})`
            config.query(addTodo, (err, resultAddTodo) => {
                if (err) {
                    console.log(err.code);
                    res.status(200).json('error')
                }
                else {
                    res.status(200).json({
                        string : 'ok',
                    })   
        
                }
                })
    }
    if(req.body.tasksList.length === 9 ){
        const addTodo = `INSERT INTO todolist1 (id, title, element1, element2, element3,element4, element5, element6 , element7, element8, element9) VALUeS
            (${mySql.escape(req.body.id)},
            ${mySql.escape(req.body.title)},
            ${mySql.escape(req.body.tasksList[0].data)},
            ${mySql.escape(req.body.tasksList[1].data)},
            ${mySql.escape(req.body.tasksList[2].data)},
            ${mySql.escape(req.body.tasksList[3].data)},
            ${mySql.escape(req.body.tasksList[4].data)},
            ${mySql.escape(req.body.tasksList[5].data)},
            ${mySql.escape(req.body.tasksList[6].data)},
            ${mySql.escape(req.body.tasksList[7].data)},
            ${mySql.escape(req.body.tasksList[8].data)})`
            config.query(addTodo, (err, resultAddTodo) => {
                if (err) {
                    console.log(err.code);
                    res.status(200).json('error')
                }
                else {
                    res.status(200).json({
                        string : 'ok',
                    })   
        
                }
                })
    }
    if(req.body.tasksList.length === 10 ){
        const addTodo = `INSERT INTO todolist1 (id, title, element1, element2, element3, element4, element5, element6 , element7, element8, element9, element10) VALUeS
            (${mySql.escape(req.body.id)},
            ${mySql.escape(req.body.title)},
            ${mySql.escape(req.body.tasksList[0].data)},
            ${mySql.escape(req.body.tasksList[1].data)},
            ${mySql.escape(req.body.tasksList[2].data)},
            ${mySql.escape(req.body.tasksList[3].data)},
            ${mySql.escape(req.body.tasksList[4].data)},
            ${mySql.escape(req.body.tasksList[5].data)},
            ${mySql.escape(req.body.tasksList[6].data)},
            ${mySql.escape(req.body.tasksList[7].data)},
            ${mySql.escape(req.body.tasksList[8].data)},
            ${mySql.escape(req.body.tasksList[9].data)})` 
            config.query(addTodo, (err, resultAddTodo) => {
                if (err) {
                    console.log(err.code);
                    res.status(200).json('error')
                }
                else {
                    res.status(200).json({
                        string : 'ok',
                    })   
        
                }
                })
    }
    if(req.body.tasksList.length > 10){
      
        res.status(200).json({string : "task limit reached"})      
}

   
})

App.post('/displayTodos', (req, res) => {
    const addTodoList = 'SELECT * FROM todolist1'
    config.query(addTodoList, (err, resultdisplayTodos) => {
        console.log('resultdisplayTodos', resultdisplayTodos);
        console.log('length', resultdisplayTodos.length);
    if(resultdisplayTodos.length < 1){
      
            res.status(200).json({string :"you haven't save a to do"})      
    }

    if(resultdisplayTodos.length === 1 ){
        res.status(200).json({
            string : "ok",
            idOne : resultdisplayTodos[0].id, titleOne : resultdisplayTodos[0].title, element1One : resultdisplayTodos[0].element1, element2One : resultdisplayTodos[0].element2,
            element3One : resultdisplayTodos[0].element3, element4One : resultdisplayTodos[0].element4, element5One : resultdisplayTodos[0].element5, element6One : resultdisplayTodos[0].element6,
            element7One : resultdisplayTodos[0].element7, element8One : resultdisplayTodos[0].element8, element9One : resultdisplayTodos[0].element9, element10One : resultdisplayTodos[0].element10,
        })
    }
    if(resultdisplayTodos.length === 2 ){
        res.status(200).json({
            string : "ok",
            idOne : resultdisplayTodos[0].id, titleOne : resultdisplayTodos[0].title, element1One : resultdisplayTodos[0].element1, element2One : resultdisplayTodos[0].element2,
            element3One : resultdisplayTodos[0].element3, element4One : resultdisplayTodos[0].element4, element5One : resultdisplayTodos[0].element5, element6One : resultdisplayTodos[0].element6,
            element7One : resultdisplayTodos[0].element7, element8One : resultdisplayTodos[0].element8, element9One : resultdisplayTodos[0].element9, element10One : resultdisplayTodos[0].element10,
            idTwo : resultdisplayTodos[1].id, titleTwo : resultdisplayTodos[1].title, element1Two : resultdisplayTodos[1].element1, element2Two : resultdisplayTodos[1].element2,
            element3Two : resultdisplayTodos[1].element3, element4Two : resultdisplayTodos[1].element4, element5Two : resultdisplayTodos[1].element5, element6Two : resultdisplayTodos[1].element6,
            element7Two : resultdisplayTodos[1].element7, element8Two : resultdisplayTodos[1].element8, element9Two : resultdisplayTodos[1].element9, element10Two : resultdisplayTodos[1].element10,
        })
    }
    if(resultdisplayTodos.length === 3 ){
        res.status(200).json({
            string : "ok",
            idOne : resultdisplayTodos[0].id, titleOne : resultdisplayTodos[0].title, element1One : resultdisplayTodos[0].element1, element2One : resultdisplayTodos[0].element2,
            element3One : resultdisplayTodos[0].element3, element4One : resultdisplayTodos[0].element4, element5One : resultdisplayTodos[0].element5, element6One : resultdisplayTodos[0].element6,
            element7One : resultdisplayTodos[0].element7, element8One : resultdisplayTodos[0].element8, element9One : resultdisplayTodos[0].element9, element10One : resultdisplayTodos[0].element10,
            idTwo : resultdisplayTodos[1].id, titleTwo : resultdisplayTodos[1].title, element1Two : resultdisplayTodos[1].element1, element2Two : resultdisplayTodos[1].element2,
            element3Two : resultdisplayTodos[1].element3, element4Two : resultdisplayTodos[1].element4, element5Two : resultdisplayTodos[1].element5, element6Two : resultdisplayTodos[1].element6,
            element7Two : resultdisplayTodos[1].element7, element8Two : resultdisplayTodos[1].element8, element9Two : resultdisplayTodos[1].element9, element10Two : resultdisplayTodos[1].element10,
            idThree : resultdisplayTodos[2].id, titleThree : resultdisplayTodos[2].title, element1Three : resultdisplayTodos[2].element1, element2Three : resultdisplayTodos[2].element2,
            element3Three : resultdisplayTodos[2].element3, element4Three : resultdisplayTodos[2].element4, element5Three : resultdisplayTodos[2].element5, element6Three : resultdisplayTodos[2].element6,
            element7Three : resultdisplayTodos[2].element7, element8Three : resultdisplayTodos[2].element8, element9Three : resultdisplayTodos[2].element9, element10Three : resultdisplayTodos[2].element10,
        })
    }
    if(resultdisplayTodos.length === 4 ){
        res.status(200).json({
            string : "ok",
            idOne : resultdisplayTodos[0].id, titleOne : resultdisplayTodos[0].title, element1One : resultdisplayTodos[0].element1, element2One : resultdisplayTodos[0].element2,
            element3One : resultdisplayTodos[0].element3, element4One : resultdisplayTodos[0].element4, element5One : resultdisplayTodos[0].element5, element6One : resultdisplayTodos[0].element6,
            element7One : resultdisplayTodos[0].element7, element8One : resultdisplayTodos[0].element8, element9One : resultdisplayTodos[0].element9, element10One : resultdisplayTodos[0].element10,
            idTwo : resultdisplayTodos[1].id, titleTwo : resultdisplayTodos[1].title, element1Two : resultdisplayTodos[1].element1, element2Two : resultdisplayTodos[1].element2,
            element3Two : resultdisplayTodos[1].element3, element4Two : resultdisplayTodos[1].element4, element5Two : resultdisplayTodos[1].element5, element6Two : resultdisplayTodos[1].element6,
            element7Two : resultdisplayTodos[1].element7, element8Two : resultdisplayTodos[1].element8, element9Two : resultdisplayTodos[1].element9, element10Two : resultdisplayTodos[1].element10,
            idThree : resultdisplayTodos[2].id, titleThree : resultdisplayTodos[2].title, element1Three : resultdisplayTodos[2].element1, element2Three : resultdisplayTodos[2].element2,
            element3Three : resultdisplayTodos[2].element3, element4Three : resultdisplayTodos[2].element4, element5Three : resultdisplayTodos[2].element5, element6Three : resultdisplayTodos[2].element6,
            element7Three : resultdisplayTodos[2].element7, element8Three : resultdisplayTodos[2].element8, element9Three : resultdisplayTodos[2].element9, element10Three : resultdisplayTodos[2].element10,
            idFour : resultdisplayTodos[3].id, titleFour : resultdisplayTodos[3].title, element1Four : resultdisplayTodos[3].element1, element2Four : resultdisplayTodos[3].element2,
            element3Four : resultdisplayTodos[3].element3, element4Four : resultdisplayTodos[3].element4, element5Four : resultdisplayTodos[3].element5, element6Four : resultdisplayTodos[3].element6,
            element7Four : resultdisplayTodos[3].element7, element8Four : resultdisplayTodos[3].element8, element9Four : resultdisplayTodos[3].element9, element10Four : resultdisplayTodos[3].element10,
        })
    }
    if(resultdisplayTodos.length === 5 ){
        res.status(200).json({
            string : "ok",
            idOne : resultdisplayTodos[0].id, titleOne : resultdisplayTodos[0].title, element1One : resultdisplayTodos[0].element1, element2One : resultdisplayTodos[0].element2,
            element3One : resultdisplayTodos[0].element3, element4One : resultdisplayTodos[0].element4, element5One : resultdisplayTodos[0].element5, element6One : resultdisplayTodos[0].element6,
            element7One : resultdisplayTodos[0].element7, element8One : resultdisplayTodos[0].element8, element9One : resultdisplayTodos[0].element9, element10One : resultdisplayTodos[0].element10,
            idTwo : resultdisplayTodos[1].id, titleTwo : resultdisplayTodos[1].title, element1Two : resultdisplayTodos[1].element1, element2Two : resultdisplayTodos[1].element2,
            element3Two : resultdisplayTodos[1].element3, element4Two : resultdisplayTodos[1].element4, element5Two : resultdisplayTodos[1].element5, element6Two : resultdisplayTodos[1].element6,
            element7Two : resultdisplayTodos[1].element7, element8Two : resultdisplayTodos[1].element8, element9Two : resultdisplayTodos[1].element9, element10Two : resultdisplayTodos[1].element10,
            idThree : resultdisplayTodos[2].id, titleThree : resultdisplayTodos[2].title, element1Three : resultdisplayTodos[2].element1, element2Three : resultdisplayTodos[2].element2,
            element3Three : resultdisplayTodos[2].element3, element4Three : resultdisplayTodos[2].element4, element5Three : resultdisplayTodos[2].element5, element6Three : resultdisplayTodos[2].element6,
            element7Three : resultdisplayTodos[2].element7, element8Three : resultdisplayTodos[2].element8, element9Three : resultdisplayTodos[2].element9, element10Three : resultdisplayTodos[2].element10,
            idFour : resultdisplayTodos[3].id, titleFour : resultdisplayTodos[3].title, element1Four : resultdisplayTodos[3].element1, element2Four : resultdisplayTodos[3].element2,
            element3Four : resultdisplayTodos[3].element3, element4Four : resultdisplayTodos[3].element4, element5Four : resultdisplayTodos[3].element5, element6Four : resultdisplayTodos[3].element6,
            element7Four : resultdisplayTodos[3].element7, element8Four : resultdisplayTodos[3].element8, element9Four : resultdisplayTodos[3].element9, element10Four : resultdisplayTodos[3].element10,
            idFive : resultdisplayTodos[4].id, titleFive : resultdisplayTodos[4].title, element1Five : resultdisplayTodos[4].element1, element2Five : resultdisplayTodos[4].element2,
            element3Five : resultdisplayTodos[4].element3, element4Five : resultdisplayTodos[4].element4, element5Five : resultdisplayTodos[4].element5, element6Five : resultdisplayTodos[4].element6,
            element7Five : resultdisplayTodos[4].element7, element8Five : resultdisplayTodos[4].element8, element9Five : resultdisplayTodos[4].element9, element10Five : resultdisplayTodos[4].element10,
        })
    }
    if(resultdisplayTodos.length === 6 ){
        res.status(200).json({
            string : "ok",
            idOne : resultdisplayTodos[0].id, titleOne : resultdisplayTodos[0].title, element1One : resultdisplayTodos[0].element1, element2One : resultdisplayTodos[0].element2,
            element3One : resultdisplayTodos[0].element3, element4One : resultdisplayTodos[0].element4, element5One : resultdisplayTodos[0].element5, element6One : resultdisplayTodos[0].element6,
            element7One : resultdisplayTodos[0].element7, element8One : resultdisplayTodos[0].element8, element9One : resultdisplayTodos[0].element9, element10One : resultdisplayTodos[0].element10,
            idTwo : resultdisplayTodos[1].id, titleTwo : resultdisplayTodos[1].title, element1Two : resultdisplayTodos[1].element1, element2Two : resultdisplayTodos[1].element2,
            element3Two : resultdisplayTodos[1].element3, element4Two : resultdisplayTodos[1].element4, element5Two : resultdisplayTodos[1].element5, element6Two : resultdisplayTodos[1].element6,
            element7Two : resultdisplayTodos[1].element7, element8Two : resultdisplayTodos[1].element8, element9Two : resultdisplayTodos[1].element9, element10Two : resultdisplayTodos[1].element10,
            idThree : resultdisplayTodos[2].id, titleThree : resultdisplayTodos[2].title, element1Three : resultdisplayTodos[2].element1, element2Three : resultdisplayTodos[2].element2,
            element3Three : resultdisplayTodos[2].element3, element4Three : resultdisplayTodos[2].element4, element5Three : resultdisplayTodos[2].element5, element6Three : resultdisplayTodos[2].element6,
            element7Three : resultdisplayTodos[2].element7, element8Three : resultdisplayTodos[2].element8, element9Three : resultdisplayTodos[2].element9, element10Three : resultdisplayTodos[2].element10,
            idFour : resultdisplayTodos[3].id, titleFour : resultdisplayTodos[3].title, element1Four : resultdisplayTodos[3].element1, element2Four : resultdisplayTodos[3].element2,
            element3Four : resultdisplayTodos[3].element3, element4Four : resultdisplayTodos[3].element4, element5Four : resultdisplayTodos[3].element5, element6Four : resultdisplayTodos[3].element6,
            element7Four : resultdisplayTodos[3].element7, element8Four : resultdisplayTodos[3].element8, element9Four : resultdisplayTodos[3].element9, element10Four : resultdisplayTodos[3].element10,
            idFive : resultdisplayTodos[4].id, titleFive : resultdisplayTodos[4].title, element1Five : resultdisplayTodos[4].element1, element2Five : resultdisplayTodos[4].element2,
            element3Five : resultdisplayTodos[4].element3, element4Five : resultdisplayTodos[4].element4, element5Five : resultdisplayTodos[4].element5, element6Five : resultdisplayTodos[4].element6,
            element7Five : resultdisplayTodos[4].element7, element8Five : resultdisplayTodos[4].element8, element9Five : resultdisplayTodos[4].element9, element10Five : resultdisplayTodos[4].element10,
            idSix : resultdisplayTodos[5].id, titleSix : resultdisplayTodos[5].title, element1Six : resultdisplayTodos[5].element1, element2Six : resultdisplayTodos[5].element2,
            element3Six : resultdisplayTodos[5].element3, element4Six : resultdisplayTodos[5].element4, element5Six : resultdisplayTodos[5].element5, element6Six : resultdisplayTodos[5].element6,
            element7Six : resultdisplayTodos[5].element7, element8Six : resultdisplayTodos[5].element8, element9Six : resultdisplayTodos[5].element9, element10Six : resultdisplayTodos[5].element10,
        })
    }
    if(resultdisplayTodos.length === 7 ){
        res.status(200).json({
            string : "ok",
            idOne : resultdisplayTodos[0].id, titleOne : resultdisplayTodos[0].title, element1One : resultdisplayTodos[0].element1, element2One : resultdisplayTodos[0].element2,
            element3One : resultdisplayTodos[0].element3, element4One : resultdisplayTodos[0].element4, element5One : resultdisplayTodos[0].element5, element6One : resultdisplayTodos[0].element6,
            element7One : resultdisplayTodos[0].element7, element8One : resultdisplayTodos[0].element8, element9One : resultdisplayTodos[0].element9, element10One : resultdisplayTodos[0].element10,
            idTwo : resultdisplayTodos[1].id, titleTwo : resultdisplayTodos[1].title, element1Two : resultdisplayTodos[1].element1, element2Two : resultdisplayTodos[1].element2,
            element3Two : resultdisplayTodos[1].element3, element4Two : resultdisplayTodos[1].element4, element5Two : resultdisplayTodos[1].element5, element6Two : resultdisplayTodos[1].element6,
            element7Two : resultdisplayTodos[1].element7, element8Two : resultdisplayTodos[1].element8, element9Two : resultdisplayTodos[1].element9, element10Two : resultdisplayTodos[1].element10,
            idThree : resultdisplayTodos[2].id, titleThree : resultdisplayTodos[2].title, element1Three : resultdisplayTodos[2].element1, element2Three : resultdisplayTodos[2].element2,
            element3Three : resultdisplayTodos[2].element3, element4Three : resultdisplayTodos[2].element4, element5Three : resultdisplayTodos[2].element5, element6Three : resultdisplayTodos[2].element6,
            element7Three : resultdisplayTodos[2].element7, element8Three : resultdisplayTodos[2].element8, element9Three : resultdisplayTodos[2].element9, element10Three : resultdisplayTodos[2].element10,
            idFour : resultdisplayTodos[3].id, titleFour : resultdisplayTodos[3].title, element1Four : resultdisplayTodos[3].element1, element2Four : resultdisplayTodos[3].element2,
            element3Four : resultdisplayTodos[3].element3, element4Four : resultdisplayTodos[3].element4, element5Four : resultdisplayTodos[3].element5, element6Four : resultdisplayTodos[3].element6,
            element7Four : resultdisplayTodos[3].element7, element8Four : resultdisplayTodos[3].element8, element9Four : resultdisplayTodos[3].element9, element10Four : resultdisplayTodos[3].element10,
            idFive : resultdisplayTodos[4].id, titleFive : resultdisplayTodos[4].title, element1Five : resultdisplayTodos[4].element1, element2Five : resultdisplayTodos[4].element2,
            element3Five : resultdisplayTodos[4].element3, element4Five : resultdisplayTodos[4].element4, element5Five : resultdisplayTodos[4].element5, element6Five : resultdisplayTodos[4].element6,
            element7Five : resultdisplayTodos[4].element7, element8Five : resultdisplayTodos[4].element8, element9Five : resultdisplayTodos[4].element9, element10Five : resultdisplayTodos[4].element10,
            idSix : resultdisplayTodos[5].id, titleSix : resultdisplayTodos[5].title, element1Six : resultdisplayTodos[5].element1, element2Six : resultdisplayTodos[5].element2,
            element3Six : resultdisplayTodos[5].element3, element4Six : resultdisplayTodos[5].element4, element5Six : resultdisplayTodos[5].element5, element6Six : resultdisplayTodos[5].element6,
            element7Six : resultdisplayTodos[5].element7, element8Six : resultdisplayTodos[5].element8, element9Six : resultdisplayTodos[5].element9, element10Six : resultdisplayTodos[5].element10,
            idSeven : resultdisplayTodos[6].id, titleSeven : resultdisplayTodos[6].title, element1Seven : resultdisplayTodos[6].element1, element2Seven : resultdisplayTodos[6].element2,
            element3Seven : resultdisplayTodos[6].element3, element4Seven : resultdisplayTodos[6].element4, element5Seven : resultdisplayTodos[6].element5, element6Seven : resultdisplayTodos[6].element6,
            element7Seven : resultdisplayTodos[6].element7, element8Seven : resultdisplayTodos[6].element8, element9Seven : resultdisplayTodos[6].element9, element10Seven : resultdisplayTodos[6].element10,
        })
    }
    if(resultdisplayTodos.length === 8 ){
        res.status(200).json({
            string : "ok",
            idOne : resultdisplayTodos[0].id, titleOne : resultdisplayTodos[0].title, element1One : resultdisplayTodos[0].element1, element2One : resultdisplayTodos[0].element2,
            element3One : resultdisplayTodos[0].element3, element4One : resultdisplayTodos[0].element4, element5One : resultdisplayTodos[0].element5, element6One : resultdisplayTodos[0].element6,
            element7One : resultdisplayTodos[0].element7, element8One : resultdisplayTodos[0].element8, element9One : resultdisplayTodos[0].element9, element10One : resultdisplayTodos[0].element10,
            idTwo : resultdisplayTodos[1].id, titleTwo : resultdisplayTodos[1].title, element1Two : resultdisplayTodos[1].element1, element2Two : resultdisplayTodos[1].element2,
            element3Two : resultdisplayTodos[1].element3, element4Two : resultdisplayTodos[1].element4, element5Two : resultdisplayTodos[1].element5, element6Two : resultdisplayTodos[1].element6,
            element7Two : resultdisplayTodos[1].element7, element8Two : resultdisplayTodos[1].element8, element9Two : resultdisplayTodos[1].element9, element10Two : resultdisplayTodos[1].element10,
            idThree : resultdisplayTodos[2].id, titleThree : resultdisplayTodos[2].title, element1Three : resultdisplayTodos[2].element1, element2Three : resultdisplayTodos[2].element2,
            element3Three : resultdisplayTodos[2].element3, element4Three : resultdisplayTodos[2].element4, element5Three : resultdisplayTodos[2].element5, element6Three : resultdisplayTodos[2].element6,
            element7Three : resultdisplayTodos[2].element7, element8Three : resultdisplayTodos[2].element8, element9Three : resultdisplayTodos[2].element9, element10Three : resultdisplayTodos[2].element10,
            idFour : resultdisplayTodos[3].id, titleFour : resultdisplayTodos[3].title, element1Four : resultdisplayTodos[3].element1, element2Four : resultdisplayTodos[3].element2,
            element3Four : resultdisplayTodos[3].element3, element4Four : resultdisplayTodos[3].element4, element5Four : resultdisplayTodos[3].element5, element6Four : resultdisplayTodos[3].element6,
            element7Four : resultdisplayTodos[3].element7, element8Four : resultdisplayTodos[3].element8, element9Four : resultdisplayTodos[3].element9, element10Four : resultdisplayTodos[3].element10,
            idFive : resultdisplayTodos[4].id, titleFive : resultdisplayTodos[4].title, element1Five : resultdisplayTodos[4].element1, element2Five : resultdisplayTodos[4].element2,
            element3Five : resultdisplayTodos[4].element3, element4Five : resultdisplayTodos[4].element4, element5Five : resultdisplayTodos[4].element5, element6Five : resultdisplayTodos[4].element6,
            element7Five : resultdisplayTodos[4].element7, element8Five : resultdisplayTodos[4].element8, element9Five : resultdisplayTodos[4].element9, element10Five : resultdisplayTodos[4].element10,
            idSix : resultdisplayTodos[5].id, titleSix : resultdisplayTodos[5].title, element1Six : resultdisplayTodos[5].element1, element2Six : resultdisplayTodos[5].element2,
            element3Six : resultdisplayTodos[5].element3, element4Six : resultdisplayTodos[5].element4, element5Six : resultdisplayTodos[5].element5, element6Six : resultdisplayTodos[5].element6,
            element7Six : resultdisplayTodos[5].element7, element8Six : resultdisplayTodos[5].element8, element9Six : resultdisplayTodos[5].element9, element10Six : resultdisplayTodos[5].element10,
            idSeven : resultdisplayTodos[6].id, titleSeven : resultdisplayTodos[6].title, element1Seven : resultdisplayTodos[6].element1, element2Seven : resultdisplayTodos[6].element2,
            element3Seven : resultdisplayTodos[6].element3, element4Seven : resultdisplayTodos[6].element4, element5Seven : resultdisplayTodos[6].element5, element6Seven : resultdisplayTodos[6].element6,
            element7Seven : resultdisplayTodos[6].element7, element8Seven : resultdisplayTodos[6].element8, element9Seven : resultdisplayTodos[6].element9, element10Seven : resultdisplayTodos[6].element10,
            idEight : resultdisplayTodos[7].id, titleEight : resultdisplayTodos[7].title, element1Eight : resultdisplayTodos[7].element1, element2Eight : resultdisplayTodos[7].element2,
            element3Eight : resultdisplayTodos[7].element3, element4Eight : resultdisplayTodos[7].element4, element5Eight : resultdisplayTodos[7].element5, element6Eight : resultdisplayTodos[7].element6,
            element7Eight : resultdisplayTodos[7].element7, element8Eight : resultdisplayTodos[7].element8, element9Eight : resultdisplayTodos[7].element9, element10Eight : resultdisplayTodos[7].element10,
        })
    }
    if(resultdisplayTodos.length === 9 ){
        res.status(200).json({
            string : "ok",
            idOne : resultdisplayTodos[0].id, titleOne : resultdisplayTodos[0].title, element1One : resultdisplayTodos[0].element1, element2One : resultdisplayTodos[0].element2,
            element3One : resultdisplayTodos[0].element3, element4One : resultdisplayTodos[0].element4, element5One : resultdisplayTodos[0].element5, element6One : resultdisplayTodos[0].element6,
            element7One : resultdisplayTodos[0].element7, element8One : resultdisplayTodos[0].element8, element9One : resultdisplayTodos[0].element9, element10One : resultdisplayTodos[0].element10,
            idTwo : resultdisplayTodos[1].id, titleTwo : resultdisplayTodos[1].title, element1Two : resultdisplayTodos[1].element1, element2Two : resultdisplayTodos[1].element2,
            element3Two : resultdisplayTodos[1].element3, element4Two : resultdisplayTodos[1].element4, element5Two : resultdisplayTodos[1].element5, element6Two : resultdisplayTodos[1].element6,
            element7Two : resultdisplayTodos[1].element7, element8Two : resultdisplayTodos[1].element8, element9Two : resultdisplayTodos[1].element9, element10Two : resultdisplayTodos[1].element10,
            idThree : resultdisplayTodos[2].id, titleThree : resultdisplayTodos[2].title, element1Three : resultdisplayTodos[2].element1, element2Three : resultdisplayTodos[2].element2,
            element3Three : resultdisplayTodos[2].element3, element4Three : resultdisplayTodos[2].element4, element5Three : resultdisplayTodos[2].element5, element6Three : resultdisplayTodos[2].element6,
            element7Three : resultdisplayTodos[2].element7, element8Three : resultdisplayTodos[2].element8, element9Three : resultdisplayTodos[2].element9, element10Three : resultdisplayTodos[2].element10,
            idFour : resultdisplayTodos[3].id, titleFour : resultdisplayTodos[3].title, element1Four : resultdisplayTodos[3].element1, element2Four : resultdisplayTodos[3].element2,
            element3Four : resultdisplayTodos[3].element3, element4Four : resultdisplayTodos[3].element4, element5Four : resultdisplayTodos[3].element5, element6Four : resultdisplayTodos[3].element6,
            element7Four : resultdisplayTodos[3].element7, element8Four : resultdisplayTodos[3].element8, element9Four : resultdisplayTodos[3].element9, element10Four : resultdisplayTodos[3].element10,
            idFive : resultdisplayTodos[4].id, titleFive : resultdisplayTodos[4].title, element1Five : resultdisplayTodos[4].element1, element2Five : resultdisplayTodos[4].element2,
            element3Five : resultdisplayTodos[4].element3, element4Five : resultdisplayTodos[4].element4, element5Five : resultdisplayTodos[4].element5, element6Five : resultdisplayTodos[4].element6,
            element7Five : resultdisplayTodos[4].element7, element8Five : resultdisplayTodos[4].element8, element9Five : resultdisplayTodos[4].element9, element10Five : resultdisplayTodos[4].element10,
            idSix : resultdisplayTodos[5].id, titleSix : resultdisplayTodos[5].title, element1Six : resultdisplayTodos[5].element1, element2Six : resultdisplayTodos[5].element2,
            element3Six : resultdisplayTodos[5].element3, element4Six : resultdisplayTodos[5].element4, element5Six : resultdisplayTodos[5].element5, element6Six : resultdisplayTodos[5].element6,
            element7Six : resultdisplayTodos[5].element7, element8Six : resultdisplayTodos[5].element8, element9Six : resultdisplayTodos[5].element9, element10Six : resultdisplayTodos[5].element10,
            idSeven : resultdisplayTodos[6].id, titleSeven : resultdisplayTodos[6].title, element1Seven : resultdisplayTodos[6].element1, element2Seven : resultdisplayTodos[6].element2,
            element3Seven : resultdisplayTodos[6].element3, element4Seven : resultdisplayTodos[6].element4, element5Seven : resultdisplayTodos[6].element5, element6Seven : resultdisplayTodos[6].element6,
            element7Seven : resultdisplayTodos[6].element7, element8Seven : resultdisplayTodos[6].element8, element9Seven : resultdisplayTodos[6].element9, element10Seven : resultdisplayTodos[6].element10,
            idEight : resultdisplayTodos[7].id, titleEight : resultdisplayTodos[7].title, element1Eight : resultdisplayTodos[7].element1, element2Eight : resultdisplayTodos[7].element2,
            element3Eight : resultdisplayTodos[7].element3, element4Eight : resultdisplayTodos[7].element4, element5Eight : resultdisplayTodos[7].element5, element6Eight : resultdisplayTodos[7].element6,
            element7Eight : resultdisplayTodos[7].element7, element8Eight : resultdisplayTodos[7].element8, element9Eight : resultdisplayTodos[7].element9, element10Eight : resultdisplayTodos[7].element10,
            idNine : resultdisplayTodos[8].id, titleNine : resultdisplayTodos[8].title, element1Nine : resultdisplayTodos[8].element1, element2Nine : resultdisplayTodos[8].element2,
            element3Nine : resultdisplayTodos[8].element3, element4Nine : resultdisplayTodos[8].element4, element5Nine : resultdisplayTodos[8].element5, element6Nine : resultdisplayTodos[8].element6,
            element7Nine : resultdisplayTodos[8].element7, element8Nine : resultdisplayTodos[8].element8, element9Nine : resultdisplayTodos[8].element9, element10Nine : resultdisplayTodos[8].element10,
        })
    }
    
    if(resultdisplayTodos.length > 10){
        res.status(200).json({
            string :"Todo list limit reached!",
            idOne : resultdisplayTodos[0].id, titleOne : resultdisplayTodos[0].title, element1One : resultdisplayTodos[0].element1, element2One : resultdisplayTodos[0].element2,
            element3One : resultdisplayTodos[0].element3, element4One : resultdisplayTodos[0].element4, element5One : resultdisplayTodos[0].element5, element6One : resultdisplayTodos[0].element6,
            element7One : resultdisplayTodos[0].element7, element8One : resultdisplayTodos[0].element8, element9One : resultdisplayTodos[0].element9, element10One : resultdisplayTodos[0].element10,
            idTwo : resultdisplayTodos[1].id, titleTwo : resultdisplayTodos[1].title, element1Two : resultdisplayTodos[1].element1, element2Two : resultdisplayTodos[1].element2,
            element3Two : resultdisplayTodos[1].element3, element4Two : resultdisplayTodos[1].element4, element5Two : resultdisplayTodos[1].element5, element6Two : resultdisplayTodos[1].element6,
            element7Two : resultdisplayTodos[1].element7, element8Two : resultdisplayTodos[1].element8, element9Two : resultdisplayTodos[1].element9, element10Two : resultdisplayTodos[1].element10,
            idThree : resultdisplayTodos[2].id, titleThree : resultdisplayTodos[2].title, element1Three : resultdisplayTodos[2].element1, element2Three : resultdisplayTodos[2].element2,
            element3Three : resultdisplayTodos[2].element3, element4Three : resultdisplayTodos[2].element4, element5Three : resultdisplayTodos[2].element5, element6Three : resultdisplayTodos[2].element6,
            element7Three : resultdisplayTodos[2].element7, element8Three : resultdisplayTodos[2].element8, element9Three : resultdisplayTodos[2].element9, element10Three : resultdisplayTodos[2].element10,
            idFour : resultdisplayTodos[3].id, titleFour : resultdisplayTodos[3].title, element1Four : resultdisplayTodos[3].element1, element2Four : resultdisplayTodos[3].element2,
            element3Four : resultdisplayTodos[3].element3, element4Four : resultdisplayTodos[3].element4, element5Four : resultdisplayTodos[3].element5, element6Four : resultdisplayTodos[3].element6,
            element7Four : resultdisplayTodos[3].element7, element8Four : resultdisplayTodos[3].element8, element9Four : resultdisplayTodos[3].element9, element10Four : resultdisplayTodos[3].element10,
            idFive : resultdisplayTodos[4].id, titleFive : resultdisplayTodos[4].title, element1Five : resultdisplayTodos[4].element1, element2Five : resultdisplayTodos[4].element2,
            element3Five : resultdisplayTodos[4].element3, element4Five : resultdisplayTodos[4].element4, element5Five : resultdisplayTodos[4].element5, element6Five : resultdisplayTodos[4].element6,
            element7Five : resultdisplayTodos[4].element7, element8Five : resultdisplayTodos[4].element8, element9Five : resultdisplayTodos[4].element9, element10Five : resultdisplayTodos[4].element10,
            idSix : resultdisplayTodos[5].id, titleSix : resultdisplayTodos[5].title, element1Six : resultdisplayTodos[5].element1, element2Six : resultdisplayTodos[5].element2,
            element3Six : resultdisplayTodos[5].element3, element4Six : resultdisplayTodos[5].element4, element5Six : resultdisplayTodos[5].element5, element6Six : resultdisplayTodos[5].element6,
            element7Six : resultdisplayTodos[5].element7, element8Six : resultdisplayTodos[5].element8, element9Six : resultdisplayTodos[5].element9, element10Six : resultdisplayTodos[5].element10,
            idSeven : resultdisplayTodos[6].id, titleSeven : resultdisplayTodos[6].title, element1Seven : resultdisplayTodos[6].element1, element2Seven : resultdisplayTodos[6].element2,
            element3Seven : resultdisplayTodos[6].element3, element4Seven : resultdisplayTodos[6].element4, element5Seven : resultdisplayTodos[6].element5, element6Seven : resultdisplayTodos[6].element6,
            element7Seven : resultdisplayTodos[6].element7, element8Seven : resultdisplayTodos[6].element8, element9Seven : resultdisplayTodos[6].element9, element10Seven : resultdisplayTodos[6].element10,
            idEight : resultdisplayTodos[7].id, titleEight : resultdisplayTodos[7].title, element1Eight : resultdisplayTodos[7].element1, element2Eight : resultdisplayTodos[7].element2,
            element3Eight : resultdisplayTodos[7].element3, element4Eight : resultdisplayTodos[7].element4, element5Eight : resultdisplayTodos[7].element5, element6Eight : resultdisplayTodos[7].element6,
            element7Eight : resultdisplayTodos[7].element7, element8Eight : resultdisplayTodos[7].element8, element9Eight : resultdisplayTodos[7].element9, element10Eight : resultdisplayTodos[7].element10,
            idNine : resultdisplayTodos[8].id, titleNine : resultdisplayTodos[8].title, element1Nine : resultdisplayTodos[8].element1, element2Nine : resultdisplayTodos[8].element2,
            element3Nine : resultdisplayTodos[8].element3, element4Nine : resultdisplayTodos[8].element4, element5Nine : resultdisplayTodos[8].element5, element6Nine : resultdisplayTodos[8].element6,
            element7Nine : resultdisplayTodos[8].element7, element8Nine : resultdisplayTodos[8].element8, element9Nine : resultdisplayTodos[8].element9, element10Nine : resultdisplayTodos[8].element10,
            idTen : resultdisplayTodos[9].id, titleTen : resultdisplayTodos[9].title, element1Ten : resultdisplayTodos[9].element1, element2Ten : resultdisplayTodos[9].element2,
            element3Ten : resultdisplayTodos[9].element3, element4Ten : resultdisplayTodos[9].element4, element5Ten : resultdisplayTodos[9].element5, element6Ten : resultdisplayTodos[9].element6,
            element7Ten : resultdisplayTodos[9].element7, element8Ten : resultdisplayTodos[9].element8, element9Ten : resultdisplayTodos[09].element9, element10Ten : resultdisplayTodos[9].element10,
        })      
    }
    if(resultdisplayTodos.length > 11){
        res.status(200).json({
            string :"Todo list limit reached!",
            idOne : resultdisplayTodos[0].id, titleOne : resultdisplayTodos[0].title, element1One : resultdisplayTodos[0].element1, element2One : resultdisplayTodos[0].element2,
            element3One : resultdisplayTodos[0].element3, element4One : resultdisplayTodos[0].element4, element5One : resultdisplayTodos[0].element5, element6One : resultdisplayTodos[0].element6,
            element7One : resultdisplayTodos[0].element7, element8One : resultdisplayTodos[0].element8, element9One : resultdisplayTodos[0].element9, element10One : resultdisplayTodos[0].element10,
            idTwo : resultdisplayTodos[1].id, titleTwo : resultdisplayTodos[1].title, element1Two : resultdisplayTodos[1].element1, element2Two : resultdisplayTodos[1].element2,
            element3Two : resultdisplayTodos[1].element3, element4Two : resultdisplayTodos[1].element4, element5Two : resultdisplayTodos[1].element5, element6Two : resultdisplayTodos[1].element6,
            element7Two : resultdisplayTodos[1].element7, element8Two : resultdisplayTodos[1].element8, element9Two : resultdisplayTodos[1].element9, element10Two : resultdisplayTodos[1].element10,
            idThree : resultdisplayTodos[2].id, titleThree : resultdisplayTodos[2].title, element1Three : resultdisplayTodos[2].element1, element2Three : resultdisplayTodos[2].element2,
            element3Three : resultdisplayTodos[2].element3, element4Three : resultdisplayTodos[2].element4, element5Three : resultdisplayTodos[2].element5, element6Three : resultdisplayTodos[2].element6,
            element7Three : resultdisplayTodos[2].element7, element8Three : resultdisplayTodos[2].element8, element9Three : resultdisplayTodos[2].element9, element10Three : resultdisplayTodos[2].element10,
            idFour : resultdisplayTodos[3].id, titleFour : resultdisplayTodos[3].title, element1Four : resultdisplayTodos[3].element1, element2Four : resultdisplayTodos[3].element2,
            element3Four : resultdisplayTodos[3].element3, element4Four : resultdisplayTodos[3].element4, element5Four : resultdisplayTodos[3].element5, element6Four : resultdisplayTodos[3].element6,
            element7Four : resultdisplayTodos[3].element7, element8Four : resultdisplayTodos[3].element8, element9Four : resultdisplayTodos[3].element9, element10Four : resultdisplayTodos[3].element10,
            idFive : resultdisplayTodos[4].id, titleFive : resultdisplayTodos[4].title, element1Five : resultdisplayTodos[4].element1, element2Five : resultdisplayTodos[4].element2,
            element3Five : resultdisplayTodos[4].element3, element4Five : resultdisplayTodos[4].element4, element5Five : resultdisplayTodos[4].element5, element6Five : resultdisplayTodos[4].element6,
            element7Five : resultdisplayTodos[4].element7, element8Five : resultdisplayTodos[4].element8, element9Five : resultdisplayTodos[4].element9, element10Five : resultdisplayTodos[4].element10,
            idSix : resultdisplayTodos[5].id, titleSix : resultdisplayTodos[5].title, element1Six : resultdisplayTodos[5].element1, element2Six : resultdisplayTodos[5].element2,
            element3Six : resultdisplayTodos[5].element3, element4Six : resultdisplayTodos[5].element4, element5Six : resultdisplayTodos[5].element5, element6Six : resultdisplayTodos[5].element6,
            element7Six : resultdisplayTodos[5].element7, element8Six : resultdisplayTodos[5].element8, element9Six : resultdisplayTodos[5].element9, element10Six : resultdisplayTodos[5].element10,
            idSeven : resultdisplayTodos[6].id, titleSeven : resultdisplayTodos[6].title, element1Seven : resultdisplayTodos[6].element1, element2Seven : resultdisplayTodos[6].element2,
            element3Seven : resultdisplayTodos[6].element3, element4Seven : resultdisplayTodos[6].element4, element5Seven : resultdisplayTodos[6].element5, element6Seven : resultdisplayTodos[6].element6,
            element7Seven : resultdisplayTodos[6].element7, element8Seven : resultdisplayTodos[6].element8, element9Seven : resultdisplayTodos[6].element9, element10Seven : resultdisplayTodos[6].element10,
            idEight : resultdisplayTodos[7].id, titleEight : resultdisplayTodos[7].title, element1Eight : resultdisplayTodos[7].element1, element2Eight : resultdisplayTodos[7].element2,
            element3Eight : resultdisplayTodos[7].element3, element4Eight : resultdisplayTodos[7].element4, element5Eight : resultdisplayTodos[7].element5, element6Eight : resultdisplayTodos[7].element6,
            element7Eight : resultdisplayTodos[7].element7, element8Eight : resultdisplayTodos[7].element8, element9Eight : resultdisplayTodos[7].element9, element10Eight : resultdisplayTodos[7].element10,
            idNine : resultdisplayTodos[8].id, titleNine : resultdisplayTodos[8].title, element1Nine : resultdisplayTodos[8].element1, element2Nine : resultdisplayTodos[8].element2,
            element3Nine : resultdisplayTodos[8].element3, element4Nine : resultdisplayTodos[8].element4, element5Nine : resultdisplayTodos[8].element5, element6Nine : resultdisplayTodos[8].element6,
            element7Nine : resultdisplayTodos[8].element7, element8Nine : resultdisplayTodos[8].element8, element9Nine : resultdisplayTodos[8].element9, element10Nine : resultdisplayTodos[8].element10,
            idTen : resultdisplayTodos[9].id, titleTen : resultdisplayTodos[9].title, element1Ten : resultdisplayTodos[9].element1, element2Ten : resultdisplayTodos[9].element2,
            element3Ten : resultdisplayTodos[9].element3, element4Ten : resultdisplayTodos[9].element4, element5Ten : resultdisplayTodos[9].element5, element6Ten : resultdisplayTodos[9].element6,
            element7Ten : resultdisplayTodos[9].element7, element8Ten : resultdisplayTodos[9].element8, element9Ten : resultdisplayTodos[09].element9, element10Ten : resultdisplayTodos[9].element10,
            idEleven : resultdisplayTodos[10].id, titleEleven : resultdisplayTodos[10].title, element1Eleven : resultdisplayTodos[10].element1, element2Eleven : resultdisplayTodos[10].element2,
            element3Eleven : resultdisplayTodos[10].element3, element4Eleven : resultdisplayTodos[10].element4, element5Eleven : resultdisplayTodos[10].element5, element6Eleven : resultdisplayTodos[10].element6,
            element7Eleven : resultdisplayTodos[10].element7, element8Eleven : resultdisplayTodos[10].element8, element9Eleven : resultdisplayTodos[10].element9, element10Eleven : resultdisplayTodos[10].element10,
        })      
    }
    if(resultdisplayTodos.length > 12){
        res.status(200).json({
            string :"Todo list limit reached!",
            idOne : resultdisplayTodos[0].id, titleOne : resultdisplayTodos[0].title, element1One : resultdisplayTodos[0].element1, element2One : resultdisplayTodos[0].element2,
            element3One : resultdisplayTodos[0].element3, element4One : resultdisplayTodos[0].element4, element5One : resultdisplayTodos[0].element5, element6One : resultdisplayTodos[0].element6,
            element7One : resultdisplayTodos[0].element7, element8One : resultdisplayTodos[0].element8, element9One : resultdisplayTodos[0].element9, element10One : resultdisplayTodos[0].element10,
            idTwo : resultdisplayTodos[1].id, titleTwo : resultdisplayTodos[1].title, element1Two : resultdisplayTodos[1].element1, element2Two : resultdisplayTodos[1].element2,
            element3Two : resultdisplayTodos[1].element3, element4Two : resultdisplayTodos[1].element4, element5Two : resultdisplayTodos[1].element5, element6Two : resultdisplayTodos[1].element6,
            element7Two : resultdisplayTodos[1].element7, element8Two : resultdisplayTodos[1].element8, element9Two : resultdisplayTodos[1].element9, element10Two : resultdisplayTodos[1].element10,
            idThree : resultdisplayTodos[2].id, titleThree : resultdisplayTodos[2].title, element1Three : resultdisplayTodos[2].element1, element2Three : resultdisplayTodos[2].element2,
            element3Three : resultdisplayTodos[2].element3, element4Three : resultdisplayTodos[2].element4, element5Three : resultdisplayTodos[2].element5, element6Three : resultdisplayTodos[2].element6,
            element7Three : resultdisplayTodos[2].element7, element8Three : resultdisplayTodos[2].element8, element9Three : resultdisplayTodos[2].element9, element10Three : resultdisplayTodos[2].element10,
            idFour : resultdisplayTodos[3].id, titleFour : resultdisplayTodos[3].title, element1Four : resultdisplayTodos[3].element1, element2Four : resultdisplayTodos[3].element2,
            element3Four : resultdisplayTodos[3].element3, element4Four : resultdisplayTodos[3].element4, element5Four : resultdisplayTodos[3].element5, element6Four : resultdisplayTodos[3].element6,
            element7Four : resultdisplayTodos[3].element7, element8Four : resultdisplayTodos[3].element8, element9Four : resultdisplayTodos[3].element9, element10Four : resultdisplayTodos[3].element10,
            idFive : resultdisplayTodos[4].id, titleFive : resultdisplayTodos[4].title, element1Five : resultdisplayTodos[4].element1, element2Five : resultdisplayTodos[4].element2,
            element3Five : resultdisplayTodos[4].element3, element4Five : resultdisplayTodos[4].element4, element5Five : resultdisplayTodos[4].element5, element6Five : resultdisplayTodos[4].element6,
            element7Five : resultdisplayTodos[4].element7, element8Five : resultdisplayTodos[4].element8, element9Five : resultdisplayTodos[4].element9, element10Five : resultdisplayTodos[4].element10,
            idSix : resultdisplayTodos[5].id, titleSix : resultdisplayTodos[5].title, element1Six : resultdisplayTodos[5].element1, element2Six : resultdisplayTodos[5].element2,
            element3Six : resultdisplayTodos[5].element3, element4Six : resultdisplayTodos[5].element4, element5Six : resultdisplayTodos[5].element5, element6Six : resultdisplayTodos[5].element6,
            element7Six : resultdisplayTodos[5].element7, element8Six : resultdisplayTodos[5].element8, element9Six : resultdisplayTodos[5].element9, element10Six : resultdisplayTodos[5].element10,
            idSeven : resultdisplayTodos[6].id, titleSeven : resultdisplayTodos[6].title, element1Seven : resultdisplayTodos[6].element1, element2Seven : resultdisplayTodos[6].element2,
            element3Seven : resultdisplayTodos[6].element3, element4Seven : resultdisplayTodos[6].element4, element5Seven : resultdisplayTodos[6].element5, element6Seven : resultdisplayTodos[6].element6,
            element7Seven : resultdisplayTodos[6].element7, element8Seven : resultdisplayTodos[6].element8, element9Seven : resultdisplayTodos[6].element9, element10Seven : resultdisplayTodos[6].element10,
            idEight : resultdisplayTodos[7].id, titleEight : resultdisplayTodos[7].title, element1Eight : resultdisplayTodos[7].element1, element2Eight : resultdisplayTodos[7].element2,
            element3Eight : resultdisplayTodos[7].element3, element4Eight : resultdisplayTodos[7].element4, element5Eight : resultdisplayTodos[7].element5, element6Eight : resultdisplayTodos[7].element6,
            element7Eight : resultdisplayTodos[7].element7, element8Eight : resultdisplayTodos[7].element8, element9Eight : resultdisplayTodos[7].element9, element10Eight : resultdisplayTodos[7].element10,
            idNine : resultdisplayTodos[8].id, titleNine : resultdisplayTodos[8].title, element1Nine : resultdisplayTodos[8].element1, element2Nine : resultdisplayTodos[8].element2,
            element3Nine : resultdisplayTodos[8].element3, element4Nine : resultdisplayTodos[8].element4, element5Nine : resultdisplayTodos[8].element5, element6Nine : resultdisplayTodos[8].element6,
            element7Nine : resultdisplayTodos[8].element7, element8Nine : resultdisplayTodos[8].element8, element9Nine : resultdisplayTodos[8].element9, element10Nine : resultdisplayTodos[8].element10,
            idTen : resultdisplayTodos[9].id, titleTen : resultdisplayTodos[9].title, element1Ten : resultdisplayTodos[9].element1, element2Ten : resultdisplayTodos[9].element2,
            element3Ten : resultdisplayTodos[9].element3, element4Ten : resultdisplayTodos[9].element4, element5Ten : resultdisplayTodos[9].element5, element6Ten : resultdisplayTodos[9].element6,
            element7Ten : resultdisplayTodos[9].element7, element8Ten : resultdisplayTodos[9].element8, element9Ten : resultdisplayTodos[09].element9, element10Ten : resultdisplayTodos[9].element10,
            idEleven : resultdisplayTodos[10].id, titleEleven : resultdisplayTodos[10].title, element1Eleven : resultdisplayTodos[10].element1, element2Eleven : resultdisplayTodos[10].element2,
            element3Eleven : resultdisplayTodos[10].element3, element4Eleven : resultdisplayTodos[10].element4, element5Eleven : resultdisplayTodos[10].element5, element6Eleven : resultdisplayTodos[10].element6,
            element7Eleven : resultdisplayTodos[10].element7, element8Eleven : resultdisplayTodos[10].element8, element9Eleven : resultdisplayTodos[10].element9, element10Eleven : resultdisplayTodos[10].element10,
            idTwelve : resultdisplayTodos[11].id, titleTwelve : resultdisplayTodos[11].title, element1Twelve : resultdisplayTodos[11].element1, element2Twelve : resultdisplayTodos[11].element2,
            element3Twelve : resultdisplayTodos[11].element3, element4Twelve : resultdisplayTodos[11].element4, element5Twelve : resultdisplayTodos[11].element5, element6Twelve : resultdisplayTodos[11].element6,
            element7Twelve : resultdisplayTodos[11].element7, element8Twelve : resultdisplayTodos[11].element8, element9Twelve : resultdisplayTodos[11].element9, element10Twelve : resultdisplayTodos[11].element10,
        })
    }
    if (err) {
            console.log('resultdisplayTodos.length', resultdisplayTodos.length);
            console.log(err.code);
            res.status(200).json('error')
    }
            console.log('resultdisplayTodos', resultdisplayTodos);
    })
})

App.post('/displayTodo1', (req, res) => {
    const addTodo1 = 'SELECT * FROM todolist1 WHERE id = 1'
    config.query(addTodo1, (err, resultdisplayTodo1) => {
        if(err){
            res.status(200).json("error");      
    }
    else{
        console.log('resultdisplayTodo1', resultdisplayTodo1);
        res.status(200).json({
            string :"ok",
            id : resultdisplayTodo1[0].id, title : resultdisplayTodo1[0].title, element1 : resultdisplayTodo1[0].element1, element2 : resultdisplayTodo1[0].element2,
            element3 : resultdisplayTodo1[0].element3, element4 : resultdisplayTodo1[0].element4, element5 : resultdisplayTodo1[0].element5, element6 : resultdisplayTodo1[0].element6,
            element7 : resultdisplayTodo1[0].element7, element8 : resultdisplayTodo1[0].element8, element9 : resultdisplayTodo1[0].element9, element10 : resultdisplayTodo1[0].element10,
        });      

    }
})
})

App.post('/displayTodo2', (req, res) => {
    const addTodo1 = 'SELECT * FROM todolist1 WHERE id = 2'
    config.query(addTodo1, (err, resultdisplayTodo1) => {
        if(err){
            res.status(200).json("error");      
    }
    else{
        console.log('resultdisplayTodo1', resultdisplayTodo1);
        res.status(200).json({
            string :"ok",
            id : resultdisplayTodo1[0].id, title : resultdisplayTodo1[0].title, element1 : resultdisplayTodo1[0].element1, element2 : resultdisplayTodo1[0].element2,
            element3 : resultdisplayTodo1[0].element3, element4 : resultdisplayTodo1[0].element4, element5 : resultdisplayTodo1[0].element5, element6 : resultdisplayTodo1[0].element6,
            element7 : resultdisplayTodo1[0].element7, element8 : resultdisplayTodo1[0].element8, element9 : resultdisplayTodo1[0].element9, element10 : resultdisplayTodo1[0].element10,
        });      

    }
})
})

App.post('/displayTodo3', (req, res) => {
    const addTodo1 = 'SELECT * FROM todolist1 WHERE id = 3'
    config.query(addTodo1, (err, resultdisplayTodo1) => {
        if(err){
            res.status(200).json("error");      
    }
    else{
        console.log('resultdisplayTodo1', resultdisplayTodo1);
        res.status(200).json({
            string :"ok",
            id : resultdisplayTodo1[0].id, title : resultdisplayTodo1[0].title, element1 : resultdisplayTodo1[0].element1, element2 : resultdisplayTodo1[0].element2,
            element3 : resultdisplayTodo1[0].element3, element4 : resultdisplayTodo1[0].element4, element5 : resultdisplayTodo1[0].element5, element6 : resultdisplayTodo1[0].element6,
            element7 : resultdisplayTodo1[0].element7, element8 : resultdisplayTodo1[0].element8, element9 : resultdisplayTodo1[0].element9, element10 : resultdisplayTodo1[0].element10,
        });      

    }
})
})

App.post('/displayTodo4', (req, res) => {
    const addTodo1 = 'SELECT * FROM todolist1 WHERE id = 4'
    config.query(addTodo1, (err, resultdisplayTodo1) => {
        if(err){
            res.status(200).json("error");      
    }
    else{
        console.log('resultdisplayTodo1', resultdisplayTodo1);
        res.status(200).json({
            string :"ok",
            id : resultdisplayTodo1[0].id, title : resultdisplayTodo1[0].title, element1 : resultdisplayTodo1[0].element1, element2 : resultdisplayTodo1[0].element2,
            element3 : resultdisplayTodo1[0].element3, element4 : resultdisplayTodo1[0].element4, element5 : resultdisplayTodo1[0].element5, element6 : resultdisplayTodo1[0].element6,
            element7 : resultdisplayTodo1[0].element7, element8 : resultdisplayTodo1[0].element8, element9 : resultdisplayTodo1[0].element9, element10 : resultdisplayTodo1[0].element10,
        });      

    }
})
})

App.post('/displayTodo5', (req, res) => {
    const addTodo1 = 'SELECT * FROM todolist1 WHERE id = 5'
    config.query(addTodo1, (err, resultdisplayTodo1) => {
        if(err){
            res.status(200).json("error");      
    }
    else{
        console.log('resultdisplayTodo1', resultdisplayTodo1);
        res.status(200).json({
            string :"ok",
            id : resultdisplayTodo1[0].id, title : resultdisplayTodo1[0].title, element1 : resultdisplayTodo1[0].element1, element2 : resultdisplayTodo1[0].element2,
            element3 : resultdisplayTodo1[0].element3, element4 : resultdisplayTodo1[0].element4, element5 : resultdisplayTodo1[0].element5, element6 : resultdisplayTodo1[0].element6,
            element7 : resultdisplayTodo1[0].element7, element8 : resultdisplayTodo1[0].element8, element9 : resultdisplayTodo1[0].element9, element10 : resultdisplayTodo1[0].element10,
        });      

    }
})
})

App.post('/displayTodo6', (req, res) => {
    const addTodo1 = 'SELECT * FROM todolist1 WHERE id = 6'
    config.query(addTodo1, (err, resultdisplayTodo1) => {
        if(err){
            res.status(200).json("error");      
    }
    else{
        console.log('resultdisplayTodo1', resultdisplayTodo1);
        res.status(200).json({
            string :"ok",
            id : resultdisplayTodo1[0].id, title : resultdisplayTodo1[0].title, element1 : resultdisplayTodo1[0].element1, element2 : resultdisplayTodo1[0].element2,
            element3 : resultdisplayTodo1[0].element3, element4 : resultdisplayTodo1[0].element4, element5 : resultdisplayTodo1[0].element5, element6 : resultdisplayTodo1[0].element6,
            element7 : resultdisplayTodo1[0].element7, element8 : resultdisplayTodo1[0].element8, element9 : resultdisplayTodo1[0].element9, element10 : resultdisplayTodo1[0].element10,
        });      

    }
})
})

App.post('/displayTodo7', (req, res) => {
    const addTodo1 = 'SELECT * FROM todolist1 WHERE id = 7'
    config.query(addTodo1, (err, resultdisplayTodo1) => {
        if(err){
            res.status(200).json("error");      
    }
    else{
        console.log('resultdisplayTodo1', resultdisplayTodo1);
        res.status(200).json({
            string :"ok",
            id : resultdisplayTodo1[0].id, title : resultdisplayTodo1[0].title, element1 : resultdisplayTodo1[0].element1, element2 : resultdisplayTodo1[0].element2,
            element3 : resultdisplayTodo1[0].element3, element4 : resultdisplayTodo1[0].element4, element5 : resultdisplayTodo1[0].element5, element6 : resultdisplayTodo1[0].element6,
            element7 : resultdisplayTodo1[0].element7, element8 : resultdisplayTodo1[0].element8, element9 : resultdisplayTodo1[0].element9, element10 : resultdisplayTodo1[0].element10,
        });      

    }
})
})

App.post('/displayTodo8', (req, res) => {
    const addTodo1 = 'SELECT * FROM todolist1 WHERE id = 8'
    config.query(addTodo1, (err, resultdisplayTodo1) => {
        if(err){
            res.status(200).json("error");      
    }
    else{
        console.log('resultdisplayTodo1', resultdisplayTodo1);
        res.status(200).json({
            string :"ok",
            id : resultdisplayTodo1[0].id, title : resultdisplayTodo1[0].title, element1 : resultdisplayTodo1[0].element1, element2 : resultdisplayTodo1[0].element2,
            element3 : resultdisplayTodo1[0].element3, element4 : resultdisplayTodo1[0].element4, element5 : resultdisplayTodo1[0].element5, element6 : resultdisplayTodo1[0].element6,
            element7 : resultdisplayTodo1[0].element7, element8 : resultdisplayTodo1[0].element8, element9 : resultdisplayTodo1[0].element9, element10 : resultdisplayTodo1[0].element10,
        });      

    }
})
})

App.post('/displayTodo9', (req, res) => {
    const addTodo1 = 'SELECT * FROM todolist1 WHERE id = 9'
    config.query(addTodo1, (err, resultdisplayTodo1) => {
        if(err){
            res.status(200).json("error");      
    }
    else{
        console.log('resultdisplayTodo1', resultdisplayTodo1);
        res.status(200).json({
            string :"ok",
            id : resultdisplayTodo1[0].id, title : resultdisplayTodo1[0].title, element1 : resultdisplayTodo1[0].element1, element2 : resultdisplayTodo1[0].element2,
            element3 : resultdisplayTodo1[0].element3, element4 : resultdisplayTodo1[0].element4, element5 : resultdisplayTodo1[0].element5, element6 : resultdisplayTodo1[0].element6,
            element7 : resultdisplayTodo1[0].element7, element8 : resultdisplayTodo1[0].element8, element9 : resultdisplayTodo1[0].element9, element10 : resultdisplayTodo1[0].element10,
        });      

    }
})
})

App.post('/displayTodo10', (req, res) => {
    const addTodo1 = 'SELECT * FROM todolist1 WHERE id = 10'
    config.query(addTodo1, (err, resultdisplayTodo1) => {
        if(err){
            res.status(200).json("error");      
    }
    else{
        console.log('resultdisplayTodo1', resultdisplayTodo1);
        res.status(200).json({
            string :"ok",
            id : resultdisplayTodo1[0].id, title : resultdisplayTodo1[0].title, element1 : resultdisplayTodo1[0].element1, element2 : resultdisplayTodo1[0].element2,
            element3 : resultdisplayTodo1[0].element3, element4 : resultdisplayTodo1[0].element4, element5 : resultdisplayTodo1[0].element5, element6 : resultdisplayTodo1[0].element6,
            element7 : resultdisplayTodo1[0].element7, element8 : resultdisplayTodo1[0].element8, element9 : resultdisplayTodo1[0].element9, element10 : resultdisplayTodo1[0].element10,
        });      

    }
})
})

App.post('/displayTodo11', (req, res) => {
    const addTodo1 = 'SELECT * FROM todolist1 WHERE id = 11'
    config.query(addTodo1, (err, resultdisplayTodo1) => {
        if(err){
            res.status(200).json("error");      
    }
    else{
        console.log('resultdisplayTodo1', resultdisplayTodo1);
        res.status(200).json({
            string :"ok",
            id : resultdisplayTodo1[0].id, title : resultdisplayTodo1[0].title, element1 : resultdisplayTodo1[0].element1, element2 : resultdisplayTodo1[0].element2,
            element3 : resultdisplayTodo1[0].element3, element4 : resultdisplayTodo1[0].element4, element5 : resultdisplayTodo1[0].element5, element6 : resultdisplayTodo1[0].element6,
            element7 : resultdisplayTodo1[0].element7, element8 : resultdisplayTodo1[0].element8, element9 : resultdisplayTodo1[0].element9, element10 : resultdisplayTodo1[0].element10,
        });      

    }
})
})

App.post('/displayTodo12', (req, res) => {
    const addTodo1 = 'SELECT * FROM todolist1 WHERE id = 12'
    config.query(addTodo1, (err, resultdisplayTodo1) => {
        if(err){
            res.status(200).json("error");      
    }
    else{
        console.log('resultdisplayTodo1', resultdisplayTodo1);
        res.status(200).json({
            string :"ok",
            id : resultdisplayTodo1[0].id, title : resultdisplayTodo1[0].title, element1 : resultdisplayTodo1[0].element1, element2 : resultdisplayTodo1[0].element2,
            element3 : resultdisplayTodo1[0].element3, element4 : resultdisplayTodo1[0].element4, element5 : resultdisplayTodo1[0].element5, element6 : resultdisplayTodo1[0].element6,
            element7 : resultdisplayTodo1[0].element7, element8 : resultdisplayTodo1[0].element8, element9 : resultdisplayTodo1[0].element9, element10 : resultdisplayTodo1[0].element10,
        });      

    }
})
})

App.post('/updateTodo', (req ,res) => {
    console.log('req.body.updateBefore', req.body );
    if(req.body.title === ''){req.body.title=req.body.todolist[0].title}else{req.body.title=req.body.title}
    if(req.body.element1 === ''){req.body.element1=req.body.todolist[0].element1}else{req.body.element1=req.body.element1}
    if(req.body.element2 === ''){req.body.element2=req.body.todolist[0].element2}else{req.body.element2=req.body.element2}
    if(req.body.element3 === ''){req.body.element3=req.body.todolist[0].element3}else{req.body.element3=req.body.element3}
    if(req.body.element4 === ''){req.body.element4=req.body.todolist[0].element4}else{req.body.element4=req.body.element4}
    if(req.body.element5 === ''){req.body.element5=req.body.todolist[0].element5}else{req.body.element5=req.body.element5}
    if(req.body.element6 === ''){req.body.element6=req.body.todolist[0].element6}else{req.body.element6=req.body.element6}
    if(req.body.element7 === ''){req.body.element7=req.body.todolist[0].element7}else{req.body.element7=req.body.element7}
    if(req.body.element8 === ''){req.body.element8=req.body.todolist[0].element8}else{req.body.element8=req.body.element8}
    if(req.body.element9 === ''){req.body.element9=req.body.todolist[0].element9}else{req.body.element9=req.body.element9}
    if(req.body.element10 === ''){req.body.element10=req.body.todolist[0].element10}else{req.body.element10=req.body.element10}
    console.log('req.body.updateaAfter', req.body );
    const updateTodo = `UPDATE todolist1 SET title=${mySql.escape(req.body.todolist[0].title)}, 
                                             element1=${mySql.escape(req.body.element1)},
                                             element2=${mySql.escape(req.body.element2)},
                                             element3=${mySql.escape(req.body.element3)}, 
                                             element4=${mySql.escape(req.body.element4)}, 
                                             element5=${mySql.escape(req.body.element5)}, 
                                             element6=${mySql.escape(req.body.element6)}, 
                                             element7=${mySql.escape(req.body.element7)}, 
                                             element8=${mySql.escape(req.body.element8)}, 
                                             element9=${mySql.escape(req.body.element9)}, 
                                             element10=${mySql.escape(req.body.element10)}
    WHERE id = ${mySql.escape(req.body.todolist[0].id)}`
    
    config.query(updateTodo, (err, resultUpdateTodo) => {
        if(err) {
            console.log('resultUpdateTodo', resultUpdateTodo);
            res.status(200).json(err)
        }
        else{
            res.status(200).json({
                string : 'updateOk',
            })
        }
    
    })
})
App.listen(Port, () => {
    console.log(`Server started on ${Port}`);
})
