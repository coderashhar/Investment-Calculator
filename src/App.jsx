import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultTable from "./components/ResultTable";
import { useState } from "react";

function App() {
  const initialDetails = {initialInvestment:10000,annualInvestment:1200,
    expectedReturn:6,duration:10}
  const [details, setDetails] = useState(initialDetails);

  const validInput = details.duration > 0 ; 

  function handleChange(evt){
    setDetails( d => {
        return {...d,[evt.target.name] : +evt.target.value};
    });
    // submitData(details);
}
  
  return (
    <>
      <Header/>
      <UserInput onChangeFn={handleChange} details={details} />
      { 
        validInput ? 
        <ResultTable input={details}/> : 
        <p className="center">Duration should be greater than zero.</p>
      }
    </>
    
  )
}

export default App
