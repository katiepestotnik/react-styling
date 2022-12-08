import Button1 from "./components/normal-css/Button";
import Button2 from './components/inline-css/Button'
import Button3 from './components/css-in-js/Button'
import Button4 from './components/styled-components/Button'
import Button5 from './components/css-modules/Button'
import Button6 from './components/sass/Button'
function App() {
  return (
    <div className="App">
      <Button1
        buttonText='CSS FILE'
        colorChange='light' />
      <Button2
        buttonText='INLINE CSS'
        backgroundColor='#b974b6'
      />
      <Button3
        buttonText='CSS in JS'
        styleText='50px'
        weight='bold'
      />
      <Button4
        buttonText='Styled Components'
        textColor='#fff'
      />
      <Button5
        buttonText='CSS Modules'
      />
      <Button6
        buttonText='SASS'  
      />
      
    </div>
  );
}

export default App;
