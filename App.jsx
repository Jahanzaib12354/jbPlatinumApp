// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';

// import Route from './src/routes/Route'

// const App = () => {
//   return (
//       <>
//       <Route />
//       </>
//   );
// };

// export default App;



import React from 'react';
import { Provider } from 'react-redux';

import Route from './src/routes/Route';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
};

export default App;
