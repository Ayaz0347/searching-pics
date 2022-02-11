import { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state={ password: ''}
  }
    // onInputClick(event){
    //         console.log(event.target.value )
    //     }
    //     onInputChange(event){
            
    //         console.log("text entered")
    //         console.log(event.target.value )
    // }

    onFormSubmit(event){
      event.preventDefault();
    }
  render() {
    return (
        <div>
          {/* ///password form */}
          {/* <label htmlFor="">Enter Password</label>
        <form  className='ui form'>
        <div className="ui  segment">
          <div className="ui  right icon input">
          
            <input type="password"
             placeholder="Search..." 
             value={this.state.password}
            //  onClick={this.onInputClick} 
             onChange={e => this.setState({password: e.target.value})}
             />
            
            <i className="search icon"></i>
          </div>
        </div>
        </form >
          <label htmlFor="">{this.state.password.length < 4 ? 'Password must be at least 4 characters': ''}</label> */}
          {/* ///SearchBar */}
          



<label htmlFor="">Enter Password</label>
<label htmlFor="">added</label>
        <form  onSubmit={this.onFormSubmit} className='ui form'>
        <div className="ui  segment">
          <div className="ui  right icon input">
          
            <input type="password"
             placeholder="Search..." 
             value={this.state.password}
            //  onClick={this.onInputClick} 
             onChange={e => this.setState({password: e.target.value})}
             />
            
            <i className="search icon"></i>
          </div>
        </div>
        </form >
          <label htmlFor="">{this.state.password.length < 4 ? 'Password =============fds  must be at least 4 characters': ''}</label>
      </div>
    )
  }
}
