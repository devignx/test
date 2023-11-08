import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home />} path="/" />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
