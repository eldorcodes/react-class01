import moment from 'moment';

function App() {
  var header = 'Hello react';
  var text = 'Say something to us';
  var date = moment().startOf('s').fromNow()
  return (
    <div>
      <h1>{header}</h1>
    <p>{text}</p>
    <p>{date}</p>
    </div>
  )
    
}

export default App;
