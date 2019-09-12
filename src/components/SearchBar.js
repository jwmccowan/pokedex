import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onInputChange(event) {
    const term = event.target.value;
    const { onTermChange } = this.props;

    this.setState({ term });
    onTermChange(term);
  }

  render() {
    const { term } = this.state;
    return (
      <div className="ui segment search-bar">
        <form
          className="ui form"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="poke-search">
            Pokemon Search:
            <input
              id="poke-search"
              type="text"
              value={term}
              onChange={(e) => this.onInputChange(e)}
            />
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onTermChange: PropTypes.func.isRequired,
};

export default SearchBar;
