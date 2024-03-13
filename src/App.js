import { app } from './Firebase';
import './App.css';
import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";
import Signup from './pages/Signup';

const auth = getAuth(app);

function App() {
  const signupuser = () => {
  createUserWithEmailAndPassword(auth, 'jayp3967@gmail.com', 'jaydip@123')
    .then((value) => console.log(value))
  }
  return (
    <div className="App">
      <header className="App-header">
       <Signup/>
      </header>
    </div>
  );
}

export default App;
