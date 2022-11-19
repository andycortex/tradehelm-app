import * as React from "react";
import api from "../api";
import { Item } from "../types";
import Button from "../ui/controls/Button/Button";
import Modal from "../ui/controls/Modal";


import styles from "./App.module.scss";

enum Status {
  Init = 'init',
  Success = 'success',
}

const App: React.FC = () => {
  const [items, setItems] = React.useState<Item[]>([])
  const [status, setStatus] = React.useState(Status.Init)
  const [isModalVisible, toggleModal] = React.useState<boolean>(false)

  function remove(id: Item['id']) {
    api.remove(id).then(() => setItems(items => items.filter(item => item.id !== id)))
  }

  React.useEffect(() => {
    api.list().then((items) => {
      setItems(items);
      setStatus(Status.Success)
    })
  }, [])

  if (status === Status.Init) {
    return <span>Loading...</span>;
  }

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>Supermarket List</h1>
        <h3>{items.length} item(s)</h3>
      </header>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.text}</span>
            <button onClick={() =>remove(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Button colorScheme='primary' onClick={() =>toggleModal(true)}>Add Item</Button>
      {isModalVisible && (
        <Modal onClose={() =>toggleModal(false)}>
          <form>
            <h2>Add Item</h2>
            <input type='text'/>
            <nav>
              <Button type="button" onClick={() =>toggleModal(false)}>Cancel</Button>
              <Button colorScheme='primary' type='submit'>Add Item</Button>
            </nav>
          </form>
        </Modal>
      )}
    </main>
  );
};

export default App;
