import React, {Component} from "react";
import '../Css/NewTask.css';
import Axios from 'axios';

class NewTask extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            reset:"",
            content: "",
            res : "",
            tasksList: []
         }
        this.addTask = this.addTask.bind(this);
        this.inputTask = this.inputTask.bind(this);
    }

    inputTask(event, key){
        this.setState({[event.target.name] : event.target.value});
        if(key === "task"){this.setState({content: event.target.value})};
        console.log("content", this.state.content);
    }

    addTask(event){
        event.preventDefault()
        const {content} = this.state;
        Axios.post('http://localhost:7770/postTask',{
            content
        })
        .then(res =>{
            const {tasksList} = this.state;
            console.log(res.data);
            this.setState({res : res.data});
            tasksList.push(res);
            this.setState({tasksList});
        })
    }
    
    componentWillUpdate(){
        const { tasksList} = this.state;
        console.log('array', tasksList);
        return(
            <div>{tasksList.map((json, index) =>(
                <div className="DisplayNewTask" key={index}>
                    <h1 className="ContentNewTask">{json.data}</h1>
                    <input className="Checkbox" type="checkbox" />
                </div>
                                                 )                         
                                )
                }      
            </div>
        )
    }


    render() { 
        return (
            <div>
                <h2 className="SubTitleNewTask">Add task</h2>
                <form onSubmit={this.addTask}>
                    <div className="DisplayAddTask">
                        <input type="text" name="task" onChange={event => this.inputTask(event, "task")} />
                    </div>
                    <div className="DisplayAddButton"><button type="submit" >Add task</button></div>
                </form>
    
                <h2 className="TitleNewTask">Tasks list</h2>
                <div>{this.componentWillUpdate()}</div>
            </div>
         );
    }
}
 
export default NewTask;