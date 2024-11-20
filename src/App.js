import './App.css';
import CardComponent from './Components/CardComponent';

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
    <CardComponent
    image="/assests/image.jpg"
    title="Sample Card"
    description="He is a Indian Cricket Player."
    buttonText="Learn More" 
    />
    <CardComponent
        image="https://via.placeholder.com/300"
        title="Another Card"
        description=" Another example card with content."
        buttonText="Explore"
      />
    </div>
    
  );
}

export default App;
