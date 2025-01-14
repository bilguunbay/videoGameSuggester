import ListGroup from "./components/ListGroup";

//2 ways to create React component: function based and class based, this implementation uses function based (newer)
function App() {
  return (
    <ul className="list-group">
      <li className="list-group-item">Cras justo odio</li>
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item">Morbi leo risus</li>
      <li className="list-group-item">Porta ac consectetur ac</li>
      <li className="list-group-item">Vestibulum at eros</li>
    </ul>
  );
}

export default App;
