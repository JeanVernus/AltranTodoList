export default function (store = {}, action ){
    switch (action.type) {
      case 'TODOLIST': {
        const {
          idTodo1,
          idTodo2,
          idTodo3,
          idTodo4,
          idTodo5,
          idTodo6,
          idTodo7,
          idTodo8,
          idTodo9,
          idTodo10,
          idTodo11,
          idTodo12,
        } = action;
        return {
          ...store,
          idTodo1,
          idTodo2,
          idTodo3,
          idTodo4,
          idTodo5,
          idTodo6,
          idTodo7,
          idTodo8,
          idTodo9,
          idTodo10,
          idTodo11,
          idTodo12,
        }
      }
      default:
        return store;
    }
  } 