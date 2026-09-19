export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number | null;
  image?: string;
  type?: string;
  drinkColor?: string;
}

/* export interface BuilderOption {
  id: string;
  name: string;
  description?: string;
}

export interface BuilderStep {
  id: number;
  name: string;
  options: BuilderOption[];
} */
export interface BuilderOption {
  id: string;
  name: string;
  description?: string;
}

export interface BuilderStep {
  id: number;
  name: string;
  options: BuilderOption[];

  /*
    Número máximo de opciones que se pueden elegir
    en este paso.
  */
  maxSelections?: number;
}

export const frappes: Product[] = [
  {
    id: "choco-moka",
    name: "Choco Moka",
    description: "Chocolate · café · hielo",
    price: 85,
    type: "frappe",
    drinkColor: "#8a5938",
  },
  {
    id: "vainilla-caramel",
    name: "Vainilla Caramel",
    description: "Vainilla · caramelo",
    price: 85,
    type: "frappe",
    drinkColor: "#ead7a7",
  },
  {
    id: "choco-banana",
    name: "Choco Banana",
    description: "Chocolate · plátano",
    price: 85,
    type: "frappe",
    drinkColor: "#e8d0a0",
  },
  {
    id: "cookies",
    name: "Cookies",
    description: "Galleta · crema",
    price: 85,
    type: "frappe",
    drinkColor: "#e7d7bd",
  },
];