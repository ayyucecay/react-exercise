import React, {useReducer} from "react";

const Reducer = () => {
    function reducer(state, action) {
        switch (action.type) {
            case 'ADD': return { count: state.count + 1 }
            case 'SUB' : return { count: state.count - 1 }
            case 'ADD10' : return { count : state.count + 10 }
            case 'SUB10' : return { count : state.count - 10 }
            case 'RESET' : return { count : 0 }
            default : return state
        }
    }
    const[state, dispatch] = useReducer(reducer, { count:0 })
    return (
        <div>
            <p>Count is : {state.count}</p>
            <div>
                <button onClick={() => dispatch({type: 'ADD'})}>Add 1</button>
                <button onClick={() => dispatch({type: 'SUB'})}>Sub 1</button>
                <button onClick={() => dispatch({type: 'ADD10'})}>Add 10</button>
                <button onClick={() => dispatch({type: 'SUB10'})}>Sub 10</button>
                <button onClick={() => dispatch({type: 'RESET'})}>Reset Count</button>
            </div>
        </div>
    )
}

export default Reducer;