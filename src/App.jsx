import './App.css';
import bullLogo from './assets/bull_logo.png';
import bullAsset from './assets/bull_asset.png';
import usaFlag from './assets/usa_flag.png';
import colFlag from './assets/colombia_flag.png';

function App() {

  const redirectTo = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <div className='main-landing-container'>
        <img className='bull-logo' src={bullLogo} alt="Bull Marketing Logo" />
        <img className='bull-asset' src={bullAsset} alt="Bull Logo" />

        <div className='flags-container'>
          <div className='usa-container'>
            <img src={usaFlag} alt="Usa Flag" onClick={() => redirectTo('https://bullmarketing.us/')} />
            <h2>USA</h2>
          </div>
          <div className='colombia-container'>
            <img src={colFlag} alt="Colombia Flag" onClick={() => redirectTo('https://bullmarketing.com.co/')} />
            <h2>Colombia</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;