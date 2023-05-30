import payload from "payload"

export async function featureData(
  title: string,
  description: string,
  imageId: string
) {
  return await payload.create({
    collection: "features",
    data: {
      title,
      description,
      image: imageId,
    },
  })
}

export default featureData
