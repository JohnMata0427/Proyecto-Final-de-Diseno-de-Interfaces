import { type ProductsTypes } from "./types/api";

export const getProducts = async () => {
    const response = await fetch("http://localhost:9000/api/productos");

    const products = (await response.json()) as ProductsTypes[];

    return products;
};
