export async function getProducts() {
    const response = await fetch('http://localhost:9000/api/productos');
    const data = await response.json();
    return data;
}

const products = await getProducts();

export default products;