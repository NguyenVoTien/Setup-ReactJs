import axios from 'axios';
import { useEffect, useState } from 'react';

function Index() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  const fetchData = async () => {
    setLoading(true);

    try {
      const rs = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      setData(rs.data);
      console.log(rs);
      setLoading(false);
    } catch (error) {
      setError('khong lay duoc data');

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterData = data
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((item) => {
      const searchValue = (search || '').toLowerCase();
      const nameMatch = (item.name || '').toLowerCase().includes(searchValue);
      const emailMatch = (item.email || '').toLowerCase().includes(searchValue);
      return nameMatch || emailMatch;
    });
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleClearSearch = () => {
    setSearch('');
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <input type="text" placeholder="Search" value={search} onChange={handleChange} />
      <ul>
        {filterData.map((item) => (
          <li key={item.id}>
            Name : {item.name}
            Email : {item.email}
          </li>
        ))}
      </ul>
      <button onClick={handleClearSearch}> Clear Search</button>
    </>
  );
}

export default Index;
