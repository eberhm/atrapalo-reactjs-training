import * as React from 'react';
import {List} from '../../components/Todo/List/index';
import {Actions} from '../../components/Todo/Actions/index';
import {IStore} from '../../redux/IStore';
import {ITask} from '../../models/Todo/Task';
const { connect } = require('react-redux');

interface IProps {
    tasks: ITask[];
}

class TodoContainer extends React.Component<IProps, {}> {
  public render() {
    return (
        <div>
            <List tasks={this.props.tasks} />
            <Actions />
        </div>
    );
  }
}

const mapStateToProps = (state: IStore): IProps => {
    return { tasks: state.todos.tasks } as IProps;
};

const Todo = connect(mapStateToProps)(TodoContainer);
export { Todo };
