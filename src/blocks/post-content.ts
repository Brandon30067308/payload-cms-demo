import { Block } from "payload/types"

const PostContent: Block = {
  slug: "post-content",
  labels: {
    singular: "Text Content",
    plural: "Text Contents",
  },
  fields: [
    {
      name: "postContent",
      label: "Text Content",
      type: "richText",
      required: true,
      admin: {
        elements: [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "indent",
          "link",
          "ol",
          "ul",
          "blockquote",
        ],
      },
    },
  ],
}

export default PostContent
