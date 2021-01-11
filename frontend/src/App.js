import { useEffect, useState } from 'react';
import Profile from './Profile';
import './App.css';

function App() {

  const [profiles, setProfiles] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getProfiles();
  }, []);

  const getProfiles = async () => {
    const response = await fetch("http://api.enye.tech/v1/challenge/records");
    const data = await response.json();
    setProfiles(data.records.profiles);
  }

  const handleSearchInput = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    const matchedProfile = [];
    console.log(search, typeof search)
    profiles.filter(profile => {
      if (profile.FirstName === search)
        matchedProfile.push(profile);
      return matchedProfile
    });
    setProfiles(matchedProfile);
  }
  return (
    <div className="App">
      <form onSubmit={getSearch}>
        <input type="text" name="search" className="patientSearch" value={search} onChange={handleSearchInput}/>
        <button type="text" name="search-button" className="patientSubmit">Search</button>
      </form>
      {profiles.map(profile => (
        <Profile key={profile.FirstName} profile={profile}/>
      ))}
    </div>
  );
}

export default App;
