import Alert from "./components/Alert";
import Button from "./components/button";
import { useState } from "react";
function App(){
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose = {() => setAlertVisibility(false)}> My Alert </Alert>}
      <Button onClick = {() =>setAlertVisibility(true)}>Yuh</Button>
    </div>

  );

}

export default App;