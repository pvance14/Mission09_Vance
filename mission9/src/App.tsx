import React from "react";
import "./App.css";

// Assuming the JSON file is structured like this:
// { "teams": [ ... ] }
import schoolData from "./CollegeBasketballTeams.json";

interface SchoolProps {
  tid: number;
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return (
    <div>
      <h1>Welcome to March Madness</h1>
      <h2>Where Miracles are Made</h2>
    </div>
  );
}

class Team extends React.Component<SchoolProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="card">
        <h3>{oneTeam.school}</h3>
        <h4>Mascot: {oneTeam.name}</h4>
        <h4>
          Location: {oneTeam.city}, {oneTeam.state}
        </h4>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div className="card-container">
      {schoolData.teams.map((oneTeam: SchoolProps, index: number) => (
        <Team key={index} {...oneTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
