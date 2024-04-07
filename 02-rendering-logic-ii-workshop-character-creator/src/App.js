import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import PerspectiveBackdrop from './components/PerspectiveBackdrop/PerspectiveBackdrop';

function App() {
  return (
    <>
      <CharacterEditor />
      <PerspectiveBackdrop />
      <Footer />
    </>
  );
}

export default App;
