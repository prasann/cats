import React from 'react';

const availableCats = [
  "jetpacktocat",
  "filmtocat",
  "mountietocat",
  "saritocat",
  "steroidtocat",
  "dunetocat",
  "minertocat",
  "catstello",
  "saketocat",
  "yaktocat"
];

const Cat = (props) => {
  return <input type="image" alt={props.name}
                src={`https://octodex.github.com/images/${props.name}.png`}
                onClick={() => props.onClick(props.name)} />
};

const Cats = (props) => {
  return <div >
    {availableCats.map((catName) => {
      return <Cat key={Math.random()} name={catName} onClick={props.onSelect} />;
    })}
  </div >;
};

export default Cats;