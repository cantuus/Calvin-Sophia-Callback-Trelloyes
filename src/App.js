import React from 'react';
import List from './components/List';
import store from './components/store';
import './App.css';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

  function omit(obj, keyToOmit) {
    return Object.entries(obj).reduce(
      (newObj, [key, value]) =>
          key === keyToOmit ? newObj : {...newObj, [key]: value},
      {}
    );
  }


class App extends Component() {
  state ={
    store: store,
  }

  handleDeleteItem = function (cardId) {
    this.setState({
      store: {
        allCards: this.state.store.allCards, 
        lists: updatedLists
      }
    })

    let updatedLists = this.state.store.lists.map(function(list){
      let newCardIdList = list.cardIds.filter(function(id){
            return id !== cardId
      })
      return {
        id: list.id,
        header: list.header,
        cardIds: newCardIdList
      }
    })
   
  }


  listComponents = store.lists.map(
    function (list) {
      return <List
        onDeleteItem={this.handleDeleteItem} 
        list={list} 
        key={list.id}>
        {list.header}
      </List>
    }
  );

  }

  return (
    <div className="App">
      <header>
        <h1>Trelloyes!</h1>
      </header>
      <main>
        {listComponents}
      </main>
    </div>
  );
}

export default App;
