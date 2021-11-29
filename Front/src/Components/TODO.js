import React, {Component} from "react";
import Axios from 'axios';

class TODO extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            res: ""
        }
    }

componentDidMount(){

Axios.post('http://www.loclahost:7770/addTodos',{
    
}).then((res)=>{
    this.setState({res : res.data})
    console.log("res.data", res.data);
})
}




    render() {   
        const { res } = this.state;
        return ( 
            <div>
                <h2 className="SubTitleNewTask">Choose a todo</h2>
                <div>
                    <div><h1 href='' className="DisplayTodolist">{res.data[0].title}</h1></div>
                    <div><h1 href='' className="DisplayTodolist">{res.data[1].title}</h1></div>
                    <div><h1 href='' className="DisplayTodolist">{res.data[2].title}</h1></div>
                    <div><h1 href='' className="DisplayTodolist">{res.data[3].title}</h1></div>
                </div>
            </div>
         );
    }
}
 
export default TODO;