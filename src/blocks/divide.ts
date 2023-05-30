import { Block } from "payload/types"

const Divide: Block = {
  slug: "divide",
  labels: {
    singular: "Divide",
    plural: "Divides",
  },
  fields: [
    {
      name: "divideStyle",
      label: "Display Style",
      type: "radio",
      options: [
        {
          label: "Horizontal",
          value: "horizontal",
        },
        {
          label: "Vertical",
          value: "vertical",
        },
      ],
      defaultValue: "horizontal",
    },
    {
      name: "hideOnSmallScreens",
      label: "Hide On Small Screens",
      type: "checkbox",
      defaultValue: false,
    },
  ],
}

export default Divide
