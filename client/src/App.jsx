import { Routes, Route } from 'react-router-dom';
import { Footer, Header } from './components';
import { Inscription, Categories, Evenement, Admin, APropos, CU, PDC, ML, Accueil, TableauDeBord, Modifier, Livres, DetailLivre } from './Pages';


function App() {
  return (
    <>
      <Routes>
      <Route path="/admin" element={<Admin />} />
      <Route path="/inscription" element={<Inscription/>} />
      <Route path="/tableau-de-bord" element={<TableauDeBord />} />
      <Route path='/modifier/:id' element={<Modifier />} />
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/livre/:id" element={<DetailLivre />} />
                <Route path="/evenement" element={<Evenement />} />
                <Route path="/a-propos" element={<APropos />} />
                <Route path="/politique-de-confidentialite" element={<PDC />} />
                <Route path="/condition-d-utilisation" element={<CU />} />
                <Route path="/mention-legale" element={<ML />} />
    
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
