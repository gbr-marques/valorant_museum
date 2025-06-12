import { useEffect, useState } from "react";

export function useItems(category) {
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        async function fetchItems() {
            const res = await fetch(`https://valorant-api.com/v1/${category}`);
            const { data } = await res.json();
            setItemList(data);
        }

        fetchItems();
    }, []);

    return itemList;
}
