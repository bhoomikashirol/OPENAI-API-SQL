import styles from './index.module.css'
import sqlServer from './assets/sql-logo.png'
import { useState } from "react";

function App() {
  const [queryDescription, setQueryDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted: ", queryDescription);
  };

  return (
  <main> className= {styles.main}
  <img src={sqlLogo} alt="" className={styles.icon} />
  <h3>Generate SQL with AI</h3>
  
  <form onSubmit={onSubmit}>
    <input 
        type="text"
        name="query-description" 
        placeholder="Describe your query"
          value={userPrompt}
          onChange={(e) => setQueryDescription(e.target.value)}
    />

     <input type="submit" value="Generate query" /> 
  </form>
  <pre>{sqlQuery}</pre>
  
  </main>

  );
}

export default App();
