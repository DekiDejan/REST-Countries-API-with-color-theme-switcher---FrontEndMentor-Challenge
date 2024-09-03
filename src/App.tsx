import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />
    </>
  );
}

export default App;
