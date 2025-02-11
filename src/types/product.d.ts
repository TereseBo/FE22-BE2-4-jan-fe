
interface Category {
    _id: string;
    name: string;
}

interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    categories: Category[]
    createdAt?: string;
    updatedAt?: string;
}

interface Book extends Product {
    author: string;
}

type GlobalProduct = Product | Book;