export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }
  
  export const products: Product[] = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Termék ${i + 1}`,
    price: Math.floor(Math.random() * 10000) + 1000,
    description: `Ez a Termék ${i + 1} leírása. Kiváló minőségű termék kedvező áron.`
  }));
  
  