import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppProvider from './context/appProvider';

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(
    <AppProvider>
        <App />
    </AppProvider>
)
