import React, { useEffect, useState } from 'react'
import { getStarshipList } from '../../services/sw-api'
import { Link } from 'react-router-dom'

const StarshipList = (props) => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(()=> {
    // API call, 
    getStarshipList()
    // then adjust state
    .then(starshipList => setStarshipList(starshipList.results))
  }, [])
  
  return (
    <div id="main">
      {/* <h3>Starship List</h3> */}
      {starshipList.length ? 
      <>
        {starshipList.map((starship) => (
          <div className='button-container' key={starship.index}>
            <button className="startship-list">
              <Link
                style={{ textDecoration: 'none', color: '#FFF' }}
                to="/starship"
                state={{ starship }}
              >
                {starship.name}
              </Link>
            </button>
          </div>

        ))}
      </>
      :
      <>
        <h2>Loading Starships...</h2>
      </>}
    </div>
  );
}
 
export default StarshipList;