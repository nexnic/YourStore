import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Page Config
import HomePage from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Layout from './pages/Layout';

const pageConfig= {
    pageName: 'YourStore',
    pageSlogen: 'Your One-Stop Online Shop for All Your Needs.',
    logo: null,




}


export default function App() {

    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout pageConfig={pageConfig}/>}>
                    <Route index element={<HomePage />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}




