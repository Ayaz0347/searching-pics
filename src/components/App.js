import { Component } from 'react'
import unsplash from './unsplash'
import SearchBar from "./SearchBar"
class App extends Component {

  state = {
    images: []
  }
  onSearchSubmit = async (text) => {

    console.log(text)

    const responce = await unsplash.get(
      '/search/photos', {
      params: { query: text },
    }
    );
    console.log(responce.data.results)
    this.setState(
      {
        images: responce.data.results
      }
    );
  }
  render() {

    return (
      <div style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>

    )
  }

}

export default App;
