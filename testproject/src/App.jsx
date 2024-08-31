import Button from "./components/Button";
import Paragraph from "./components/Paragraph";
function App() {
  let test = "DO NOT DELETE THIS PARAGRAPH"

  return (
    <>
   
     <Button test={test}/>
    <Paragraph test={test} />
    </>
  );
}

export default App;
