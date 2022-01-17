import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Cart = () => {

    const state = useSelector((state) => state.handleCart);
    useEffect(() => {
       
    }, [state.qty])
  console.log("state", state);

  const handlePlusButton = (x) => {
      console.log("handlePlusButton" ,x.qty+1);
   return  state.qty = x.qty+1  ;
  }
  const handleMinusButton = (x) => {
    console.log("handleMinusButton",x.qty-1);
    return  state.qty = x.qty-1  ;

}
  return (
    <div>
      <div>
        {state.map((x) => {
          return (
            <>
            <div className="">
              <div className=" mb-4 ">
                <div className="d-flex align-items-center card h-100 text-center p-4 " key={x.id}>
                <div>
                    <img
                    src={x.image}
                    className="card-img-top"
                    alt={x?.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {x?.title}...
                    </h5>
                    <p className="card-text lead fw-bold"> {x.qty} X ${x?.price}= ${(x.qty)*(x.price)}</p>
                  </div>
                    </div>
                    <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => handlePlusButton(x)} >+</button>
                    <button className="btn btn-outline-dark me-2"  onClick={() => handleMinusButton(x)}>-</button>
                </div>
                </div>
              </div>
              </div>
            </>
            // <>
            // <div className="d-flex justify-content-center">
            // <div>
            // <img src={x.image}/>
            // </div>
            // <div>
            // <h3>{x.category}</h3>
            // <h3>{x.title}</h3>
            // <h3>{x.description}</h3>
            // </div>
            // </div>
            // </>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
