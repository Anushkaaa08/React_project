// service.jsx
export const fetchCategories = async () => {
    try {
        const response = await fetch('http://localhost:3000/categories');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

export const fetchProductsByCategoryId = async (categoryId) => {
    try {
        const response = await fetch(`http://localhost:3000/products?categoryId=${categoryId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
