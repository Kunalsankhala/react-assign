import { useReducer } from "react";
 import React from "react";

export default function MyApp() {

  const initialState = {
    petrol: 300,
    diesel: 350,
    cng: 350,
  };

  const divstyle = {
    backgroundColor: "lightblue",
    color: "black",
    padding: "50px",
    margin: "100px 50px 0",
    display: "flex",
    textAlign: "center",
    justifyContent: "space-around",
    alignItems: "center",
  };

  const indiv = {
    backgroundColor: "grey",
    color: "black",
    fontWeight: "500",
    padding: "20px",
    margin: "0 50px",
    textAlign: "center",
    justifyContent: "space-around",
    alignItems: "center",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "bike":
        return {
          ...state,
          petrol: state.petrol - 5,
        };
        break;

      case "car":
        return {
          ...state,
          petrol: state.petrol - 10,
        };
        break;

      case "truck":
        return {
          ...state,
          diesel: state.diesel - 10,
        };
        break;

      case "auto":
        return {
          ...state,
          cng: state.cng - 5,
        };
        break;

        case "reset":
            return{
                petrol: 300,
                diesel: 350,
                cng: 350,
            };
            break;

      default:
        break;
    }
  };

  const [currentState, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div style={divstyle}>
        <p>petrol : {currentState.petrol} LTR</p>
        <br></br>
        <p>diesel : {currentState.diesel} LTR</p>
        <br></br>
        <p>cng : {currentState.cng} KG</p>
      </div>

      <div style={indiv}>
        <button onClick={() => dispatch({ type: "bike" })}>bike -Petrol</button>
        <button onClick={() => dispatch({ type: "car" })}>car -Petrol</button>

<button onClick={()=> dispatch({type:"truck"}) }>truck-diesel</button>
<button onClick={()=> dispatch({type:"auto"}) }>auto-cng</button>
        <button style={{margin:'10px',padding:'10px',color:'white',backgroundColor:'yellowgreen',border:'none',fontWeight:'700'}} onClick={() => dispatch({ type: "reset" })}>reset</button>
     
        
      </div>
    </>
  );
}