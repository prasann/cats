import React, { Component } from 'react';

const CatChooser = () => {
  return <div>
    <input type="image" src="https://octodex.github.com/images/jetpacktocat.png" />
    <input type="image" src="https://octodex.github.com/images/filmtocat.png" />
    <input type="image" src="https://octodex.github.com/images/mountietocat.png" />
    <input type="image" src="https://octodex.github.com/images/saritocat.png" />
    <input type="image" src="https://octodex.github.com/images/steroidtocat.png" />
    <input type="image" src="https://octodex.github.com/images/dunetocat.png" />
    <input type="image" src="https://octodex.github.com/images/minertocat.png" />
    <input type="image" src="https://octodex.github.com/images/catstello.png" />
    <input type="image" src="https://octodex.github.com/images/saketocat.png" />
    <input type="image" src="https://octodex.github.com/images/yaktocat.png" />
  </div>;
};

class Chooser extends Component {
  render() {
    return <CatChooser/>;
  }
}

export  default  Chooser;