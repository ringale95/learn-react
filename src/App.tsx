
import { useState } from 'react';
import './App.css'
import { Button } from './Button';
import ListGroup from './ListGroup'
import AlertDismissable from './AlertDismissable';
import Like from './Like';
import Bugs from './Bugs';

function App() {
  const items = ["New york", "San Francisco", "Los Angeles"];
  const [alertVisible, setAlertVisible] = useState(false);
  
  const handleSelect= ((item:string) => console.log(item));
  return (
    <>
      {alertVisible && (
        <AlertDismissable
          onClose={() => {
            setAlertVisible(false);
          }}
        >
          Clicked!
        </AlertDismissable>
      )}
      <Button
        color="primary"
        onClick={() => {
          setAlertVisible(!alertVisible);
        }}
      >
        Click Me!
      </Button>

      <ListGroup items={items} heading={"Cities"} onItemSelect={handleSelect} />
      <Like onClick={() => console.log("clicked!")} />
      
      <Bugs />
    </>
  );
}

export default App
