import { useState } from 'react';
import CyberMap from './components/CyberMap';
import { LanguageContext, type Language } from './lib/LanguageContext';

function App() {
  const [lang, setLang] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className="w-full h-screen">
        <CyberMap />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
