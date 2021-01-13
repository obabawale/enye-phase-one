import { useEffect, useState } from 'react';
import Profiles from './components/Profiles';
import Pagination from './components/Pagination';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [profilesPerPage] = useState(20);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getProfiles = async () => {
      setLoading(true);
      const response = await fetch("https://api.enye.tech/v1/challenge/records");
      const data = await response.json();
      setProfiles(data.records.profiles);
      setLoading(false);
    }
    getProfiles();
  }, []);

  // Get current posts
  const indexofLastProfile = currentPage * profilesPerPage;
  const indexofFirstProfile = indexofLastProfile - profilesPerPage;
  const currentProfiles = profiles.splice(indexofFirstProfile, indexofLastProfile);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearchInput = e => setSearch(e.target.value);

  return (
    <div className="App">
      <h1 className="text-primary mb-5">Profiles</h1>
      <input type="text" name="search" className="patientSearch" value={search} onChange={handleSearchInput} />
      <Profiles profiles={currentProfiles} loading={loading} />
      <Pagination profilesPerPage={profilesPerPage} totalProfiles={profiles.length} paginate={paginate} />
    </div>
  );
}

export default App;