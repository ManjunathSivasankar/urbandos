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
            {/* Home page with ComboOffers */}
            <Route
              path="/"
              element={
                <>
                  <Navbar cartItemCount={cart.length} />
                  <Index cart={cart} setCart={setCart} />
                </>
              }
            />

            {/* Category page */}
            <Route
              path="/category/:categoryId"
              element={<CategoryPage cart={cart} setCart={setCart} />}
            />

            {/* Cart page */}
            <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />

            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
