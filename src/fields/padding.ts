import { Field } from "payload/types"

import spacingOptions from "../utils/spacing-options"

const padding = function (
  name?: string,
  label = "Padding",
  defaultValue: {
    top?: string
    bottom?: string
    left?: string
    right?: string
  } = {
    top: "mediumLarge",
    bottom: "mediumLarge",
    left: "none",
    right: "none",
  }
): Field {
  name = name ?? "padding"

  return {
    name,
    label,
    type: "group",
    fields: [
      {
        type: "row",
        fields: [
          {
            name: "top",
            type: "select",
            options: spacingOptions,
            required: false,
            defaultValue: defaultValue.top,
            admin: {
              width: "50%",
            },
          },
          {
            name: "bottom",
            type: "select",
            options: spacingOptions,
            required: false,
            defaultValue: defaultValue.bottom,
            admin: {
              width: "50%",
            },
          },
        ],
      },
      {
        type: "row",
        fields: [
          {
            name: "left",
            type: "select",
            options: spacingOptions,
            required: false,
            defaultValue: defaultValue.left,
            admin: {
              width: "50%",
            },
          },
          {
            name: "right",
            type: "select",
            options: spacingOptions,
            required: false,
            defaultValue: defaultValue.right,
            admin: {
              width: "50%",
            },
          },
        ],
      },
    ],
  }
}

export default padding
