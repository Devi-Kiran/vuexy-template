// ** Router Import
// import Router from './router/Router';

// const App = props => <Router />

// export default App

import Router from './router/Router';
import OfflineConponent from './@core/components/ametecs/OfflineConponent';

const App = props => {
    const isOnline = navigator.onLine;
    // console.log(isOnline)
    return (
        <>
            {isOnline ? <Router/> : <OfflineConponent/>}
        </>
    )
}

export default App

