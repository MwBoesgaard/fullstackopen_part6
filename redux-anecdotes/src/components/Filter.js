import { changeFilter } from "../reducers/filterReducer";
//import store from '../store'
import { connect } from 'react-redux'

const Filter = (props) => {
    const handleChange = (event) => {
      props.changeFilter(event.target.value)
      //store.dispatch(changeFilter(event.target.value))
    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
    )
  }

  const mapDispatchToProps = dispatch => {
    return {
      changeFilter: value => {
        dispatch(changeFilter(value))
      }
    }
  }
  
  //export default Filter
  export default connect(null, mapDispatchToProps)(Filter);