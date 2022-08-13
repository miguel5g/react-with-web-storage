import React from 'react';
import PropTypes from 'prop-types';

class HomeHeader extends React.Component {
  handleSearchDog = (event) => {
    event.preventDefault();

    const { onSearchDog } = this.props;

    onSearchDog();
  };

  render = () => {
    return (
      <header className="flex flex-col">
        <h1 className="mx-auto text-4xl font-bold text-slate-900">Dogs Explorer</h1>

        <form onSubmit={this.handleSearchDog} className="flex gap-4 mt-8">
          <button
            className="flex-1 px-4 py-2 text-white transition-colors bg-indigo-400 rounded hover:bg-indigo-500"
            type="submit"
          >
            Explorar
          </button>
        </form>
      </header>
    );
  };
}

HomeHeader.propTypes = {
  onSearchDog: PropTypes.func.isRequired,
};

export default HomeHeader;
