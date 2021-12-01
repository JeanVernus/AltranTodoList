import React, { Component } from "react";
import Axios from "axios";
import '../../Css/TDL.css';

class TDL2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            res:"",
            todolist:[]
         }
    }

componentDidMount(){
    const {todolist} = this.state;
    Axios.post('http://www.localhost:7770/displayTodo2', {
    }).then(res =>{
        console.log('res.data', res.data);
        this.setState({res : res.data})
        todolist.push(res);
        this.setState({todolist});

    })
}




    render() { 
        const {todolist} = this.state;
        return ( 
            <div>
                <form onSubmit=''>
                    <button className="" onClick="" /><button className="" onClick="" /><input type='text' placholder={todolist.title} name="title" className="displaytodo1" onChange={event => this.handleChange(event, "title")} /><input type='ch.eckbox' placholder="" name="" className="" onChange="" />
                    <button className="" onClick="" /><button className="" onClick="" /><input type='text' placholder={todolist.element1} name="element1" className="displaytodo1" onChange={event => this.handleChange(event, "element")} /><input type='checkbox' placholder="" name="" className="" onChange="" />
                    <button className="" onClick="" /><button className="" onClick="" /><input type='text' placholder={todolist.element2} name="element2" className="displaytodo1" onChange={event => this.handleChange(event, "element")} /><input type='checkbox' placholder="" name="" className="" onChange="" />
                    <button className="" onClick="" /><button className="" onClick="" /><input type='text' placholder={todolist.element3} name="element3" className="displaytodo1" onChange={event => this.handleChange(event, "element")} /><input type='checkbox' placholder="" name="" className="" onChange="" />
                    <button className="" onClick="" /><button className="" onClick="" /><input type='text' placholder={todolist.element4} name="element4" className="displaytodo1" onChange={event => this.handleChange(event, "element")} /><input type='checkbox' placholder="" name="" className="" onChange="" />
                    <button className="" onClick="" /><button className="" onClick="" /><input type='text' placholder={todolist.element5} name="element5" className="displaytodo1" onChange={event => this.handleChange(event, "element")} /><input type='checkbox' placholder="" name="" className="" onChange="" />
                    <button className="" onClick="" /><button className="" onClick="" /><input type='text' placholder={todolist.element6} name="element6" className="displaytodo1" onChange={event => this.handleChange(event, "element")} /><input type='checkbox' placholder="" name="" className="" onChange="" />
                    <button className="" onClick="" /><button className="" onClick="" /><input type='text' placholder={todolist.element7} name="element7" className="displaytodo1" onChange={event => this.handleChange(event, "element")} /><input type='checkbox' placholder="" name="" className="" onChange="" />
                    <button className="" onClick="" /><button className="" onClick="" /><input type='text' placholder={todolist.element8} name="element8" className="displaytodo1" onChange={event => this.handleChange(event, "element")} /><input type='checkbox' placholder="" name="" className="" onChange="" />
                    <button className="" onClick="" /><button className="" onClick="" /><input type='text' placholder={todolist.element9} name="element9" className="displaytodo1" onChange={event => this.handleChange(event, 'element')} /><input type='checkbox' placholder="" name="" className="" onChange="" />
                    <button className="" onClick="" /><button className="" onClick="" /><input type='text' placholder={todolist.element10} name="element10" className="displaytodo1" onChange={event => this.handleChange(event, 'element')} /><input type='checkbox' placholder="" name="" className="" onChange="" />
                    <button type="submit"/>
                </form>

            </div>
         );
    }
}
 
export default TDL2;