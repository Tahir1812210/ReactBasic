import { MouseEvent, useState } from 'react';
import styles from './ListGroup.css';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? 'blue' : 'none')};
`;

interface Props {
  items: string[];
  headings: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, headings, onSelectItem }: Props) {
  //items = [];

  const [selectedIndex, setSelectedIndex] = useState(0);
  //Hook

  return (
    <>
      <h1>{headings}</h1>
      {items.length === 0 && <p>No Lit Found</p>}
      <List className="list-none p-0">
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
