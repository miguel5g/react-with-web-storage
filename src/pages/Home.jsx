import React from 'react';
import { Link } from 'react-router-dom';

import DogCard from '../components/DogCard';
import HomeHeader from '../components/HomeHeader';
import { getRandomDog } from '../services/dogs';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      dog: null,
      dogHistory: [] /** @todo começar com as imagens que já foram vistas */,
    };
  }

  componentDidMount = async () => {
    // console.log(await getRandomDog('affenpinscher'));
  };

  handleSearchDog = async () => {
    // console.log(bread);
    // return;

    this.setState({
      isLoading: true,
      dog: null,
    });

    const data = await getRandomDog();

    this.setState((state) => ({
      isLoading: false,
      dog: data,
      dogHistory: [data, ...state.dogHistory],
    }));
  };

  render = () => {
    const { isLoading, dog, dogHistory } = this.state;

    return (
      <div className="min-h-screen">
        <div className="flex flex-col w-full max-w-2xl px-6 py-16 mx-auto">
          <HomeHeader onSearchDog={this.handleSearchDog} />

          <main className="flex flex-col mt-16">
            {isLoading && <p className="mx-auto mt-4 font-light text-slate-600">Carregando...</p>}
            {!isLoading && dog && (
              <div className="flex flex-col w-auto p-4 border border-gray-200 rounded-xl">
                <img src={dog.image} alt={dog.name} className="rounded-lg" />
                <p className="mx-auto mt-4 text-lg font-light capitalize text-slate-600">
                  {dog.name}
                </p>
              </div>
            )}

            <h2 className="mx-auto mt-8 text-2xl font-medium text-slate-900">
              Histórico de imagens
            </h2>

            {!dogHistory.length && (
              <p className="mx-auto mt-4 font-light text-slate-600">
                Ainda não pesquisou nenhum cachorro...
              </p>
            )}

            <ul className="flex flex-col gap-2 mt-4">
              {dogHistory.map((historyItem) => (
                <li key={historyItem.image} className="flex-1">
                  <DogCard dog={historyItem} />
                </li>
              ))}
            </ul>

            <Link to="/history" className="mx-auto mt-4 font-light text-blue-600 underline">
              Ver histórico
            </Link>
          </main>
        </div>
      </div>
    );
  };
}

export default Home;
