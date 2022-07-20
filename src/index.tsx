import * as React from "react"
import * as ReactDOM from "react-dom/client"
import * as serviceWorker from "./serviceWorker"
import reportWebVitals from "./reportWebVitals"

import "@fontsource/nunito";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import { theme } from "./theme";

import { App } from "./app/App";
import { Country } from "./features/country/Country";
import { CountriesList } from "./features/countries-list/CountriesList";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { api } from "./services/api";


const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <ApiProvider api={api}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<CountriesList />} />
              <Route path="/country/:countryName" element={<Country />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </ApiProvider>
  </React.StrictMode>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

