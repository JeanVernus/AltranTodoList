import React, {Component} from "react";
import {Button, Form} from 'semantic-ui-react';
import '../Css/NewTask.scss';
import Noty from 'noty';
import Axios from 'axios';

class NewTask extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: "",
            title:"",
            content: "",
            res : "",
            tasksList: []
         }
        this.addTask = this.addTask.bind(this);
        this.InputTask = this.InputTask.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.deleteLine = this.deleteLine.bind(this);
    }

    InputTask(event, key){
        this.setState({[event.target.name] : event.target.value});
        if(key === "task"){this.setState({content: event.target.value})};
        if(key === "title"){this.setState({title: event.target.value})};
    }

    addTask(event){
        event.preventDefault()
        const {content, title} = this.state;
        Axios.post('http://localhost:7770/postTask',{
            content,
            title
        })
        .then(res =>{
            const {tasksList} = this.state;
            this.setState({res : res.data});
            tasksList.push(res);
            this.setState({tasksList});
            if(tasksList.length === 10) {
                new Noty({
                    text: 'task limit rteached !',
                    type: 'warning',
                    theme: 'sunset',
                    timeout: 3000,
                  }).show();
                  this.saveTask()
            } 
        })
        document.getElementById("task").value = "";
        document.getElementById("title").value = "";
    }

    miseEnAttente(){
        setTimeout(this.refreshPage, 1500);
    }
    refreshPage(){
        window.location.reload()
    }

    saveTask(){
        const {tasksList, title, id} = this.state;
        Axios.post('http://localhost:7770/saveTask',  {
            tasksList,
            title,
            id
        })
        .then(res =>{
            console.log("saveTask",res.data);
            if (res.data.string === "ok"){
                this.miseEnAttente()
                new Noty({
                    text: 'Todo save!',
                    type: 'success',
                    theme: 'sunset',
                    timeout: 3000,
                  }).show();
                 }  
            if(res.data.string === "task limit reached") {
                new Noty({
                    text: 'task limit reached',
                    type: 'warning',
                    theme: 'sunsen',
                    timeout: 3000,
                  }).show();
            }  
                 
        })
    }
    
    componentDidMount(){Axios.post('http://www.localhost:7770/displayTodos').then(res => {
        if(res.data.string === "Todo list limit reached!"){
            new Noty({
                text: "Todo list limit reached!",
                type: 'warning',
                theme: 'sunset',
                timeout: 3000,
              }).show();
        }
        if(res.data.string === "Todo list limit is over!"){
            new Noty({
                text: "Todo list limit reached! <br/ > Your last todo is not saved",
                type: 'warning',
                theme: 'sunset',
                timeout: 3000,
              }).show();
        }
    })}

    deleteLine(index, tasksList){
        const CopyTasksList = [...tasksList];
        console.log('beforeCopyTasksList', CopyTasksList, index);
            CopyTasksList.splice(index, 1);
        this.setState({tasksList : CopyTasksList})
        console.log('AfterCopyTasksList', CopyTasksList, index);

    }

    componentDidUpdate(){
        const { tasksList, title} = this.state;
        return(
            <div className="TableTask">
                <h1 className="TitleNewTask">{title}</h1>
                <div>{tasksList.map((json, index) =>(
                    <div className="DisplayNewTask" key={index}>
                        <div><h1 className="ContentNewTask">{json.data} </h1></div>                        
                        <div>
                        <Button 
                        className="deleteButton" 
                        onClick={()=>this.deleteLine(index, tasksList)}
                        >
                        Del</Button></div>
                    </div>                               
                    ))
                    }      
                </div>
            </div>
        )
    }



    render() { 
        return (
            <div>
                <h2 className="SubTitleNewTask">Add task</h2>
                <Form onSubmit={this.addTask}>
                    <div className="DisplayAddTask">
                        <input className="TextInput" type="text" name="title" id="title" placeholder="TITLE" onChange={event => this.InputTask(event, "title")} />
                        <input className="TextInput"type="text" name="task" id="task" placeholder="TASK" onChange={event => this.InputTask(event, "task")} required/>
                    </div>
                    <div className="DisplayAddButton"><Button className="SaveButton" type="onSubmit">add task</Button></div>
                    <div className="DisplayAddButton"><Button inverted color='violet' className="AddButton" onClick={this.saveTask}><h4 className="spane"><i className="fas fa-angle-down"></i>Save task</h4></Button></div>
                </Form>
    
                <h2 className="TitleNewTask">Tasks list</h2>
                <div>{this.componentDidUpdate()}</div>
            </div>
         );
    }
}
 
export default NewTask;