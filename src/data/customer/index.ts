import payload from "payload"

export async function customerData(name: string, logoImageId: string) {
  return await payload.create({
    collection: "customers",
    data: {
      name,
      logo: logoImageId,
    },
  })
}

export default customerData
