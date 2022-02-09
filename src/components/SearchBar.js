import React from "react";

 class SearchBar extends React.Component() {
   onInputChange(){

   }
 render(){
    return <div>
    <form>
    <div class="ui inverted segment">
      <div class="ui inverted right icon input">
        <input type="text" placeholder="Search..." onChange={this.onInputChange} />
        <i class="search icon"></i>
      </div>
    </div>
    </form >
  </div>
 }
        
 }
export default SearchBar;