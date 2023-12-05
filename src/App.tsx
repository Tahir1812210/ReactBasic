import React, { useState } from 'react';
import ListGroup from './components/ListGroup';
import { BsFillCalendarFill } from 'react-icons/bs';
import Like from './components/Like';

function App() {
  // const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: 'John',
  //   },
  // });

  // const handleClick = () => {
  //   setGame({ ...game, player: { ...game.player, name: 'Bob' } });
  // };

  // const [pizza, setPizza] = useState({
  //   name: 'Spicy Pepproni',
  //   toppings: ['Mushrooms'],
  // });

  // const handleClick = () => {
  //   setPizza({ ...pizza, toppings: [...pizza.toppings, 'Cheese'] });
  // };

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: 'Product 1', quantity: 1 },
      { id: 2, title: 'Product 2', quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  return (
    <div>
      {/* <BsFillCalendarFill color="red" size="40" /> */}
      {/* <ListGroup items={items} headings="Cities" /> */}
      {/* <Like onClick={() => console.log('clicked')} /> */}
      {/* <button onClick={() => setAlertVisible(true)}>My Button</button> */}
      {/* <button onClick={handleClick}>Show</button> */}
    </div>
  );
}

export default App;
