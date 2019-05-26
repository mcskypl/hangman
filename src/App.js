import React from 'react';
import axios from 'axios';
import style from './App.module.scss';

import Hangman from './components/Hangman/Hangman';
import Missed from './components/Missed/Missed';
import Box from './components/Box/Box';
import GameOver from './components/GameOver/GameOver';

const gameAPI = 'http://hangman-api.herokuapp.com/hangman';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      solutionAPI: '',
      key: '',
      // eslint-disable-next-line react/no-unused-state
      blankSolution: '',
      blankSolutionTab: [],
      solution: '',
      solutionTab: [],
      steps: 0,
      win: false,
      over: false,
    };
  }

  componentDidMount() {
    this.initGame();
  }

  initGame = () => {
    axios.post(gameAPI).then(res => {
      this.setState({
        key: '',
        steps: 0,
        over: false,
        win: false,
        solutionAPI: `http://hangman-api.herokuapp.com/hangman?token=${res.data.token}`,
        // eslint-disable-next-line react/no-unused-state
        blankSolution: res.data.hangman,
      });

      axios.get(this.state.solutionAPI).then(res2 => {
        this.setState({
          solution: res2.data.solution,
        });
        this.changeToArray();
      });

      document.addEventListener('keydown', this.checkLetter);
    });
  };

  changeToArray = () => {
    // change solution | string to array
    let ar = [];
    for (let i = 0; i < this.state.solution.length; i += 1) {
      ar[i] = this.state.solution[i];
    }

    this.setState({
      solutionTab: ar,
    });

    // change blank solution | string to array
    ar = [];
    for (let i = 0; i < this.state.solution.length; i += 1) {
      ar[i] = '';
    }

    this.setState({
      blankSolutionTab: ar,
    });
  };

  checkLetter = e => {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      key: this.state.key + e.key,
    });

    const indices = [];
    const array = this.state.solutionTab;
    const element = e.key;
    let ids = array.indexOf(element);

    // game over?
    this.over(ids);

    while (ids !== -1) {
      // if -1 (no letter)
      indices.push(ids);
      ids = array.indexOf(element, ids + 1);
    }

    let ln = [];
    ln = this.state.blankSolutionTab;

    for (let i = 0; i < indices.length; i += 1) {
      ln[indices[i]] = e.key;
    }

    this.setState({
      blankSolutionTab: ln,
    });

    // game win?
    this.win();
  };

  win = () => {
    const a = this.state.blankSolutionTab.toString();
    const b = this.state.solutionTab.toString();
    if (a === b) {
      this.setState({
        win: true,
      });
    }
  };

  over = ids => {
    if (ids === -1) {
      this.setState({
        // eslint-disable-next-line react/no-access-state-in-setstate
        steps: this.state.steps + 1,
      });
    }

    if (this.state.steps > 10) {
      this.setState({
        // eslint-disable-next-line react/no-unused-state
        over: true,
      });
    }
  };

  render() {
    return (
      <>
        <GameOver win={this.state.win} over={this.state.over} newGame={this.initGame} />

        <div className={style.wrapper}>
          <div className={style.triangle} />
          <div className={style.flex}>
            <Hangman steps={this.state.steps} />
            <Missed missed={this.state.key} />
          </div>

          <div className={style.solution}>
            <Box state={this.state} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
