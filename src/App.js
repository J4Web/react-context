import NavBar from "./NavBar";
import FormComp from "./FormComp";
import PageContent from "./PageContent";
import ThemeContext  from "./contexts/ThemeContext";
function App() {
  return (
    <div className="App">
    <ThemeContext>
    <PageContent>

    
    <NavBar/>
    <FormComp/>
    </PageContent>
    </ThemeContext>
    </div>
  );
}

export default App;
