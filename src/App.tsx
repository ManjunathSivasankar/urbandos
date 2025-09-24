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
  const [showCart, setShowCart] = useState(false); // ✅ controls cart drawer

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* ✅ Navbar always visible */}
          <Navbar cartItemCount={cart.length} setShowCart={setShowCart} />

          <Routes>
            {/* Home page */}
            <Route
              path="/"
              element={
                <Index
                  cart={cart}
                  setCart={setCart}
                  setShowCart={setShowCart} // ✅ pass down here
                />
              }
            />

            {/* Category page */}
            <Route
              path="/category/:categoryId"
              element={
                <CategoryPage
                  cart={cart}
                  setCart={setCart}
                  setShowCart={setShowCart} // ✅ allows auto-open
                />
              }
            />

            {/* Customized Tees page */}
            <Route
              path="/customized"
              element={
                <CustomizedTees
                  cart={cart}
                  setCart={setCart}
                  setShowCart={setShowCart} // ✅ pass here too if it needs cart open
                />
              }
            />

            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* ✅ Cart overlay drawer */}
          {showCart && (
            <CartPage cart={cart} setCart={setCart} setShowCart={setShowCart} />
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
