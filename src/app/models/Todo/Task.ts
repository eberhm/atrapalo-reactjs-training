export enum EStates {
    DONE,
    PENDING,
}

export interface ITask {
    id: number;
    name: string;
    description: string;
    state: EStates;
}
