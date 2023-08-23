import { useState } from "react";
import { From, ColorList } from "./components";
import Values from "values.js";
import { ToastContainer ,toast } from "react-toastify";
const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));
  const addColor =(color) =>{
    try {
        let newColors = new Values(color).all(10) ;
        setColors(newColors)
    } catch (error) {
      toast.error(error.message) ;
    }
  }
  return (
    <main>
      <From addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" theme="light" autoClose={500} />
    </main>
  );
};
export default App;
