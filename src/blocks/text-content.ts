import { Block } from "payload/types"

import maxWidth from "../fields/max-width"
import padding from "../fields/padding"
import GreenText from "../rich-text/leaves/GreenText"

const TextContent: Block = {
  slug: "text-content",
  labels: {
    singular: "Text Content",
    plural: "Text Contents",
  },
  fields: [
    {
      name: "content",
      label: "Content",
      type: "richText",
      required: true,
      admin: {
        leaves: [GreenText],
      },
    },
    {
      name: "decoration",
      label: "Text Decoration",
      type: "checkbox",
      defaultValue: false,
    },
    maxWidth("textContentMaxWidth"),
    {
      type: "row",
      fields: [
        {
          name: "width",
          label: "Width",
          type: "select",
          required: true,
          admin: {
            width: "50%",
          },
          options: [
            {
              label: "One Quarter",
              value: "oneQuarter",
            },
            {
              label: "Half",
              value: "half",
            },
            {
              label: "Three Quarter",
              value: "threeQuarter",
            },
            {
              label: "Full",
              value: "full",
            },
          ],
          defaultValue: "full",
        },
        {
          name: "textAlignment",
          label: "Alignment",
          type: "select",
          defaultValue: "center",
          admin: {
            width: "50%",
          },
          required: true,
          options: [
            {
              label: "Left",
              value: "left",
            },
            {
              label: "Center",
              value: "center",
            },
            {
              label: "Right",
              value: "right",
            },
          ],
        },
      ],
    },
    {
      name: "contentPlacement",
      label: "Content Placement",
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
        {
          label: "Right",
          value: "right",
        },
      ],
      defaultValue: "center",
    },
    {
      name: "textSize",
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
    padding("textContentPadding"),
  ],
}

export default TextContent
