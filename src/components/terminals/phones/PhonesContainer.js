import phoneImg from '../../../img/phone.png'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyPhone } from '../../redux/phone/actionPhone'

const PhonesContainer = () => {
  const [totalPhone, setTotalPhone] = useState(1)

  // Afficher le nombre de phone
  const phones = useSelector(state => state.phone.phones);
  // Dispatcher notre action
  const dispatch = useDispatch(totalPhone);

  return (
    <div className="container">
      <img src={phoneImg} alt="phone" />
      <p className="description">
        Available:
        <span id="count" className="count"> {phones} </span>
      </p>
      <div className="btn-container">
        <button 
          className="buy-button"
          onClick={() => dispatch(buyPhone(totalPhone))}
        >
          Buy Phone
        </button>
        <input type="text" value={totalPhone} onChange={e => setTotalPhone(e.target.value)} />
      </div>
    </div>
  )
}

export default PhonesContainer


// import phone from '../../img/phone.png'
// import { connect } from 'react-redux'
// import { buyPhone } from '../redux/phone/actionPhone'

// const PhonesComponent = (props) => {
//   // console.log(props.phones);

//   return (
//     <div className="container">
//       <img src={phone} alt="phone" />
//       <p className="description">
//         Available:
//         <span id="count" className="count"> { props.phones }</span>
//       </p>
//       <button 
//         className="buy-button"
//         onClick={() => props.buyPhone()}
//       >
//         Buy Phone
//       </button>
//     </div>
//   )
// }

// // Afficher le nombre de phone
// const mapStateToProps = (state) => {
//   return {
//     phones: state.phones
//   }
// }

// // Dispatch method
// const mapDispatchToProps = (dispatch) => {
//   return {
//     buyPhone: () => dispatch(buyPhone())
//   }
// }

// Generer le composant d'ordre supperieur
// export default connect(mapStateToProps, mapDispatchToProps)(PhonesComponent)