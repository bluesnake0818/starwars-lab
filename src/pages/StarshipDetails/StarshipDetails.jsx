import { useState, useEffect } from 'react';
import { getDetails } from '../../services/sw-api'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'


const StarshipDetails = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()

  useEffect(()=> {
    // We can use the same API function!
    // FUNCTIONAL PROGRAMMING MAGIC, AHOY!!!
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
              <div key={action.name}>
              <h4 >{action.name}</h4>
              <h5>{action.desc}</h5>
              </div>
              )}
              </>
              :
              <p>This poor starship has no actions. Womp womp.</p>
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