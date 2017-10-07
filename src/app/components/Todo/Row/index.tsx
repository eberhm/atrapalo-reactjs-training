import * as React from 'react';
import {EStates, ITask} from '../../../models/Todo/Task';
import {connect} from 'react-redux';

interface IProps {
    task: ITask;
}

interface IReduxDispatchProps {
    dispatchNameChanged: (id: number, newName: string) => void;
}

const RowContainer = (props: IProps & IReduxDispatchProps) => {
    const updateName = (e) => {
        props.dispatchNameChanged(props.task.id, e.target.value);
    };

    return (
        <div>
            <input type="checkbox" checked={props.task.state === EStates.DONE}/>
            <input value={props.task.name} onChange={updateName}/> <input value={props.task.description}/>
            <button>Delete</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch): IReduxDispatchProps => {
    return {
        dispatchNameChanged: (id: number, newName: string) => {
            const action = {
                type: 'UPDATE_ROW_NAME',
                data: {
                    id,
                    name: newName,
                },
            };

            dispatch(action);
        },
    };
};

const Row = connect(null, mapDispatchToProps)(RowContainer) as React.ComponentClass<IProps>;
export { Row };
