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
    }

    InputTask(event, key){
        this.setState({[event.target.name] : event.target.value});
        if(key === "task"){this.setState({content: event.target.value})};
        if(key === "title"){this.setState({title: event.target.value})};
        // console.log("content", this.state.content);
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
            // console.log(res.data);
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
                this.refreshPage()
                new Noty({
                    text: 'Todo save!',
                    type: 'sucess',
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
    
    componentDidUpdate(){
        const { tasksList, title} = this.state;
        console.log('array', tasksList);
        return(
            <div className="TableTask">
                <h1 className="TitleNewTask">{title}</h1>
                <div>{tasksList.map((json, index) =>(
                    <div className="DisplayNewTask" key={index}>
                        <h1 className="ContentNewTask">{json.data}</h1>
                        <input className="Checkbox" type="checkbox"/>
                    </div>
                                              )                         
                                    )
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