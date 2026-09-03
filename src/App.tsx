import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "./dalpizzol/cart";
import { FavoritesProvider } from "./dalpizzol/favorites";
import { AppShell } from "./dalpizzol/AppShell";
import Home from "./dalpizzol/pages/Home";
import Catalog from "./dalpizzol/pages/Catalog";
import Order from "./dalpizzol/pages/Order";
import About from "./dalpizzol/pages/About";
import Proposta from "./dalpizzol/pages/Proposta";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner position="top-center" />
      <BrowserRouter>
        <CartProvider>
          <FavoritesProvider>
            <Routes>
              <Route element={<AppShell />}>
                <Route path="/" element={<Home />} />
                <Route path="/bolos" element={<Catalog />} />
                <Route path="/encomendar" element={<Order />} />
                <Route path="/sobre" element={<About />} />
              </Route>
              {/* proposta comercial — rota privada, fora da navegação */}
              <Route path="/proposta2026" element={<Proposta />} />
              {/* rota antiga do site */}
              <Route path="/dalpizzol" element={<Navigate to="/" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </FavoritesProvider>
        </CartProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
