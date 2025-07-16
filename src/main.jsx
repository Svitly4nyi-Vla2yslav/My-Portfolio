import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { LanguageProvider } from './components/LanguageSwitcher/LanguageContext';
import './i18n';
import 'modern-normalize/modern-normalize.css';


ReactDOM.createRoot(document.getElementById("root")).render(<LanguageProvider>
    <App />
</LanguageProvider>);