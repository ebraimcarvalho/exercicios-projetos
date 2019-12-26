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
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay
  const styles = {
    fontSize: 30
  }

  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "#8475Df"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
    styles.color = "#500500"
  } else {
    timeOfDay = "night";
    styles.color = "#005"
  }

  return(
  <h1 style={styles}>Good {timeOfDay}</h1>
  )
}

export default MyApp;