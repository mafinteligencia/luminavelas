import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "./dalpizzol/cart";
import { FavoritesProvider } from "./dalpizzol/favorites";
import { AppShell } from "./dalpizzol/AppShell";

const Home = lazy(() => import("./dalpizzol/pages/Home"));
const Catalog = lazy(() => import("./dalpizzol/pages/Catalog"));
const Order = lazy(() => import("./dalpizzol/pages/Order"));
const About = lazy(() => import("./dalpizzol/pages/About"));
const Proposta = lazy(() => import("./dalpizzol/pages/Proposta"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageLoading = () => <main className="min-h-[70vh]" aria-busy="true" />;

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
                <Route path="/" element={<Suspense fallback={<PageLoading />}><Home /></Suspense>} />
                <Route path="/bolos" element={<Suspense fallback={<PageLoading />}><Catalog /></Suspense>} />
                <Route path="/encomendar" element={<Suspense fallback={<PageLoading />}><Order /></Suspense>} />
                <Route path="/sobre" element={<Suspense fallback={<PageLoading />}><About /></Suspense>} />
              </Route>
              {/* proposta comercial — rota privada, fora da navegação */}
              <Route path="/proposta2026" element={<Suspense fallback={<PageLoading />}><Proposta /></Suspense>} />
              {/* rota antiga do site */}
              <Route path="/dalpizzol" element={<Navigate to="/" replace />} />
              <Route path="*" element={<Suspense fallback={<PageLoading />}><NotFound /></Suspense>} />
            </Routes>
          </FavoritesProvider>
        </CartProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
