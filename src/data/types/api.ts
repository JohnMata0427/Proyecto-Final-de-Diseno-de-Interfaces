export type ProductsTypes = {
    _id:          string;
    id:           string;
    nombre:       string;
    precio:       number;
    descripcion:  string;
    src:          string;
    categoria:    Categoria;
    subcategoria: string;
}

export enum Categoria {
    Hardware = "hardware",
    Laptops = "laptops",
    Monitores = "monitores",
    Perifericos = "perifericos",
}