import React from 'react';
import Card from './Card';

const App: React.FC = () => {
  return (
    <div className="container">
      
      <Card
        imgSrc="../public/view-adorable-persian-domestic-cat.jpg"
        imgAlt="Example image"
        title="Cat"
        text="The cat sweetly spits into its crib and does not want to wake up."
        link="#"
        linkText="Wake up the cat"
      />

      <Card
        header="Oppps..."
        title="No cat"
        text="The cat is not with you, you are sad."
        link="#"
        linkText="Call the cat 'kitty-kitty'"
      />
    </div>
  );
};

export default App;
