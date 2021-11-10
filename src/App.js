import CardsList from './components/cards-list/cards-list';
import SearchList from './components/search-list/search-list';
import { useSelector } from 'react-redux';
import { getUserFlatID} from './store/selectors';

// Приложение состоит из двух основных частей - поиск и карточки. 
// Пользователь видит сначала только поиск, после выбора улицы, дома и квартиры, отображатются карточки клиентов

function App() {

  const selectedFlat = useSelector(getUserFlatID);

  return (
    <>
      <SearchList />
      {
        selectedFlat ? <CardsList selectedFlat={selectedFlat}/> : ''
      }
    </>
  );
}

export default App;
