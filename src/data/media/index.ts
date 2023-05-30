import path from "path"
import payload from "payload"

async function mediaData(
  name: string,
  mime: string,
  alt: string,
  mimeBase: string = "image"
) {
  return await payload.create({
    collection: "media",
    data: {
      alt,
      mime: `${mimeBase}/${mime}`,
    },
    filePath: path.resolve(__dirname, `../../../seed-media/${name}`),
  })
}

export default mediaData
