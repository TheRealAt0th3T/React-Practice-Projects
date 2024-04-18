import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let cities = ["Seattle", "San Francisco", "Los Angeles", "San Jose", "Boise"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          {" "}
          <b>Test Alert</b>
        </Alert>
      )}
      <Message></Message>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button color="dark" onClick={() => console.log(setAlertVisible(true))}>
        Test
      </Button>
    </div>
  );
}

export default App;
