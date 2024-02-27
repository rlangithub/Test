import './App.css';
// import Judges from './components/judges'
// import Answerings from './components/answerings'
import ParticipantCard from './hooks/ParticipantCard'
import DiscussionScreen from './Components/discussionScreen/discussionScreen'


function App() {
  return (
    <div className="App">
      <ParticipantCard/>
      {/* <Judges/> */}
      {/* <Answerings/> */}
      <DiscussionScreen/>
    </div>
  );
}

export default App;
