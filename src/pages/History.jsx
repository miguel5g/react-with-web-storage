import React from 'react';
import { Link } from 'react-router-dom';

import DogCard from '../components/DogCard';

class History extends React.Component {
  constructor() {
    super();

    this.state = {
      history: [] /** @todo começar com as imagens que já foram vistas */,
    };
  }

  render = () => {
    const { history } = this.state;

    return (
      <div className="min-h-screen">
        <div className="flex flex-col w-full max-w-2xl px-6 py-16 mx-auto">
          <main className="flex flex-col mt-16">
            <h2 className="mx-auto mt-8 text-2xl font-medium text-slate-900">
              Histórico de imagens
            </h2>

            {!history.length && (
              <p className="mx-auto mt-4 font-light text-slate-600">
                Ainda não pesquisou nenhum cachorro...
              </p>
            )}

            <ul className="flex flex-col gap-2 mt-4">
              {history.map((historyItem) => (
                <li key={historyItem.image} className="flex-1">
                  <DogCard dog={historyItem} />
                </li>
              ))}
            </ul>

            <Link to="/" className="mx-auto mt-4 font-light text-blue-600 underline">
              Voltar
            </Link>
          </main>
        </div>
      </div>
    );
  };
}

export default History;
