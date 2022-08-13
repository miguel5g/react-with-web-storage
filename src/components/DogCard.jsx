import React from 'react';

class DogCard extends React.Component {
  render = () => {
    const { dog } = this.props;

    return (
      <div className="flex gap-4 p-4 border border-gray-200 rounded-xl">
        <img src={dog.image} alt={dog.name} className="object-cover w-32 h-32 rounded-lg" />
        <p className="my-auto text-lg font-light capitalize text-slate-600">{dog.name}</p>
      </div>
    );
  };
}

export default DogCard;
