import { Block } from "payload/types"
import padding from "../fields/padding"

const ImageTabs: Block = {
  slug: "image-tabs",
  labels: {
    singular: "Image Tabs",
    plural: "Image Tabs",
  },
  fields: [
    {
      name: "displayStyle",
      label: "Display Style",
      type: "radio",
      options: [
        {
          label: "Detailed",
          value: "detailed",
        },
        {
          label: "Simplified",
          value: "simplified",
        },
      ],
      defaultValue: "simplified",
    },
    {
      name: "leadText",
      label: "Lead Text",
      type: "richText",
    },
    {
      name: "tabs",
      label: "Tabs",
      type: "array",
      fields: [
        {
          name: "controlText",
          label: "Control Text",
          type: "richText",
          required: true,
          admin: {
            elements: [],
          },
        },
        {
          name: "controlIcon",
          label: "Control Icon",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "tabImage",
          label: "Tab Image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
    padding("imageTabsPadding"),
  ],
}

export default ImageTabs
