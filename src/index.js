import React,{Component} from 'react';// di dalam modul 'react' ada kelas bernama 'Component'
//import React from 'React' //ini adalah default export yang artinya sexport semua variabel yang ada di dalam module 'react'
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Hello React</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))