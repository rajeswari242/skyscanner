import logo from './logo.svg';
import './App.css';
import BpkCalendar from 'bpk-component-calendar'

const formatDateFull = (date) => date.toDateString();
const formatDateFull = (date) => date.toDateString().split(' ')[1];
const daysOfWeek = [
{name: 'Sunday', nameAbbr: 'Sun', index: 0, isWeekend:true },
{name: 'Monday', nameAbbr: 'Mon', index: 1, isWeekend:false },
{name: 'Tuesday', nameAbbr: 'Tue', index:2, isWeekend:false },
{name: 'Wednesday', nameAbbr: 'Wed', index:3, isWeekend:false },
{name: 'Thursday', nameAbbr: 'Thu', index: 4, isWeekend:false },
{name: 'Friday', nameAbbr: 'Fri', index: 5, isWeekend:false },
{name: 'Saturday', nameAbbr: 'Sat', index: 0, isWeekend:true },

];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Flight Schedule </h1>
        <img src={logo} className="App-logo" alt="logo" />
        { /*<p>
          Edit <code>src/App.js</code> and save to reload.
          Flight Schedule
        </p>  */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          { /*Learn React*/}
        </a>
      </header>
      <div className= "App-Calendar">
        <BpkCalendar
          id="my-calendar"
          onDateSelect={(date) => console.log(date)}
          formatDateFull={formatDateFull}
          formatMonth = {formatMonth}
          daysOfWeek = {daysOfWeek}
          weekStartsOn = {0}
          changeMonthLabel = "Change month"
          nextMonthLabel = "Next month"
          previousMonthLabel = "Previous month"/>
      </div>
      <button className="App-button">continue</button>
    </div>
  );
}

export default App;
