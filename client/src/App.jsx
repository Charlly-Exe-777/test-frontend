import { useState } from 'react';

function App() {
  const serverEndpoint = import.meta.env.VITE_SERVER_URL;
  console.log(serverEndpoint);

  const [data, setData] = useState(null)

  const getDataFromServer = async () => {
    try{
      const res = await fetch(`${serverEndpoint}/get-res`);
      const data = await res.json();
      setData(data)
      console.log(data);
    } catch (err){
      console.log(err);
    }
  };

  return (
    <>
      <div className="homePageContainer">
        <button className='sendReqBtn' onClick={getDataFromServer}>Get Response</button>
        {data !== null ? <p>We got data.</p> :''}
      </div>
    </>
  )
}

export default App
