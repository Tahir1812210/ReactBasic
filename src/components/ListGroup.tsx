function ListGroup() {
  let items = ['New York', 'San Fransisco', 'Tokyo', 'London', 'Paris'];
  items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Lit Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
