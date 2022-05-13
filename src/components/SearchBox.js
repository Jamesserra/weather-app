import React from "react";
import SearchIcon from '@mui/icons-material/Search';

class SearchBox extends React.Component{
   constructor(props) {
      super(props)
        this.state = {
          searchInputValue: ""
       }
    }

    onFormSubmit = (event) =>{
      event.preventDefault();
      this.props.onSearchSubmit(this.state.searchInputValue)
      event.target.reset();
    }

    render() {
      return (
        <form className="relative flex sm:w-1/3 flex-wrap items-center" onSubmit={this.onFormSubmit}>
          <input
              type="text"
              name="city"
              placeholder="Search Location Here"
              className="border-0 px-3 py-3 placeholder-blueGray-300 relative bg-white rounded-full text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10" 
              onChange={(event) => this.setState({searchInputValue: event.target.value})}
             />
          <span className="absolute text-center w-8 pl-3 py-3">
              <div className="Search"><SearchIcon/></div>
          </span>
       </form>
    )
  }
}

export default SearchBox