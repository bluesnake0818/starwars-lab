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
    <>
      <button className='details-card'>
        <h4>NAME: {starshipDetails.name}</h4>
        <h4>MODEL: {starshipDetails.model}</h4>
        <h4>

            <Link
                      style={{ color: '#FFF' }}
                      to="/"
            >
              RETURN
            </Link>

        </h4>
      </button>
      {/* <h4>Actions:</h4>
      {starshipDetails.actions ?
      <>
        {starshipDetails.actions.map(action => 
          <div key={action.name}>
            <h4 >{action.name}</h4>
            <h5>{action.desc}</h5>
          </div>
        )}
      </>
      :
      <p>This poor starship has no actions. Womp womp.</p>
      } */}
    </>
  );
}
 
export default StarshipDetails;