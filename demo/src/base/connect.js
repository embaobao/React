import {connect } from 'react-redux'
// import {INNDEX_ADD} from './actionTypes'
import actionCreator from './actionCreator'



const mapState=(state)=>{
    // console.log(state);
    return {
        conut:state.indexReducer.number
    }
}
const mapActions=(dispatch)=>{
  return {
        add(){
            dispatch(actionCreator.add())
        }
    }
}

export default connect(mapState,mapActions)