import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Countries from "./components/Countries";
import Header from "./components/Header";
import CountryDetails from "./components/CountryDetails";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route
            path="/REST-Countries-API-with-color-theme-switcher---FrontEndMentor-Challenge"
            element={<Countries />}
          />
          <Route
            path="/REST-Countries-API-with-color-theme-switcher---FrontEndMentor-Challenge/country/:countryId"
            element={<CountryDetails />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
