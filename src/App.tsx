import { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import Navbar from "./components/Navbar";

// ✅ Lazy load components for better performance
const Index = lazy(() => import("./pages/Index"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CustomizedTees = lazy(() => import("./components/CustomizedTees"));

const queryClient = new QueryClient();

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const App = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false); // ✅ controls cart drawer

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar cartItemCount={cart.length} setShowCart={setShowCart} />

          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route
                path="/"
                element={
                  <Index
                    cart={cart}
                    setCart={setCart}
                    setShowCart={setShowCart}
                  />
                }
              />

              <Route
                path="/category/:categoryId"
                element={
                  <CategoryPage
                    cart={cart}
                    setCart={setCart}
                    setShowCart={setShowCart}
                  />
                }
              />

              <Route
                path="/customized"
                element={
                  <CustomizedTees
                    cart={cart}
                    setCart={setCart}
                    setShowCart={setShowCart}
                  />
                }
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>

          {showCart && (
            <Suspense fallback={null}>
              <CartPage cart={cart} setCart={setCart} setShowCart={setShowCart} />
            </Suspense>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
