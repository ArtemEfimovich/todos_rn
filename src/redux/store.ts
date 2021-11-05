import {applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import {appReducer} from "./app-reducer";


const rootReducer = combineReducers({
    app: appReducer,
})


export const store = createStore(rootReducer,applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>