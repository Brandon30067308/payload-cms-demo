import { Block } from "payload/types"
import padding from "../fields/padding"

const ImageGrid: Block = {
  slug: "image-grid",
  labels: {
    singular: "Image Grid",
    plural: "Image Grids",
  },
  fields: [
    {
      name: "images",
      label: "Images",
      type: "array",
      fields: [
        {
          name: "image",
          label: "Image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
      required: true,
      minRows: 2,
      maxRows: 4,
    },
    {
      name: "fadeSides",
      label: "Fade Sides",
      type: "checkbox",
      defaultValue: false,
    },
    padding("imageGridPadding"),
  ],
}

export default ImageGrid
