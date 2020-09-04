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
      let currentTodos = [...this.state.todos];
      let currentTodo = currentTodos[indx];
      currentTodo.status = 'Completed';
      this.setState({
         todos: currentTodos
      });
   };

   render = () => {
      const todoList = this.state.todos.map( (el, indx) => 
        <Todo
          isCompleted = {el.status !== 'Active'} 
          name = {el.name}
          status = {el.status}
          clicked = {() => this.deleteTodoItemHandler(indx)}
          completed = {() => this.completeTodoItemHandler(indx)}
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