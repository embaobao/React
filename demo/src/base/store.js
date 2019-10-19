import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import reduxSaga from 'redux-saga'



import reducer from './reducer'
import actionCreator from './actionCreator'

let saga = reduxSaga()

let store = createStore(reducer,{
    a:123
}, compose(applyMiddleware(saga), applyMiddleware(reduxThunk)))

saga.run(function* () {

})

store.dispatch(actionCreator.add())

console.log(store.getState())


export default store