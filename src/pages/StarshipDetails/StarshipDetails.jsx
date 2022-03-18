import { useState, useEffect } from 'react';
import { getDetails } from '../../services/sw-api'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'


const StarshipDetails = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()
  // const pilotUrls = [
  //   "https://swapi.dev/api/people/13/", 
  //   "https://swapi.dev/api/people/14/", 
  //   "https://swapi.dev/api/people/25/", 
  //   "https://swapi.dev/api/people/31/",
  // ]
  // async function getPilots(urls) {
  //   const promises = urls.map(url => fetch(url).then(res => res.json()))
  //   const pilotObjects = await Promise.all(promises)
  //   return pilotObjects
  // }
  // getPilots(pilotUrls).then(pilots => console.log(pilots))


  useEffect(()=> {
    getDetails(location.state.starship.url)
    .then(starshipDetails => setStarshipDetails(starshipDetails))
  }, [])

  return (
    <div id='details-main'>
      { starshipDetails.name ? 
        <>
          <button className='details-card'>
            <h4>NAME: {starshipDetails.name}</h4>
            <h4>MODEL: {starshipDetails.model}</h4>
            <h4>CREW: {starshipDetails.crew}</h4>
          

          
          {/* <h4>Pilots:</h4>
          {starshipDetails.pilots ?
            <>
            {starshipDetails.pilots.map(pilot => 
              <div key={pilot.name}>
                <h4>{pilot.name}</h4>
              </div>
            )}
            </>
            :
            <p>This poor starship has no pilots. Womp womp.</p>
          } */}
            <h4>
                <Link
                          style={{ color: '#FFF' }}
                          to="/"
                >
                  RETURN
                </Link>
            </h4>
          </button>
        </>
        :
        <>
          <p>Loading starship details...</p>
        </>
      }
    </div>
  );
}
 
export default StarshipDetails;