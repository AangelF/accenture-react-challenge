import {
  Routes,
  Route,
} from 'react-router-dom';
import Information from './screens/Information';
import Main from './screens/Main';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Main/>}></Route>
        <Route exact path='/info' element={<Information/>}></Route>
      </Routes>
    </>
  );
}

export default App;
