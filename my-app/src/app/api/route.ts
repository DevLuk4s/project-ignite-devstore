import data from '../api/products/data.json'

export async function GET() {
  return Response.json(data.products)
}
