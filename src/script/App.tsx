import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Page Config
import HomePage from './pages/Home';
import PageNotFound from './pages/PageNotFound';

export default function App() {
    return (
    <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}></Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
    </BrowserRouter>
    )
}




