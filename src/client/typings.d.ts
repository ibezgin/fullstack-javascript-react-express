import React from "react";
import { ReduxStateType } from "services/store/root";

declare global {
    export namespace React { }

}
declare module "react-redux" {
    export function useSelector<TState = ReduxStateType, TSelected>(
        selector: (state: TState) => TSelected,
        equalityFn?: (left: TSelected, right: TSelected) => boolean,
    ): TSelected;
}

declare module "redux-actions" {
    export function handleActions<State>(
        reducerMap: ReducerMap<State, any>,
        initialState: State,
        options?: Options,
    ): ReduxCompatibleReducer<State, any>;
}
