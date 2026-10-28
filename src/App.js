import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Hello from './components/Hello.js';
import Form from './components/Form.js';
import Range from './components/Range.js';
import Posts from './components/Posts.js';

function App() {
    let posts =
        [
            { id: '1', title: 'Procedure C++', description: 'Процедурное программирование на языке С++' },
            { id: '2', title: 'OOP C++', description: 'Объектно-ориентированное программирование на языке С++' },
            { id: '3', title: 'Windows Desktop', description: 'Разработка настольных приложение для Windows' },
        ];
  return (
    <div className="App">
    {/* <Header /> */}
    <Hello />
    <Form />
    <Range />
          <Posts posts={ posts } />
    </div>
  );
}

export default App;
