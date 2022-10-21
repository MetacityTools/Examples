import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { Heights } from './heights';
import { Landuse } from './landuse';
import { Overview } from './Overview';

function App() {

    return (
        <div id="app">
            <BrowserRouter>
            <Routes>
            <Route path="/">
                <Route index element={<Overview />} />
                <Route path="heights" element={<Heights />} />
                <Route path="flat" element={<Landuse />} />
                <Route path="*" element={<Overview />} />
            </Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
