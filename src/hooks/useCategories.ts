import { useEffect, useState } from "react";

export function useCategories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            const res = await fetch('http://localhost:3000/api/categories');
            const data = await res.json();
            setCategories(data);
        }

        fetchCategories();
    }, []);

    return categories;
}