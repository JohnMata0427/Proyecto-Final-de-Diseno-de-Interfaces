import { type ProductsTypes } from './types/product';

export const getProducts = async () => {
    try {
        const response = await fetch(
            'https://tecny-api.onrender.com/api/productos',
        );

        const products = await response.json();

        return products as ProductsTypes[];
    } catch (error) {
        console.error(error);
    }
};
