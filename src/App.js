import Header from './components/header/Header'
import PhonesContainer from './components/terminals/phones/PhonesContainer'
import TvContainer from './components/terminals/tv/TvContainer'
import store from './components/redux/store'
// Passer le store en tant que props pour pouvoir acceder aux differents elements enfants
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />

        <div className="section-one">
          <PhonesContainer />
          <TvContainer />
        </div>
      </div>
    </Provider>
  )
}

export default App;