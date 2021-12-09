import React, {Component} from "react";
import {
    BrowserRouter,
    Switch,
    NavLink,
    Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from "../Assets/TitlePenLeft.png";
import {Card, Image, Form, Button} from 'semantic-ui-react';
import Axios from 'axios';
import Noty from 'noty';
import TDL1 from './TodoList/TDL1';
import TDL2 from './TodoList/TDL2';
import TDL3 from './TodoList/TDL3';
import TDL4 from './TodoList/TDL4';
import TDL5 from './TodoList/TDL5';
import TDL6 from './TodoList/TDL6';
import TDL7 from './TodoList/TDL7';
import TDL8 from './TodoList/TDL8';
import TDL9 from './TodoList/TDL9';
import TDL10 from './TodoList/TDL10';
import TDL11 from './TodoList/TDL11';
import TDL12 from './TodoList/TDL12';
import '../Css/TODO.scss';

class TODO extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            id : "",
            res: [],
            todos: []
        }
        this.renderDisplayTodos = this.renderDisplayTodos.bind(this);
        this.deleteTodo=this.deleteTodo.bind(this);

    }

miseEnAttente(){
    setTimeout(this.refreshPage, 1500);
}
refreshPage(){
    window.location.reload()
}


componentDidMount(){
const { dispatch } = this.props;
Axios.post('http://www.localhost:7770/displayTodos',{ 
}).then((res)=>{
    const {todos} = this.state;
    this.setState({res : res.data})
    console.log("res.datadispplaytodos", res.data);
    todos.push(res.data);
    this.setState({todos})
    dispatch({
        type: 'TODOLIST',
        idTodo1 : res.data.idOne,
        idTodo2 : res.data.idTwo,
        idTodo3 : res.data.idThree,
        idTodo4 : res.data.idFour,
        idTodo5 : res.data.idFive,
        idTodo6 : res.data.idSix,
        idTodo7 : res.data.idSeven,
        idTodo8 : res.data.idEight,
        idTodo9 : res.data.idNine,
        idTodo10 : res.data.idTen,
        idTodo11 : res.data.idEleven,
        idTodo12 : res.data.idTwelve,
      });

    if(res.data.string === "you haven't save a to do"){
        new Noty({
            text: "you haven't save a to do",
            type: 'warning',
            theme: 'sunset',
            timeout: 3000,
          }).show();
    }
    if(res.data.string === "Todo list limit reached!"||res.data.string === "Todo list limit is over!" ){
        new Noty({
            text: "Todo list limit reached!",
            type: 'warning',
            theme: 'sunset',
            timeout: 3000,
          }).show();
    }
})
}

deleteTodo(id){
    const {todos} = this.state;
    Axios.post('http://www.localhost:7770/DeleteTodo', {
        id
    })
    .then((res) => {
        console.log(res.data);
        this.miseEnAttente()
        if(res.data.string === "delete Success!" )
        new Noty({
            text: "Delete success!",
            type: 'success',
            theme: 'sunset',
            timeout: 3000,
          }).show();
          
    }   
)}



renderDisplayTodos(){
    const { todos } = this.state;
    console.log('todos',this.state.todos);
    return(
        
        <div className="displayTodoList">
                <div>{todos.map((json) =>(
                    <div className="DisplayCards">
                        <BrowserRouter>
                            <div className="DisplayCards" >
                               <div classname="displayButtonDelete"> 
                                    <NavLink to="/TDL1" className="Link" activeClassName="current"><Card  className="Card" id={json.idOne}>
                                    <Card.Content>
                                            <Card.Header>
                                                <Image
                                                    className="Logo"
                                                    floated='right'
                                                    size='mini'
                                                    src={Logo}
                                                />
                                                <div>

                                                </div>
                                            <h1 className="TitleNewTodo">{json.titleOne}</h1>
                                            </Card.Header>
                                            <Card.Description>
                                                <h2 className="SubTitleNewTodo">{json.element1One}</h2>
                                                <h2 className="SubTitleNewTodo">{json.element2One}</h2>
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                    </NavLink >
                                    <Form onSubmit={() => this.deleteTodo(json.idOne)}><Button type="submit" value="Delete" className="deleteButtonTL">DELETE</Button></Form>
                                </div>
                                <div>
                                <NavLink to="/TDL2" className="Link" activeClassName="current"><Card  className="Card" id={json.idTwo}>
                                    <Card.Content>
                                        <Card.Header>
                                            <Image
                                                className="Logo"
                                                floated='right'
                                                size='mini'
                                                src={Logo}
                                            />
                                            <div>
                                            </div>
                                            <h1 className="TitleNewTodo">{json.titleTwo}</h1>
                                        </Card.Header>
                                        <Card.Description>
                                            <h2 className="SubTitleNewTodo">{json.element1Two}</h2>
                                            <h2 className="SubTitleNewTodo">{json.element2Two}</h2>
                                        </Card.Description>
                                    </Card.Content>
                                </Card></NavLink>
                                <Form onSubmit={() => this.deleteTodo(json.idTwo)}><Button type="submit" value="Delete" className="deleteButtonTL">DELETE</Button></Form>
                                </div>
                            </div>
                            <div className="DisplayCards" >
                            <div>
                            <NavLink to="/TDL3" className="Link" activeClassName="current"><Card  className="Card" id={json.idThree}>
                                    <Card.Content>
                                        <Card.Header>
                                            <Image
                                                className="Logo"
                                                floated='right'
                                                size='mini'
                                                src={Logo}
                                            />
                                            <div>
                                            </div>
                                            <h1 className="TitleNewTodo">{json.titleThree}</h1> 
                                        </Card.Header>
                                        <Card.Description>
                                            <h2 className="SubTitleNewTodo">{json.element1Three}</h2>
                                            <h2 className="SubTitleNewTodo">{json.element2Three}</h2>
                                        </Card.Description>
                                    </Card.Content>
                                </Card></NavLink><Form onSubmit={() => this.deleteTodo(json.idThree)}><Button type="submit" value="Delete" className="deleteButtonTL">DELETE</Button></Form>
                                </div>
                                <div>
                                <NavLink to="/TDL4" className="Link" activeClassName="current"><Card  className="Card" id={json.idFour}>
                                    <Card.Content>
                                        <Card.Header>
                                            <Image
                                                className="Logo"
                                                floated='right'
                                                size='mini'
                                                src={Logo}
                                            />
                                            <div>
                                            </div>
                                            <h1 className="TitleNewTodo">{json.titleFour}</h1>
                                        </Card.Header>
                                        <Card.Description>
                                            <h2 className="SubTitleNewTodo">{json.element1Four}</h2>
                                            <h2 className="SubTitleNewTodo">{json.element2Four}</h2>
                                        </Card.Description>
                                    </Card.Content>
                                </Card></NavLink><Form onSubmit={() => this.deleteTodo(json.idFour)}><Button type="submit" value="Delete" className="deleteButtonTL">DELETE</Button></Form>
                                </div>
                            </div>
                            <div className="DisplayCards" >
                            <div>
                            <NavLink to="/TDL5" className="Link" activeClassName="current"><Card  className="Card" id={json.idFive}>
                                    <Card.Content>
                                        <Card.Header>
                                            <Image
                                                className="Logo"
                                                floated='right'
                                                size='mini'
                                                src={Logo}
                                            />
                                            <div>
                                            </div>
                                            <h1 className="TitleNewTodo">{json.titleFive}</h1> 
                                        </Card.Header>
                                        <Card.Description>
                                            <h2 className="SubTitleNewTodo">{json.element1Five}</h2>
                                            <h2 className="SubTitleNewTodo">{json.element2Five}</h2>
                                        </Card.Description>
                                    </Card.Content>
                                </Card></NavLink><Form onSubmit={() => this.deleteTodo(json.idFive)}><Button type="submit" value="Delete" className="deleteButtonTL">DELETE</Button></Form>
                                </div>
                                <div>
                                <NavLink to="/TDL6" className="Link" activeClassName="current"><Card  className="Card" id={json.idSix}>
                                    <Card.Content>
                                        <Card.Header>
                                            <Image
                                                className="Logo"
                                                floated='right'
                                                size='mini'
                                                src={Logo}
                                            />
                                            <div>
                                            </div>
                                            <h1 className="TitleNewTodo">{json.titleSix}</h1>
                                        </Card.Header>
                                        <Card.Description>
                                            <h2 className="SubTitleNewTodo">{json.element1Six}</h2>
                                            <h2 className="SubTitleNewTodo">{json.element2Six}</h2>
                                        </Card.Description>
                                    </Card.Content>
                                </Card></NavLink><Form onSubmit={() => this.deleteTodo(json.idSix)}><Button type="submit" value="Delete" className="deleteButtonTL">DELETE</Button></Form>
                                </div>
                            </div>
                            <div className="DisplayCards" >
                            <div>
                            <NavLink to="/TDL7" className="Link" activeClassName="current"><Card  className="Card" id={json.idSeven}>
                                    <Card.Content>
                                        <Card.Header>
                                            <Image
                                                className="Logo"
                                                floated='right'
                                                size='mini'
                                                src={Logo}
                                            />
                                            <div>
                                            </div>
                                            <h1 className="TitleNewTodo">{json.titleSeven}</h1> 
                                        </Card.Header>
                                        <Card.Description>
                                            <h2 className="SubTitleNewTodo">{json.element1Seven}</h2>
                                            <h2 className="SubTitleNewTodo">{json.element2Seven}</h2>
                                        </Card.Description>
                                    </Card.Content>
                                </Card></NavLink><Form onSubmit={() => this.deleteTodo(json.idSeven)}><Button type="submit" value="Delete" className="deleteButtonTL">DELETE</Button></Form>
                                </div>
                                <div>
                                <NavLink to="/TDL8" className="Link" activeClassName="current"><Card  className="Card" id={json.idEight}>
                                    <Card.Content>
                                        <Card.Header>
                                            <Image
                                                className="Logo"
                                                floated='right'
                                                size='mini'
                                                src={Logo}
                                            />
                                            <div>
                                            </div>
                                            <h1 className="TitleNewTodo">{json.titleEight}</h1>
                                        </Card.Header>
                                        <Card.Description>
                                            <h2 className="SubTitleNewTodo">{json.element1Eight}</h2>
                                            <h2 className="SubTitleNewTodo">{json.element2Eight}</h2>
                                        </Card.Description>
                                    </Card.Content>
                                </Card></NavLink><Form onSubmit={() => this.deleteTodo(json.idEight)}><Button type="submit" value="Delete" className="deleteButtonTL">DELETE</Button></Form>
                                </div>
                            </div>
                            <div className="DisplayCards" >
                            <div>
                            <NavLink to="/TDL9" className="Link" activeClassName="current"><Card  className="Card" id={json.idNine}>
                                    <Card.Content>
                                        <Card.Header>
                                            <Image
                                                className="Logo"
                                                floated='right'
                                                size='mini'
                                                src={Logo}
                                            />
                                            <div>
                                            </div>
                                            <h1 className="TitleNewTodo">{json.titleNine}</h1> 
                                        </Card.Header>
                                        <Card.Description>
                                            <h2 className="SubTitleNewTodo">{json.element1Nine}</h2>
                                            <h2 className="SubTitleNewTodo">{json.element2Nine}</h2>
                                        </Card.Description>
                                    </Card.Content>
                                </Card></NavLink><Form onSubmit={() => this.deleteTodo(json.idNine)}><Button type="submit" value="Delete" className="deleteButtonTL">DELETE</Button></Form>
                                </div>
                                <div>
                                <NavLink to="/TDL10" className="Link" activeClassName="current"><Card  className="Card" id={json.idTen}>
                                <Card.Content>
                                        <Card.Header>
                                            <Image
                                                className="Logo"
                                                floated='right'
                                                size='mini'
                                                src={Logo}
                                            />
                                            <div>
                                            </div>
                                            <h1 className="TitleNewTodo">{json.titleTen}</h1> 
                                        </Card.Header>
                                        <Card.Description>
                                            <h2 className="SubTitleNewTodo">{json.element1Ten}</h2>
                                            <h2 className="SubTitleNewTodo">{json.element2Ten}</h2>
                                        </Card.Description>
                                    </Card.Content>
                                </Card></NavLink><Form onSubmit={() => this.deleteTodo(json.idTen)}><Button type="submit" value="Delete" className="deleteButtonTL">DELETE</Button></Form>
                                </div>
                            </div>
                            <div className="DisplayCards" >
                             <div>   
                            <NavLink to="/TDL11" className="Link" activeClassName="current"><Card  className="Card" id={json.idEleven}>
                                    <Card.Content>
                                        <Card.Header>
                                            <Image
                                                className="Logo"
                                                floated='right'
                                                size='mini'
                                                src={Logo}
                                            />
                                            <div>
                                            </div>
                                            <h1 className="TitleNewTodo">{json.titleEleven}</h1> 
                                        </Card.Header>
                                        <Card.Description>
                                            <h2 className="SubTitleNewTodo">{json.element1Eleven}</h2>
                                            <h2 className="SubTitleNewTodo">{json.element2Eleven}</h2>
                                        </Card.Description>
                                    </Card.Content>
                                </Card></NavLink><Form onSubmit={() => this.deleteTodo(json.idEleven)}><Button type="submit" value="Delete" className="deleteButtonTL">DELETE</Button></Form>
                                </div>
                                <div>
                                <NavLink to="/TDL12" className="Link" activeClassName="current"><Card  className="Card" id={json.idTwelve}>
                                <Card.Content>
                                        <Card.Header>
                                            <Image
                                                className="Logo"
                                                floated='right'
                                                size='mini'
                                                src={Logo}
                                            />
                                            <div>
                                            </div>
                                            <h1 className="TitleNewTodo">{json.titleTwelve}</h1> 
                                        </Card.Header>
                                        <Card.Description>
                                            <h2 className="SubTitleNewTodo">{json.element1Twelve}</h2>
                                            <h2 className="SubTitleNewTodo">{json.element2Twelve}</h2>
                                        </Card.Description>
                                    </Card.Content>
                                </Card></NavLink><Form onSubmit={() => this.deleteTodo(json.idTwelve)}><Button type="submit" value="Delete" className="deleteButtonTL">DELETE</Button></Form>
                                </div>
                            </div>
                        <Switch>
                            <Route exact path="/TDL1" component={TDL1}></Route>
                            <Route path="/TDL2" component={TDL2}></Route>
                            <Route path="/TDL3" component={TDL3}></Route>
                            <Route path="/TDL4" component={TDL4}></Route>
                            <Route path="/TDL5" component={TDL5}></Route>
                            <Route path="/TDL6" component={TDL6}></Route>
                            <Route path="/TDL7" component={TDL7}></Route>
                            <Route path="/TDL8" component={TDL8}></Route>
                            <Route path="/TDL9" component={TDL9}></Route>
                            <Route path="/TDL10" component={TDL10}></Route>
                            <Route path="/TDL11" component={TDL11}></Route>
                            <Route path="/TDL12" component={TDL12}></Route>
                        </Switch>        
                        </BrowserRouter> 
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
                    <div className="DisplaySubTitle"><h2 className="SubTitleNewTodo1">Choose a todo</h2></div>
                    <div>
                        <div>
                            {this.renderDisplayTodos()}
                        </div>
                    </div>
                </div>
         );
    }
}
 
export default connect() (TODO);