import { apiURL } from "@/settings"

export default async function getItems( type: string ) {
    try {
        const response = await fetch(`${apiURL}/${type}`)

        const data = await response.json()

        localStorage.setItem("items", JSON.stringify(data))

        return {
            success: true,
            users: data,
            message: "Successfully fetched users",
        }
        
    } catch (err) {
        return {
            err, 
            message: "An error occurred while trying to get users"
        }
    }
}