import React from 'react';
import style from './App.module.scss';

import Letters from './components/Letters/Letters';

const newGame = 'http://hangman-api.herokuapp.com/hangman';
// const API =
//  'http://hangman-api.herokuapp.com/hangman?token=eyJzb2x1dGlvbiI6InVucG9pc29uIiwiY29ycmVjdF9ndWVzc2VzIjpbXSwid3JvbmdfZ3Vlc3NlcyI6W119';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: '',
      token: '',
    };
  }

  componentDidMount() {
    fetch(newGame, {
      method: 'POST',
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          letters: data.hangman.length,
          token: data.token,
        }),
      );
  }

  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.flex}>
          <div className={style.hangman} />
          <Letters
            className={style.letters}
            letters={this.state.letters}
            token={this.state.token}
          />
        </div>
      </div>
    );
  }
}

export default App;
