import { Component } from "react";


class NewCounter extends Component {

    constructor(){
      super();
      this.state = {
        count : 0,
      }
    }

    increment(){
        this.setState((prevState) => ({ count: prevState.count + 1}));                                    
      }
    
    decrement(){
       if(this.state.count>0){
        this.setState((prevState)=>({count : prevState.count - 1}))
       }
    }

    reset(){
        this.setState((prevState)=>({count : 0}))
    }

    


  render() {
    return (
      <div>
        <div className="NewcouterApp d-flex justify-content-center align-items-center">
          <div>
          <h1 className="text-center">Class Based Counter App</h1>
            <div className="justify-content-center d-flex m-5">
              <button onClick={()=>this.decrement()} > - </button>
              <h2 className="box ">{this.state.count}</h2>
              <button onClick={()=>this.increment()}> + </button>
            </div>
            <div className="d-flex justify-content-center">
              <button onClick={()=>{this.reset()}}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewCounter