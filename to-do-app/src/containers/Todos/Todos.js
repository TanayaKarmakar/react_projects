import React, {Component} from 'react';
import Todo from './Todo/Todo';
import TextBox from '../../components/TextBox/TextBox';
import './Todos.css';

class Todos extends Component {
   state = {
       todos: [
           {
               name: 'Eat Breakfast',
               status: 'Active'
           },
           {
               name: 'Solve Problems',
               status: 'Active'
           },
           {
               name: 'Buy Milk',
               status: 'Active'
           }
       ]
   }

   deleteTodoItemHandler = (indx) => {
      let newTodos = [...this.state.todos];
      newTodos.splice(indx, 1);
      this.setState({
        todos: newTodos
      });
   };
   
   addTodoItemHandler = (todoItemName) => {
      console.log(todoItemName);
      let todoItem = {
        name: todoItemName,
        status: 'Active'
      };

      let currentTodos = [...this.state.todos];
      currentTodos.push(todoItem);

      this.setState({
        todos: currentTodos
      });
   };

   completeTodoItemHandler = (indx) => {

   };

   render = () => {
      const todoList = this.state.todos.map( (el, indx) => 
        <Todo 
        name = {el.name}
        status = {el.status}
        clicked = {() => this.deleteTodoItemHandler(indx)}
        />
      );
      return (
          <div>
            <div className = "AddItemContainer">
                <TextBox clicked = {this.addTodoItemHandler}></TextBox>
            </div>
            <div className = "TodosContainer">
            {todoList}
            </div>
          </div>  
      )
   }
}

export default Todos;