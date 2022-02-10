import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = {term : ''};
    onInputClick(event){
            console.log(event.target.value )
        }
        onInputChange(){
            
            console.log("text entered")
    }
  render() {
    return (
        <div>
        <form  className='ui form'>
        <div className="ui inverted segment">
          <div className="ui inverted right icon input">
          
            <input type="text"
             placeholder="Search..." 
             value={this.state.term}
             onClick={this.onInputClick} 
             onChange={e => this.setState({term: e.target.value})}
             />
            
            <i className="search icon"></i>
          </div>
        </div>
        </form >
      </div>
    )
  }
}
