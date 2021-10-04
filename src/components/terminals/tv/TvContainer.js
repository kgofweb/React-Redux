import tvImg from '../../../img/tv.png'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { buyTV } from '../../redux/tv/actionTV' 

const TvContainer = () => {
  const [totalTV, setTotalTV] = useState(1);

  const tvNum = useSelector(state => state.tv.tvs)
  const dispatch = useDispatch(totalTV)

  return (
    <div className="container">
      <img src={tvImg} alt="phone" />
      <p className="description">
        Available:
        <span id="count" className="count"> { tvNum } </span>
      </p>
      <div className="btn-container">
        <button 
          className="buy-button"
          onClick={() => dispatch(buyTV(totalTV))}
        >
          Buy Phone
        </button>
        <input type="text" value={totalTV} onChange={e => setTotalTV(e.target.value)} />
      </div>
    </div>
  )
}

export default TvContainer