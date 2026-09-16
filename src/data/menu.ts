import type { BuilderStep, Product } from "../types/menu";

/* =========================================================
   IMPORTS PARA IMAGENES
   ========================================================= */
import chocoAvellana from "../assets/images/batidos/chocoAvellana.png";
import arrozLeche from "../assets/images/batidos/arrozLeche.png";

import chocoMoka from "../assets/images/frappes/chocoMoka.png";
import vainillaCaramel from "../assets/images/frappes/vainillaCaramel.png";

import explosionTropical from "../assets/images/bebidasF/explosionTropical.png";
import poncheFrutas from "../assets/images/bebidasF/poncheFrutas.png";

import capuchino from "../assets/images/bebidasC/capuchino.png";
import poncheFrutasCaliente from "../assets/images/bebidasC/poncheFrutas.png";

import arrozConLecheEspecialidad from "../assets/images/especialidades/arrozLeche.png";
import paylimon from "../assets/images/especialidades/payLimon.png";

import barraAvellana from "../assets/images/snacks/barraAvellana.png";
import barraChocolate from "../assets/images/snacks/barraChoco.png";
import barraLimon from "../assets/images/snacks/barraLimon.png";
import donas from "../assets/images/snacks/donas.png";
import panques from "../assets/images/snacks/panque.png";
import wafflesDulces from "../assets/images/snacks/waffleDulce.png";
import wafflesSalados from "../assets/images/snacks/waffleSalado.png";


/* =========================================================
   BUILDER — ARMA TU BATIDO
   ========================================================= */

export const smoothieSteps: BuilderStep[] = [
  {
    id: 1,
    name: "Base",
    options: [
      {
        id: "choco-avellana",
        name: "Choco Avellana",
      },
      {
        id: "fresa",
        name: "Fresa",
      },
      {
        id: "vainilla",
        name: "Vainilla",
      },
      {
        id: "arroz-con-leche",
        name: "Arroz con leche",
      },
      {
        id: "dulce-de-leche",
        name: "Dulce de leche",
      },
      {
        id: "frutas-tropicales",
        name: "Frutas tropicales",
      },
      {
        id: "pina-colada",
        name: "Piña colada",
      },
      {
        id: "coco",
        name: "Coco",
      },
      {
        id: "platano",
        name: "Plátano",
      },
      {
        id: "galleta",
        name: "Galleta",
      },
    ],
  },

  {
    id: 2,
    name: "Aloe",
    options: [
      {
        id: "aloe-mango",
        name: "Mango",
      },
      {
        id: "aloe-arandanos",
        name: "Arándanos",
      },
      {
        id: "aloe-mandarina",
        name: "Mandarina",
      },
      {
        id: "aloe-uva",
        name: "Uva",
      },
      {
        id: "aloe-natural",
        name: "Natural",
      },
    ],
  },

  {
    id: 3,
    name: "Té",
    options: [
      {
        id: "jamaica-pitaya",
        name: "Jamaica con pitaya",
      },
      {
        id: "limon",
        name: "Limón",
      },
      {
        id: "chai",
        name: "Chai",
      },
      {
        id: "hierbas",
        name: "Hierbas",
      },
      {
        id: "granada",
        name: "Granada",
      },
      {
        id: "menta",
        name: "Menta",
      },
      {
        id: "nrg",
        name: "NRG",
      },
      {
        id: "natural-g",
        name: "Natural G",
      },
      {
        id: "manzana-verde",
        name: "Manzana verde",
      },
    ],
  },
];

/* =========================================================
   BATIDOS
   ========================================================= */

export const batidos: Product[] = [
  {
    id: "batido-choco-avellana",
    name: "Choco avellana",
    description: "Chocolate · avellana",
    //category: "batidos",
    price: null,
    image: chocoAvellana,
  },
  {
    id: "batido-fresa",
    name: "Fresa",
    description: "Fresa",
    //category: "batidos",
    price: null,
  },
  {
    id: "batido-vainilla",
    name: "Vainilla",
    description: "Vainilla",
   //category: "batidos",
    price: null,
  },
  {
    id: "batido-arroz-leche",
    name: "Arroz con leche",
    description: "Arroz con leche",
    //category: "batidos",
    price: null,
    image: arrozLeche,
  },
  {
    id: "batido-dulce-leche",
    name: "Dulce de leche",
    description: "Dulce de leche",
    //category: "batidos",
    price: null,
  },
  {
    id: "batido-frutas-tropicales",
    name: "Frutas tropicales",
    description: "Frutas tropicales",
    //category: "batidos",
    price: null,
  },
  {
    id: "batido-pina-colada",
    name: "Piña colada",
    description: "Piña · coco",
    //category: "batidos",
    price: null,
  },
  {
    id: "batido-coco",
    name: "Coco",
    description: "Coco",
    //category: "batidos",
    price: null,
  },
  {
    id: "batido-platano",
    name: "Plátano",
    description: "Plátano",
    //category: "batidos",
    price: null,
  },
  {
    id: "batido-galleta",
    name: "Galleta",
    description: "Galleta · crema",
    //category: "batidos",
    price: null,
  },
];

/* =========================================================
   FRAPPES
   ========================================================= */

export const frappes: Product[] = [
  {
    id: "frappe-choco-moka",
    name: "Choco moka",
    description: "Chocolate · café · hielo",
    //category: "frappes",
    price: 85,
    image: chocoMoka,
  },
  {
    id: "frappe-vainilla-caramel",
    name: "Vainilla caramel",
    description: "Vainilla · caramelo",
    //category: "frappes",
    price: 85,
    image: vainillaCaramel,
  },
  {
    id: "frappe-choco-banana",
    name: "Choco banana",
    description: "Chocolate · plátano",
    //category: "frappes",
    price: 85,
  },
  {
    id: "frappe-cookies",
    name: "Cookies",
    description: "Galleta · crema",
    //category: "frappes",
    price: 85,
  },
];

/* =========================================================
   BEBIDAS FRÍAS — MEGA-TE
   ========================================================= */

export const coldDrinks: Product[] = [
  {
    id: "mega-te-explosion-tropical",
    name: "Explosión tropical",
    description: "Mega-TE",
    //category: "frias",
    price: 110,
    image: explosionTropical,
  },
  {
    id: "mega-te-moras-bosque",
    name: "Moras del bosque",
    description: "Mega-TE",
    //category: "frias",
    price: 110,
  },
  {
    id: "mega-te-cr7",
    name: "CR7",
    description: "Mega-TE",
    //category: "frias",
    price: 110,
  },
  {
    id: "mega-te-colageno",
    name: "Colágeno",
    description: "Mega-TE",
    //category: "frias",
    price: 110,
  },
  {
    id: "mega-te-nitewores",
    name: "Nitewores",
    description: "Mega-TE",
    //category: "frias",
    price: 110,
  },
  {
    id: "mega-te-ponche-frutas",
    name: "Ponche de frutas",
    description: "Mega-TE",
    //category: "frias",
    price: 110,
    image: poncheFrutas,
  },
  {
    id: "mega-te-mango-durazno",
    name: "Mango durazno",
    description: "Mega-TE",
    //category: "frias",
    price: 110,
  },
  {
    id: "mega-te-te-aloe",
    name: "Té + aloe",
    description: "Mega-TE",
    //category: "frias",
    price: 110,
  },
  {
    id: "mega-te-liftoff",
    name: "Liftoff",
    description: "Mega-TE",
    //category: "frias",
    price: 110,
  },
  {
    id: "mega-te-probioticos",
    name: "Probióticos",
    description: "Mega-TE",
    //category: "frias",
    price: 110,
  },
  {
    id: "mega-te-creatina",
    name: "Creatina",
    description: "Mega-TE",
    //category: "frias",
    price: 110,
  },
];

/* =========================================================
   BEBIDAS CALIENTES
   ========================================================= */

export const hotDrinks: Product[] = [
  // Té + aloe
  {
    id: "protein-mix",
    name: "Protein mix",
    //category: "calientes",
    price: 110,
  },
  {
    id: "ponche-frutas-caliente",
    name: "Ponche de frutas",
    //category: "calientes",
    price: 110,
    image: poncheFrutasCaliente,
  },
  {
    id: "mango-durazno-caliente",
    name: "Mango durazno",
    //category: "calientes",
    price: 110,
  },
  {
    id: "glow-cd",
    name: "Glow CD",
    description: "Antigripal",
    //category: "calientes",
    price: 85,
  },
  {
    id: "sueno-profundo",
    name: "Sueño profundo",
    //category: "calientes",
    price: 110,
  },

  // Con fibra
  {
    id: "fibra-manzana",
    name: "Manzana",
    description: "Con fibra",
    //category: "calientes",
    price: 110,
  },
  {
    id: "fibra-pina-colada",
    name: "Piña colada",
    description: "Con fibra",
    //category: "calientes",
    price: 110,
  },

  // Con café
  {
    id: "cafe",
    name: "Café",
    //category: "calientes",
    price: 30,
  },
  {
    id: "capuchino",
    name: "Capuchino",
    //category: "calientes",
    price: 60,
    image: capuchino,
  },
  {
    id: "moka",
    name: "Moka",
    //category: "calientes",
    price: null,
  },
  {
    id: "latte",
    name: "Latte",
    //category: "calientes",
    price: 68,
  },
];

/* =========================================================
   OPCIONES DE TÉ — BEBIDAS CALIENTES
   ========================================================= */

export const hotTeaOptions = [
  "Jamaica con pitaya",
  "Limón",
  "Chai",
  "Hierbas",
  "Granada",
  "Menta",
  "NRG",
  "Natural G",
  "Manzana verde",
];

/* =========================================================
   ESPECIALIDADES
   ========================================================= */

export const specialties: Product[] = [
  {
    id: "pay-limon",
    name: "Pay de limón",
    //category: "especialidades",
    price: 140,
    image: paylimon,
  },
  {
    id: "frutos-rojos",
    name: "Frutos rojos",
    //category: "especialidades",
    price: 140,
  },
  {
    id: "pay-fresa",
    name: "Pay de fresa",
    //category: "especialidades",
    price: 140,
  },
  {
    id: "manzana-caramel",
    name: "Manzana caramel",
    //category: "especialidades",
    price: 140,
  },
  {
    id: "trufa",
    name: "Trufa",
    //category: "especialidades",
    price: 140,
  },
  {
    id: "arroz-con-leche-especialidad",
    name: "Arroz con leche",
    //category: "especialidades",
    price: 140,
    image: arrozConLecheEspecialidad,
  },
];

/* =========================================================
   NUTRI SNACKS
   ========================================================= */

export const snacks: Product[] = [
  // Waffles
  {
    id: "waffles-salados",
    name: "Waffles salados",
    description: "Jamón y queso",
    //category: "snacks",
    price: 95,
    image: wafflesSalados,
  },
  {
    id: "waffles-dulces",
    name: "Waffles dulces",
    description: "Fruta + miel + chocolate",
    //category: "snacks",
    price: 95,
    image: wafflesDulces,
  },

  // Panques
  {
    id: "panques",
    name: "Panques",
    description: "Con fruta, miel o chocolate",
    //category: "snacks",
    price: null,
    image: panques,
  },

  // Mini donas
  {
    id: "mini-donas-7",
    name: "Mini donas",
    description: "7 piezas",
    //category: "snacks",
    price: 60,
    image: donas,
  },
  {
    id: "mini-donas-10",
    name: "Mini donas",
    description: "10 piezas",
    //category: "snacks",
    price: 75,
    image: donas,
  },

  // Barras
  {
    id: "barra-chocolate-almendra",
    name: "Barra",
    description: "Chocolate con almendra",
    //category: "snacks",
    price: null,
    image: barraAvellana,
  },
  {
    id: "barra-chocolate-limon",
    name: "Barra",
    description: "Chocolate con limón",
    //category: "snacks",
    price: null,
    image: barraLimon,
  },
  {
    id: "barra-chocolate",
    name: "Barra",
    description: "Solo chocolate",
    //category: "snacks",
    price: null,
    image: barraChocolate,
  },
];

/* =========================================================
   EXTRAS
   ========================================================= */

export const extras: Product[] = [
  {
    id: "proteina",
    name: "Proteína",
    //category: "extras",
    price: 20,
  },
  {
    id: "colageno",
    name: "Colágeno",
    //category: "extras",
    price: 45,
  },
];