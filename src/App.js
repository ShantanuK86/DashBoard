import './App.css';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Todo from './Components/Todo/Todo';
import Crypto from './Components/Crypto/Crypto';
import GoogleSlide from './Components/GoogleSlide/GoogleSlide';
import Pomodoro from './Components/Greeting/Pomodoro';
import Time from './Components/Time/Time';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="app-wrapper">
      <div className="App">
      {/* <Header title="User Dashboard" /> */}
        <div className="item1">
          <Bookmarks />
        </div>
        <div className="item2">
          <Time />
        </div>
        <div className="item3">
          <Pomodoro />
        </div>
        <div className="item4">
          <GoogleSlide />
        </div>
        <div className="item5">
          <Todo />
        </div>
        <div className="item6">
          <Crypto />
        </div>
      </div>
    </div>
  );
}

export default App;
