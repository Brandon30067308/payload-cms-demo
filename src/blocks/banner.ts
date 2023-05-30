import { Block } from "payload/types"

import padding from "../fields/padding"
import callToAction from "../fields/call-to-action"

const Banner: Block = {
  slug: "banner",
  labels: {
    singular: "Banner",
    plural: "Banner",
  },
  fields: [
    {
      name: "layout",
      type: "radio",
      options: [
        {
          label: "Row",
          value: "row",
        },
        {
          label: "Column",
          value: "column",
        },
      ],
      defaultValue: "column",
    },
    {
      name: "shadowType",
      label: "Shadow Type",
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
      name: "textContent",
      label: "Text Content",
      type: "richText",
    },
    { ...callToAction, ...{ name: "bannerCallToAction" } },
    {
      name: "tag",
      label: "Tag",
      type: "checkbox",
      defaultValue: true,
    },
    {
      name: "tagText",
      label: "Tag Text",
      type: "text",
      admin: {
        condition: (_, siblingData) => siblingData?.tag === true,
      },
    },
    {
      name: "tagPosition",
      label: "Tag Position",
      type: "radio",
      options: [
        {
          label: "Left",
          value: "left",
        },
        {
          label: "Right",
          value: "right",
        },
      ],
      admin: {
        condition: (_, siblingData) => siblingData?.tag === true,
      },
    },
    padding("bannerPadding"),
  ],
}

export default Banner
