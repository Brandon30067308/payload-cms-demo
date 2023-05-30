import { Block } from "payload/types"
import padding from "../fields/padding"

const StatsList: Block = {
  slug: "stats-list",
  labels: {
    singular: "Stats List",
    plural: "Stats Lists",
  },
  fields: [
    {
      name: "statsListDisplayStyle",
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
      name: "stats",
      label: "Stats",
      type: "array",
      maxRows: 4,
      required: true,
      fields: [
        {
          name: "name",
          label: "Stat Name",
          type: "text",
          required: true,
        },
        {
          name: "value",
          label: "Stat Value",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "showcaseImage",
      label: "Showcase Image",
      type: "upload",
      relationTo: "media",
    },
    padding("statsListPadding"),
  ],
}

export default StatsList
