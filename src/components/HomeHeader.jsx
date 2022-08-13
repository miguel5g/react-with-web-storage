import React from 'react';
import PropTypes from 'prop-types';

import { getAllBreads } from '../services/dogs';

class HomeHeader extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      breads: [],
      bread: '',
    };
  }

  componentDidMount = async () => {
    const breads = await getAllBreads();

    this.setState({
      isLoading: false,
      breads,
      bread: (breads[0] || {}).value || '',
    });
  };

  handleInputChange = (event) => {
    this.setState({
      bread: event.target.value,
    });
  };

  handleSearchDog = (event) => {
    event.preventDefault();

    const { bread, breads } = this.state;
    const { onSearchDog } = this.props;

    const breadDetails = breads.find((search) => search.value === bread);

    onSearchDog(breadDetails);
  };

  render = () => {
    const { bread, breads, isLoading } = this.state;

    return (
      <header className="flex flex-col">
        <h1 className="mx-auto text-4xl font-bold text-slate-900">Dogs Explorer</h1>

        <form onSubmit={this.handleSearchDog} className="flex gap-4 mt-8">
          <label className="my-auto text-lg" htmlFor="bread">
            Qual a raça?
          </label>
          <select
            id="bread"
            className="flex-1 px-4 py-2 text-base capitalize bg-gray-200 rounded"
            name="bread"
            value={bread}
            onChange={this.handleInputChange}
          >
            {isLoading && <option value="loading">Carregando...</option>}
            {breads.map((bread) => (
              <option key={bread.value} className="capitalize" value={bread.value}>
                {bread.name}
              </option>
            ))}
          </select>

          <button
            className="px-4 py-2 text-white transition-colors bg-indigo-400 rounded hover:bg-indigo-500"
            type="submit"
          >
            Pesquisar
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
