import { Component } from "react";
import image from "./check.png";

export class GroseryList extends Component {
    state = {
        userInput: "",
        groseryList: [],
    }

handleInputValue(e) {
    this.setState({userInput: e})
}

handleAddItem(input) {
    let listArray = this.state.groseryList;
    if (input !== ""){
        listArray.push(input);
    }
    this.setState({groseryList: listArray, userInput: ""})
}
handleDeleteItem(){
    let listArray = this.state.groseryList;
    listArray = [];
    // listArray.length = 0;
    this.setState({groseryList: listArray})
}

handleCrossed(ev) {
    const li = ev.target;
    li.classList.toggle("crossed");
}

handleSubmit(ev){
    ev.preventDefault();
}
    render() {
        return(
            <form onSubmit={(ev) => {this.handleSubmit(ev)}}>
                <div className="center">
                    <input 
                        type="text" 
                        placeholder="add item" 
                        onChange={ (e) => {this.handleInputValue(e.target.value)} }
                        value={ this.state.userInput }/>
                </div>
                <div className="center">
                    <button onClick={() => {this.handleAddItem(this.state.userInput)}} className="add btn">ADD</button>
                </div>
                <ul className="list">
                    {
                        this.state.groseryList.map((item, index) => (
                            <li onClick={this.handleCrossed} key={index}>
                                <img src={image} alt="check" width="30px"/>
                                {item}
                            </li>
                        ))
                    }
                </ul>
                <div className="center">
                    <button onClick={() => {this.handleDeleteItem()}} className="delete btn">DELETE</button>
                </div>
            </form>
        )
    }
    
}