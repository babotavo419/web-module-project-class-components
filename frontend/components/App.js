import React from 'react'
import Todo from './Todo'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }
  render() {
    const { todos } = this.state;

    return (
      <div>
      <h1>Todos</h1>


      <ul>
        {
          todos.map(todo=> {
            return (<Todo todo={todo}/>)
          })
        }
      </ul>

      <form>
        <input/>
        <button>Add</button>
      </form>

      <button>Clear</button>
      </div>
    );
  }
}

export default App