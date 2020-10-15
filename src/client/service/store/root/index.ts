import { combineReducers, ReducersMapObject } from "redux";
import { all } from "redux-saga/effects";
import { settingsReducer } from "./settings/reducer";

export function* rootSaga() {
    yield all([]);
}
export const createRootReducer = (reducersToCombine: ReducersMapObject) =>
    combineReducers({
        settings: settingsReducer,
        ...reducersToCombine,
    });

export type ReduxStateType = ReturnType<ReturnType<typeof createRootReducer>>;
