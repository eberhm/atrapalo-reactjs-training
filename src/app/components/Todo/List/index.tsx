import * as React from 'react';
import {ITask} from 'models/Todo/Task';
import {Row} from '../Row/index';

interface IProps {
    tasks: ITask[];
}

class List extends React.Component<IProps, {}> {
  public render() {
    return (
        <div>
            {this.renderRows()}
        </div>
    );
  }

  private renderRows() {
      return this.props.tasks.map(
          (task, id) => {
              return <Row task={task} key={id} />;
          });
  }
}

export { List };
