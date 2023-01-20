import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../Store/index";



const Home=()=>{
  const state=useSelector(state=>state.amount)
  const dispatch =useDispatch();
  console.log(()=>{dispatch(actionCreators.depositMoney(100))})
  const actions = bindActionCreators(actionCreators,dispatch);
    return(
          //  <div className="d-flex justify-content-center m-4 p-4 fs-3">
          //    <button type="button" className="btn btn-dark  fs-3" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>Deposit</button>
          //    <input className="mx-2" type="number" id="quantity" name="quantity" min="1" max="10000000"/>
          //    <button type="button" className="btn btn-dark fs-3" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>Withdraw</button>
          //  </div>
          <div className="d-flex justify-content-center m-4 p-4 fs-3">
              <button type="button" className="btn btn-dark m-2  fs-3" onClick={()=>{actions.depositMoney(100)}}>Deposit</button>
              <button className="btn btn-dark m-2 fs-3" >Update your Balance = {state}</button>
             <button type="button" className="btn btn-dark fs-3 m-2 " onClick={()=>{actions.withdrawMoney(100)}}>Withdraw</button>
           </div>
    )
}

export default Home;