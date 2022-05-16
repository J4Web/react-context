import NavBar from "./NavBar";
import FormComp from "./FormComp";
import PageContent from "./PageContent";
import ThemeContext  from "./contexts/ThemeContext";
import LanguageContext from "./contexts/LanguageContainer";
function App() {
  return (
    <div className="App">
    <ThemeContext>
    <LanguageContext>
    <PageContent>
    <NavBar/>
    <FormComp/>
    </PageContent>
    </LanguageContext>
    </ThemeContext>
    </div>
  );
}

export default App;
