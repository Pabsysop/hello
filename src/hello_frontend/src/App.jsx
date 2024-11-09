import { useState } from "react";
import { hello_backend } from "declarations/hello_backend";

function App() {
  const [greeting, setGreeting] = useState("");
  const [submittedNames, setSubmittedNames] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const greeting = await hello_backend.greet(name);
    setGreeting(greeting);
    const submittedNames = await hello_backend.get_submitted_names();
    setSubmittedNames(submittedNames);
    return false;
  }

  return (
    <main>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>

      <section id="submitted-names">
        <h2>All Greeted Names</h2>
        <ul>
          {submittedNames.map((it, i) => {
            return <li key={i}>{it}</li>;
          })}
        </ul>
      </section>
    </main>
  );
}

export default App;
