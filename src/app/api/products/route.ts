import { products } from "./data";

// GEt
export async function GET() {
    return Response.json(products)
    
}

// POST

export async function POST(request: Request) {
    const product = await request.json();
    const newProduct = {
        id: products.length + 1,
        name: product.name
    }

    products.push(newProduct);

    return new Response(JSON.stringify(newProduct), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 200
    })
    
}