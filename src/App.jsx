import "./App.css";
import Counter from "./components/Counter";
import ItemList from "./components/ItemList";
import Message from "./components/Message";
import UserProfile from "./components/UserProfile";
import Welcome from "./components/Welcome";



// Hvad er fejlen her og hvordan løses den?
// Html skal ind i return() og (name) skal ændres til ({name}).

/*const Greeting = () => {
  return <h1>Hello, {name}!</h1>;
};*/

const Greeting = ({name}) => {
  return(
    <>
    <h1>Hello, {name}!</h1>
    </>
  )
}

const App = () => {
  return (
    <>
    <Welcome />
      <Greeting name='Alice' />
      <Message />
      <UserProfile />
      <ItemList />
      <Counter />
    </>
  );
};

export default App;
