import { useState } from 'react';
import Alert from './components/Alert';
import Buttons from './components/Buttons';
import ListGroup from './components/ListGroup';

function App() {
  let items = ['New York', 'San Fransisco', 'Tokyo', 'London', 'Paris'];

  const [alertVisible, setAlertVisible] = useState(false);

  // const colors = [
  //   'btn-primary',
  //   'btn-secondary',
  //   'btn-success',
  //   'btn-danger',
  //   'btn-warning',
  //   'btn-info',
  //   'btn-light',
  //   'btn-dark',
  //   'btn-link',
  // ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {/* <ListGroup
        items={items}
        headings="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {/* <Alert>
        Hello <span> World </span>
      </Alert> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Buttons color="primary" onClick={() => setAlertVisible(true)}>
        My Button
      </Buttons>
    </div>
  );
}

export default App;
