import "./App.css";

function App() {
  return (
    <div className="app">
      <h1><u>PuriFood</u>
      </h1>

      <div className="app-searchForm">
        <input 
        type="text" 
        placeholder="Type the ingredient"
        autoComplete="Off"
        className="app-searchInput" 
        />
        <select className="app-healthLabels">
          <option value="vegan">Vegan</option>
        </select>
        <input type="submit" value="Get Recipe" className="app-submit" />
      </div>
    </div>
  );
}

export default App;
