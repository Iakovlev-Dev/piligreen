import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AppRoute} from "../../const.ts";
import MainPage from "../../pages/main-page/main-page.tsx";
import ContactsPage from "../../pages/contacts-page/contacts-page.tsx";
import {HelmetProvider} from "react-helmet-async";


export default function App() {

  return (
      <BrowserRouter>
          <HelmetProvider>
              <Routes>
                  <Route path={AppRoute.Main} element={<MainPage />}/>
                  <Route path={AppRoute.Contacts} element={<ContactsPage />} />
              </Routes>
          </HelmetProvider>
      </BrowserRouter>

  )
}

