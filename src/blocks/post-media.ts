import { Block } from "payload/types"

const PostMedia: Block = {
  slug: "post-media",
  labels: {
    singular: "Media",
    plural: "Media",
  },
  fields: [
    {
      name: "postMedia",
      label: "Media",
      type: "upload",
      relationTo: "media",
      required: true,
      filterOptions: {
        mimeType: { contains: "image" },
      },
    },
    {
      name: "caption",
      label: "Caption",
      type: "text",
    },
  ],
}

export default PostMedia
