import TopBar from "./components/layout/TopBar";
import CategoryNav from "./components/layout/CategoryNav";
import Hero from "./components/hero/Hero";

import DrinkBuilder from "./components/builder/DrinkBuilder";
import HotDrinkBuilder from "./components/builder/HotDrinkBuilder";

import ProductSection from "./components/products/ProductSection";
import SpecialtiesSection from "./components/products/SpecialtiesSection";

import {
  batidos,
  frappes,
  coldDrinks,
  hotDrinks,
  specialties,
  snacks,
} from "./data/menu";

function App() {
  return (
    <div className="page">
      <TopBar />

      <main>
        <Hero />

        <CategoryNav />

        {/* BATIDOS - CONFIGURADOR */}
        <DrinkBuilder />

        {/* BATIDOS */}
        <ProductSection
          id="batidos"
          title="Batidos"
          description="Clásicos, cremosos y listos para convertirse en tu favorito."
          products={batidos}
        />

        {/* FRAPPES */}
        <ProductSection
          id="frappes"
          title="Frappes"
          description="Algo más cremoso, algo más indulgente."
          products={frappes}
        />

        {/* BEBIDAS FRÍAS */}
        <ProductSection
          id="frias"
          title="Bebidas frías"
          description="Refrescantes, frutales y con ese toque que te despierta."
          products={coldDrinks}
        />

        {/* BEBIDAS CALIENTES */}
        <HotDrinkBuilder />

        <ProductSection
          id="bebidas-calientes-menu"
          title="Bebidas calientes"
          description="Selecciona tu combinación y consulta las opciones disponibles."
          products={hotDrinks}
        />

        {/* ESPECIALIDADES */}
        <SpecialtiesSection
          id="especialidades"
          title="Especialidades"
          description="Postres y combinaciones para cuando quieres algo diferente."
          products={specialties}
        />

        {/* NUTRI SNACKS */}
        <ProductSection
          id="snacks"
          title="Nutri snacks"
          description="Pequeños antojos para acompañar tu bebida."
          products={snacks}
        />
      </main>
    </div>
  );
}

export default App;