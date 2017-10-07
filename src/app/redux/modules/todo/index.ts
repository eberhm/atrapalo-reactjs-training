/** Initial State */
import {EStates} from '../../../models/Todo/Task';
import {ITodoStore} from '../../IStore';
import {combineReducers} from 'redux';

const initialState: ITodoStore = {
  tasks: [
      {
          id: 1,
          name: 'my name 1',
          description: 'my desc 1',
          state: EStates.DONE,
      },
      {
          id: 2,
          name: 'my name 2',
          description: 'my desc 2',
          state: EStates.PENDING,
      },
      {
          id: 3,
          name: 'my name 3',
          description: 'my desc 3',
          state: EStates.PENDING,
      },
      {
          id: 4,
          name: 'my name 4',
          description: 'my desc 4',
          state: EStates.DONE,
      },
      {
          id: 5,
          name: 'my name 5',
          description: 'my desc 5',
          state: EStates.PENDING,
      },
  ],
};

/** Reducer */
function tasksReducer(state = initialState.tasks, action) {
  switch (action.type) {
      case 'UPDATE_ROW_NAME':
          return state.map((task) => {
              if (action.data.id === task.id) {
                  return {...task, name: action.data.name};
              } else {
                  return task;
              }
          });
    default:
        if (!state[0].id) {
            console.log(action.type);
        }

      return state;
  }
}

export const todosReducer = combineReducers({
    tasks: tasksReducer,
});
