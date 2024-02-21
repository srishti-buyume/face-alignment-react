import React, { useState } from 'react';
import FaceAnalyzer from './components/FaceAnalyzer';

const App = () => {
  const [frame, setFrame] = useState('');

  return (
    <div>
      <FaceAnalyzer onFrame={setFrame} />
    </div>
  );
};

export default App;
