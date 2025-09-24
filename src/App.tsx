import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import CustomizedTees from "./components/CustomizedTees";

const queryClient = new QueryClient();

const App = () => {
  const [cart, setCart] = useState<any[]>([]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Home page */}
            <Route
              path="/"
              element={
                <>
                  <Navbar cart={cart} setCart={setCart} />
                  <Index cart={cart} setCart={setCart} />
                </>
              }
            />

            {/* Category page WITHOUT Navbar */}
            <Route
              path="/category/:categoryId"
              element={<CategoryPage cart={cart} setCart={setCart} />}
            />

            {/* Cart page */}
            <Route
              path="/cart"
              element={
                <>
                  <Navbar cart={cart} setCart={setCart} />
                  <CartPage cart={cart} setCart={setCart} />
                </>
              }
            />

            {/* Customized Tees page */}
            <Route
              path="/customized"
              element={
                <>
                  <Navbar cart={cart} setCart={setCart} />
                  <CustomizedTees cart={cart} setCart={setCart} />
                </>
              }
            />

            {/* 404 Not Found */}
            <Route
              path="*"
              element={
                <>
                  <Navbar cart={cart} setCart={setCart} />
                  <NotFound />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
