import React from 'react';

import './style.css'

// import Header from './Header';
// import MainContent from './MainContent';
// import Footer from './Footer';

// function MyApp() {
//   return (
//     <div>
//       <Header />
//       <MainContent />
//       <Footer />
//     </div>
//   )
// }

function MyApp() {
  const firstName = "Ebraim";
  const lastName = "Carvalho";

  return(
    <h1>Hello, {`${firstName} ${lastName}, tudo beleza?`}</h1>
  )
}

export default MyApp;