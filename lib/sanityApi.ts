import { client } from "@/sanity/lib/client"

export const fetchFromSanity = async (query: string) => { return await client.fetch(query) }

