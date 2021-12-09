import React, { Component } from "react";
import Axios from "axios";
import {Form, Button, Input, Table} from 'semantic-ui-react';
import { connect } from 'react-redux';
import '../../Css/TDL.scss';
import Noty from 'noty';


    class TDL12 extends Component {
        constructor(props) {
            super(props);
            this.state = { 
                checked: false,
                title:"",
                element1: "",
                element2: "",
                element3: "",
                element4: "",
                element5: "",
                element6: "",
                element7: "",
                element8: "",
                element9: "",
                element10: "",
                res:[],
                todolist:[],
                completed:[]
            }
        this.renderDisplayTodo1 = this.renderDisplayTodo1.bind(this);
        this.renderCompletedArray = this.renderCompletedArray.bind(this);;
        this.handleChange = this.handleChange.bind(this);
        this.updateTodo = this.updateTodo.bind(this);

    }

    miseEnAttente(){
        setTimeout(this.refreshPage, 1500);
    }

    refreshPage(){
        window.location.reload()
    }

    handleChange(event, key){
        const {todolist} = this.state;
        this.setState(({[event.target.name]: event.target.value}))
        if(key === "title"){this.setState({ title: event.target.value })}
        if(key === "element1"){this.setState({ element1: event.target.value })}
        if(key === "element2"){this.setState({ element2: event.target.value })}
        if(key === "element3"){this.setState({ element3: event.target.value })}
        if(key === "element4"){this.setState({ element4: event.target.value })}
        if(key === "element5"){this.setState({ element5: event.target.value })}
        if(key === "element6"){this.setState({ element6: event.target.value })}
        if(key === "element7"){this.setState({ element7: event.target.value })}
        if(key === "element8"){this.setState({ element8: event.target.value })}
        if(key === "element9"){this.setState({ element9: event.target.value })}
        if(key === "element10"){this.setState({ element10: event.target.value })}
        this.setState({todolist})
    }  
    
    updateTodo(){
        const { title, element1, element2, element3, element4, element5, element6, element7, element8, element9, element10, todolist} =this.state;
        console.log('testTodolistAfterPush', this.state.todolist);
        Axios.post('http://localhost:7770/updateTodo', {
           todolist, title, element1, element2,element3, element4, element5, element6, element7, element8, element9, element10
        })
        .then(res => {
            console.log('res.dataUPDATE', res.data);
            this.miseEnAttente()
            if(res.data.string === "noUpdate"){
                new Noty({
                    text: `Create before a Todo`,
                    type: 'warning',
                    theme: 'sunset',
                    timeout: 3000,  
                  }).show();
            }
            if(res.data.string === "updateOk"){
                new Noty({
                    text: `Todo is update !`,
                    type: 'success',
                    theme: 'sunset',
                    timeout: 3000,  
                  }).show();
            }
           
       })
    }

    componentDidMount(){
        const {todolist} = this.state;
        const idTodo12 = this.props; 
        console.log("todolist before", todolist);
        Axios.post('http://www.localhost:7770/displayTodo12', {
            idTodo12
        }).then(res =>{
            console.log('res.dataTDL', res.data);
            this.setState({res : res.data})
            todolist.push(res.data);
            this.setState({todolist});

            if(res.data.string === "no Todo"){
                this.AlertEmpty()
            }
            else{
                this.Alert()
            }
        })
       
    }

    AlertEmpty(){
        new Noty({
            text: "no Todo to display",
            type: 'warning',
            theme: 'sunset',
            timeout: 3000,
          }).show();
    }

    Alert(){
            new Noty({
                text: "Todo list OPEN <br /> DOWN THE WINDOW",
                type: 'success',
                theme: 'sunset',
                timeout: 3000,
              }).show();
    }

    addE1InArray(){
        const {completed} = this.state;
        const element1 = this.state.todolist[0].element1;
        if(document.getElementById('case1').checked === true){
            completed.push(element1)
        }
        this.setState({completed})
    }

    addE2InArray(){
        const {completed} = this.state;
        const element2 = this.state.todolist[0].element2;
        if(document.getElementById('case2').checked === true){
            completed.push(element2)
        }
        this.setState({completed})
    }

    addE3InArray(){
        const {completed} = this.state;
        const element3 = this.state.todolist[0].element3;
        if(document.getElementById('case3').checked === true){
            completed.push(element3)
        }
        this.setState({completed})
    }

    addE4InArray(){
        const {completed} = this.state;
        const element4 = this.state.todolist[0].element4;
        if(document.getElementById('case4').checked === true){
            completed.push(element4)
        }
        this.setState({completed})
    }

    addE5InArray(){
        const {completed} = this.state;
        const element5 = this.state.todolist[0].element5;
        if(document.getElementById('case5').checked === true){
            completed.push(element5)
        }
        this.setState({completed})
    }

    addE6InArray(){
        const {completed} = this.state;
        const element6 = this.state.todolist[0].element6;
        if(document.getElementById('case6').checked === true){
            completed.push(element6)
        }
        this.setState({completed})
    }

    addE7InArray(){
        const {completed} = this.state;
        const element7 = this.state.todolist[0].element7;
        if(document.getElementById('case7').checked === true){
            completed.push(element7)
        }
        this.setState({completed})
    }

    addE8InArray(){
        const {completed} = this.state;
        const element8 = this.state.todolist[0].element8;
        if(document.getElementById('case8').checked === true){
            completed.push(element8)
        }
        this.setState({completed})
    }
    addE9InArray(){
        const {completed} = this.state;
        const element9 = this.state.todolist[0].element9;
        if(document.getElementById('case9').checked === true){
            completed.push(element9)
        }
        this.setState({completed})
    }

    addE10InArray(){
        const {completed} = this.state;
        const element10 = this.state.todolist[0].element10;
        if(document.getElementById('case10').checked === true){
            completed.push(element10)
        }
        this.setState({completed})
    }



    renderCompletedArray(){
        console.log('completed.map', this.state.completed)
        const { completed } = this.state;
        return(
            <div>
                <div><h1>Completed</h1></div>
                {completed.map((json, index) => (
                    <div key={index}>
                       <h2 className="taskCompleted" >{json}</h2>

                    </div>
                ))} 
            </div>
        )
    }


    renderDisplayTodo1(){
        const {todolist} = this.state;
        console.log('todolistTDL', this.state.todolist);
        return ( 
            <div>
                <Form onSubmit={this.updateTodo}>
                    {todolist.map((json, index) => (
                        <div className="displayTableToDo" key={index}>
                            <Table className="Table">
                                <Table.Body  className="displaybody">
                                    <Table.Row  >
                                    <div className="displayTitle"><Table.Cell><Input type='text' placeholder={json.title} name="title" className="displaytodoTitle" onChange={event => this.handleChange(event, "title")} /></Table.Cell></div>
                                    </Table.Row>
                                    <Table.Row >
                                    <Table.Cell ><div><input type='checkbox' id="case1" className="DisplayCheckbox1" onClick={() => this.addE1InArray()} /><label for="case1" className="displaytodo1"  >{json.element1} </label></div></Table.Cell><Table.Cell><Input for="case1" type='text' placeholder="Change task here" name="element1" className="displaytodo" id="Case1" onChange={event => this.handleChange(event, "element1")} /></Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                    <Table.Cell><div><input type='checkbox' id="case2" className="DisplayCheckbox2" onClick={() => this.addE2InArray()} /><label for="case2" className="displaytodo2" >{json.element2} </label></div></Table.Cell><Table.Cell><Input for="case2" type='text' placeholder="Change task here" name="element2" className="displaytodo" id="case2" onChange={event => this.handleChange(event, "element2")} /></Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                    <Table.Cell><div><input type='checkbox' id="case3" className="DisplayCheckbox3" onClick={() => this.addE3InArray()} /><label for="case3" className="displaytodo3" >{json.element3} </label></div></Table.Cell><Table.Cell><Input for="case3" type='text' placeholder="Change task here" name="element3" className="displaytodo" id="case3" onChange={event => this.handleChange(event, "element3")} /></Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                    <Table.Cell><div><input type='checkbox' id="case4" className="DisplayCheckbox4" onClick={() => this.addE4InArray()} /><label for="case4" className="displaytodo4" >{json.element4} </label></div></Table.Cell><Table.Cell><Input for="case4" type='text' placeholder="Change task here" name="element4" className="displaytodo" id="case4" onChange={event => this.handleChange(event, "element4")} /></Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                    <Table.Cell><div><input type='checkbox' id="case5" className="DisplayCheckbox5" onClick={() => this.addE5InArray()} /><label for="case5" className="displaytodo5" >{json.element5} </label></div></Table.Cell><Table.Cell><Input for="case5" type='text' placeholder="Change task here" name="element5" className="displaytodo" id="case5" onChange={event => this.handleChange(event, "element5")} /></Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                    <Table.Cell><div><input type='checkbox' id="case6" className="DisplayCheckbox6" onClick={() => this.addE6InArray()} /><label for="case6" className="displaytodo6" >{json.element6} </label></div></Table.Cell><Table.Cell><Input for="case6" type='text' placeholder="Change task here" name="element6" className="displaytodo" id="case6" onChange={event => this.handleChange(event, "element6")} /></Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                    <Table.Cell><div><input type='checkbox' id="case7" className="DisplayCheckbox7" onClick={() => this.addE7InArray()} /><label for="case7" className="displaytodo7" >{json.element7} </label></div></Table.Cell><Table.Cell><Input for="case7" type='text' placeholder="Change task here" name="element7" className="displaytodo" id="case7" onChange={event => this.handleChange(event, "element7")} /></Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                    <Table.Cell><div><input type='checkbox' id="case8" className="DisplayCheckbox8" onClick={() => this.addE8InArray()} /><label for="case8" className="displaytodo8" >{json.element8} </label></div></Table.Cell><Table.Cell><Input for="case8" type='text' placeholder="Change task here" name="element8" className="displaytodo" id="case8" onChange={event => this.handleChange(event, "element8")} /></Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                    <Table.Cell><div><input type='checkbox' id="case9" className="DisplayCheckbox9" onClick={() => this.addE9InArray()} /><label for="case9" className="displaytodo9" >{json.element9} </label></div></Table.Cell><Table.Cell><Input for="case9" type='text' placeholder="Change task here" name="element9" className="displaytodo" id="case9" onChange={event => this.handleChange(event, "element9")} /></Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                    <Table.Cell><div><input type='checkbox' id="case10" className="DisplayCheckbox10" onClick={() => this.addE10InArray()} /><label for="case10" className="displaytodo10" >{json.element10} </label></div></Table.Cell><Table.Cell><Input for="case10" type='text' placeholder="Change task here" name="element10" className="displaytodo" id="case10" onChange={event => this.handleChange(event, "element10")} /></Table.Cell>
                                    </Table.Row>
                                    {this.renderCompletedArray()}       
                                </Table.Body>  
                            </Table>
                        </div>
                    ))
                }  
                <div className="displayUpdateButton"><Button className="ButtonSubmit" type="submit"><h4 className="Sauvegarder">SAVE</h4></Button></div>
                </Form>
            </div>
            
        )}



    render() {
        return ( 
            <div>
               {this.renderDisplayTodo1()}
            </div>
         );
    }
}

const mapStateToProps = (store) => ({
    idTodo1: store.auth.idTodo1,
    idTodo2: store.auth.idTodo2,
    idTodo3: store.auth.idTodo3,
    idTodo4: store.auth.idTodo4,
    idTodo5: store.auth.idTodo5,
    idTodo6: store.auth.idTodo6,
    idTodo7: store.auth.idTodo7,
    idTodo8: store.auth.idTodo8,
    idTodo9: store.auth.idTodo9,
    idTodo10: store.auth.idTodo10,
    idTodo11: store.auth.idTodo11, 
    idTodo12 : store.auth.idTodo12,
  })
 
export default connect(mapStateToProps) (TDL12);
