export default async function getProductId(userId: string) {
    const res = await fetch(`https://fakestoreapi.com/products/${userId}`)
    if (!res.ok) return undefined
    return res.json()
}