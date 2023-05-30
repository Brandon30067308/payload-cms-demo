import { Field } from "payload/types"

const background = (
  name: string = "background",
  label: string = "Background"
): Field => {
  return {
    name,
    label,
    type: "group",
    fields: [
      {
        name: "type",
        label: "Type",
        type: "radio",
        options: [
          {
            label: "Clipped",
            value: "clipped",
          },
          {
            label: "Straight",
            value: "straight",
          },
        ],
        defaultValue: "straight",
      },
      {
        name: "fillType",
        label: "Fill Type",
        type: "radio",
        options: [
          {
            label: "Color",
            value: "color",
          },
          {
            label: "Image",
            value: "image",
          },
          {
            label: "None",
            value: "none",
          },
        ],
        defaultValue: "color",
      },
      {
        name: "color",
        label: "Color",
        type: "select",
        required: true,
        options: [
          {
            label: "None",
            value: "none",
          },
          {
            label: "Dark Slate",
            value: "darkSlate",
          },
          {
            label: "Light Slate",
            value: "lightSlate",
          },
          {
            label: "White",
            value: "white",
          },
        ],
        defaultValue: "white",
        admin: {
          condition: (_, siblingData) => siblingData?.fillType === "color",
        },
      },
      {
        name: "image",
        label: "Image",
        type: "upload",
        relationTo: "media",
        required: true,
        admin: {
          condition: (_, siblingData) => siblingData?.fillType === "image",
        },
      },
      {
        name: "height",
        label: "Height",
        type: "radio",
        options: [
          {
            label: "Full",
            value: "full",
          },
          {
            label: "Half",
            value: "half",
          },
          {
            label: "Fill Small",
            value: "fillSmall",
          },
          {
            label: "Fill Medium",
            value: "fillMedium",
          },
          {
            label: "Fill Large",
            value: "fillLarge",
          },

          {
            label: "Overflow Small",
            value: "overflowSmall",
          },
          {
            label: "Overflow Large",
            value: "overflowLarge",
          },
        ],
        defaultValue: "full",
      },
    ],
  }
}

export default background
