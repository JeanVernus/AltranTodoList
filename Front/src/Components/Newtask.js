import React, {Component} from "react";
import '../Css/NewTask.css';
import Axios from 'axios';

class NewTask extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: 1,
            title:"",
            content: "",
            res : "",
            tasksList: []
         }
        this.addTask = this.addTask.bind(this);
        this.inputTask = this.inputTask.bind(this);
        this.saveTask = this.saveTask.bind(this);
    }

    inputTask(event, key){
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
                // alert("Todo send!")
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
                <form onSubmit={this.addTask}>
                    <div className="DisplayAddTask">
                        <input className="TextInput"type="text" name="title" id="title" placeholder="title" onChange={event => this.inputTask(event, "title")} />
                        <input className="TextInput"type="text" name="task" id="task" placeholder="task" onChange={event => this.inputTask(event, "task")} />
                    </div>
                    <div className="DisplayAddButton"><button className="AddButton" type="submit">Add task</button></div>
                    <div className="DisplayAddButton"><button className="SaveButton" onClick={this.saveTask}>Save todo</button></div>
                </form>
    
                <h2 className="TitleNewTask">Tasks list</h2>
                <div>{this.componentDidUpdate()}</div>
            </div>
         );
    }
}
 
export default NewTask;