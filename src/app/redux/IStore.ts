import { ICounter } from 'models/counter';
import { IStars } from 'models/stars';
import {ITask} from '../models/Todo/Task';

export interface ITodoStore {
    tasks: ITask[];
};

export interface IStore {
  counter: ICounter;
  stars: IStars;
  todos: ITodoStore;
};
