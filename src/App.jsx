import { Head } from "./Components/Header";
import CoreCon from "./Components/Essentials.jsx";
import Example from "./Components/Examples.jsx";

function App() {
  return (
    <div>
      <Head></Head>
      <main>
        <CoreCon></CoreCon>
        <Example></Example>
      </main>
    </div>
  );
}

export default App;
