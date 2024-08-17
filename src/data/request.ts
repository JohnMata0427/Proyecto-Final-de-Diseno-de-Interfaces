import { type ProductsTypes } from "./types/product";

export const getProducts = async () => {
    const response = await fetch(
        "https://tecny-api.onrender.com/api/productos"
    );

    const products = (await response.json()) as ProductsTypes[];

    return products;
};
