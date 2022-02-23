import React from 'react'

export default class SearchBar extends React.Component {
 
  // constructor(props){
  //   super(props);
  // this.state={ text: ''}
  // }

  state = { text: '' }
    // onInputClick=(event)=>{
    //         console.log(event.target.value )
    //     }
    //     onInputChange(event){
            
    //         console.log("text entered")
    //         console.log(event.target.value )
    // }

    // first way to do it
    onFormSubmit = (event) =>{
      event.preventDefault();
      this.props.onSubmit(this.state.text)
    }

    // onFormSubmit(event){
    //   event.preventDefault();
    //  this.props.onSubmit(this.state.text)
    // }
  render() {
    return (
        <div>
          {/* ///text form */}
          {/* <label htmlFor="">Enter text</label>
        <form  className='ui form'>
        <div className="ui  segment">
          <div className="ui  right icon input">
          
            <input type="text"
             placeholder="Search..." 
             value={this.state.text}
            //  onClick={this.onInputClick} 
             onChange={e => this.setState({text: e.target.value})}
             />
            
            <i className="search icon"></i>
          </div>
        </div>
        </form >
          <label htmlFor="">{this.state.text.length < 4 ? 'text must be at least 4 characters': ''}</label> */}
          {/* ///SearchBar */}
          



<label htmlFor="">Enter text</label>
        <form  onSubmit={this.onFormSubmit} className='ui form'>
        <div className="ui  segment">
          <div className="ui  right icon input">
          
            <input type="text"
             placeholder="Search..."  
             value={this.state.text}
            //  onClick={this.onInputClick} 
             onChange={e => this.setState({text: e.target.value})}
             />
            
            <i className="search icon"></i>
          </div> 
        </div>
        </form >
          {/* <label htmlFor="">{this.state.text.length < 4 ? 'text must be at least 4 characters': ''}</label> */}
      </div>
    )
  }
}
