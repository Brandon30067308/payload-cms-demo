import { Block } from "payload/types"

import padding from "../fields/padding"

const ContentGrid: Block = {
  slug: "content-grid",
  labels: {
    singular: "Content Grid",
    plural: "Content Grids",
  },
  fields: [
    {
      name: "contents",
      label: "Contents",
      type: "array",
      fields: [
        {
          name: "image",
          label: "Image",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "heading",
          label: "Heading",
          type: "text",
          required: true,
        },
        {
          name: "content",
          label: "Text Content",
          type: "richText",
          required: true,
        },
      ],
    },
    {
      name: "contentGridTextSize",
      label: "Text Size",
      type: "radio",
      options: [
        {
          label: "Small",
          value: "small",
        },
        {
          label: "Medium",
          value: "medium",
        },
        {
          label: "Large",
          value: "large",
        },
      ],
      defaultValue: "medium",
    },
    {
      name: "contentAlignment",
      label: "Alignment",
      type: "radio",
      options: [
        {
          label: "Left",
          value: "left",
        },
        {
          label: "Center",
          value: "center",
        },
      ],
      defaultValue: "left",
    },
    {
      name: "lineDecoration",
      label: "Line Decoration",
      type: "checkbox",
      defaultValue: false,
    },
    padding("contentGridPadding"),
  ],
}

export default ContentGrid
