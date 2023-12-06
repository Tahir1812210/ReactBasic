// import React, { useState } from 'react';
// import ListGroup from './components/ListGroup';
// import { BsFillCalendarFill } from 'react-icons/bs';
// import Like from './components/Like';

import { useState } from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

// function App() {
//   // const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

//   // const [game, setGame] = useState({
//   //   id: 1,
//   //   player: {
//   //     name: 'John',
//   //   },
//   // });

//   // const handleClick = () => {
//   //   setGame({ ...game, player: { ...game.player, name: 'Bob' } });
//   // };

//   // const [pizza, setPizza] = useState({
//   //   name: 'Spicy Pepproni',
//   //   toppings: ['Mushrooms'],
//   // });

//   // const handleClick = () => {
//   //   setPizza({ ...pizza, toppings: [...pizza.toppings, 'Cheese'] });
//   // };

//   const [cart, setCart] = useState({
//     discount: 0.1,
//     items: [
//       { id: 1, title: 'Product 1', quantity: 1 },
//       { id: 2, title: 'Product 2', quantity: 1 },
//     ],
//   });

//   const handleClick = () => {
//     setCart({
//       ...cart,
//       items: cart.items.map((item) =>
//         item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
//       ),
//     });
//   };

//   return (
//     <div>
//       {/* <BsFillCalendarFill color="red" size="40" /> */}
//       {/* <ListGroup items={items} headings="Cities" /> */}
//       {/* <Like onClick={() => console.log('clicked')} /> */}
//       {/* <button onClick={() => setAlertVisible(true)}>My Button</button> */}
//       {/* <button onClick={handleClick}>Show</button> */}
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';

// const App = () => {

//   const [game , setGame] = useState({
//     id: 1,
//     player: {
//       name: "John"
//     }
//   })

//   const handleClick = () => {

//   setGame({...game, player: {...game.player , name: 'Bob'}})

//   }

//   return <div>nice programming</div>;
// };

// export default App;

// import { useState } from 'react';

// const App = () => {
//   const [pizza, setPizza] = useState({
//     name: 'Spicy Pepproni',
//     toppings: ['Mushroom'],
//   });

//   const handleClick = () => {
//     setPizza({ ...pizza, toppings: [...pizza.toppings, 'Cheese'] });
//   };

//   return <div>App</div>;
// };

// export default App;

// import React, { useState } from 'react';

// const App = () => {
//   const [cart, setCart] = useState({
//     discount: 0.1,
//     items: [
//       { id: 1, title: 'Product 1', quantity: 1 },
//       { id: 2, title: 'Product 2', quantity: 1 },
//     ],
//   });

//   const handleClick = () =>
//   {
//     setCart({
//       ...cart,
//       items: cart.items.map((item) =>
//         item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
//       ),
//     });
//   }

//   return <div>App</div>;
// };

// export default App;

// import React, { useState } from 'react';

// const App = () => {
//   const [bugs, setBugs] = useState([
//     { id: 1, title: 'Bug 1', fixed: false },
//     { id: 2, title: 'Bug 2', fixed: false },
//   ]);

//   let count = 0;
//   count++;

//   const handleClick = () => {
//     setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
//   };

//   return <div>App {count}</div>;
// };

// export default App;

// import React, { useState } from 'react';
// import produce from 'immer';

// const App = () => {
//   const [tags, setTags] = useState(['happy', 'cheerful']);

//   const [bugs, setBugs] = useState([
//     { id: 1, title: 'Bug 1', fixed: false },
//     { id: 2, title: 'Bug 2', fixed: false },
//   ]);

//   const handleClick = () => {
//     setTags(tags.filter((tag) => tag! == 'happy'));

//     setTags(tags.map((tag) => (tag === 'happy' ? 'happiness' : tag)));

//     setBugs(
//       produce((draft) => {
//         const bug = draft.find((bug) => bug.id === 1);
//         if (bug) bug.fixed = true;
//       })
//     );
//   };

//   return (
//     <div>
//       {bugs.map((bug) => (
//         <p key={bug.id}>
//           {bug.title} {bug.fixed ? 'Fixed' : 'New'}
//         </p>
//       ))}
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import produce from 'immer';

// const App = () => {
//   const [bugs, setBugs] = useState([
//     { id: 1, title: 'Bug 1', fixed: false },
//     { id: 2, title: 'Bug 2', fixed: false },
//   ]);

//   const handleClick = () => {
//     setBugs(
//       produce((draft) => {
//         const bug = draft.find((bug) => bug.id === 1);
//         if (bug) bug.fixed;
//       })
//     );
//   };

//   return (
//     <div>
//       {bugs.map((bug) => (
//         <p key={bug.id}>
//           {bug.title} {bug.fixed ? 'Fixed' : 'New'}
//         </p>
//       ))}
//     </div>
//   );
// };

// export default App;

// import { useState } from 'react';

// const [customer, setCustomer] = useState({
//   name: 'John',
//   address: {
//     city: 'San Fransisco',
//     zipCode: 94111,
//   },
// });

// const App = () => {
//   return <div>App</div>;
// };

// export default App;

// const App = () => {
//   const [cartItems, setCartItems] = useState(['Product1', 'Product2']);

//   return (
//     <div>
//       <Navbar cartItemsCount={cartItems.length} />
//       <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
//     </div>
//   );
// };

// export default App;

// import React from 'react';

// const App = () => {
//   const [drink, setDrink] = useState({
//     title: 'Americano',
//     price: 5,
//   });

//   const handleClick = () => {
//     setDrink({ ...drink, price: 6 });
//   };

//   return (
//     <div>
//       {drink.price}
//       <button onClick={handleClick}>Click</button>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import ExpandableText from './components/ExpandableText';

const App = () => {
  return (
    <div>
      <ExpandableText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore porro
        error provident accusantium. Accusantium tempore rem perspiciatis vitae
        ipsa mollitia, fuga tempora quasi aliquam possimus debitis, cumque
        obcaecati animi similique, id temporibus qui ullam odit illum commodi
        voluptatibus porro neque. Fugiat modi voluptatem odit doloremque quidem
        atque maiores ipsum, magni consequuntur qui commodi, aut quis ea?
        Doloribus iusto veniam exercitationem obcaecati autem quis fuga
        praesentium assumenda, rerum non illum enim numquam magni excepturi
        reiciendis dicta laborum quod architecto cumque recusandae! Inventore
        impedit exercitationem quo voluptate, nihil omnis rem ratione alias
        temporibus ut, ullam officiis dicta delectus facere dolores maxime
        nulla?
      </ExpandableText>
    </div>
  );
};

export default App;
