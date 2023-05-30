import { Field } from "payload/types"

const maxWidth = (
  name: string = "maxWidth",
  label: string = "Max Width",
  defaultValue: "small" | "medium" | "large" | "extraLarge" = "medium"
): Field => {
  return {
    name,
    label,
    type: "select",
    options: [
      {
        value: "small",
        label: "Small",
      },
      {
        value: "medium",
        label: "Medium",
      },
      {
        value: "large",
        label: "Large",
      },
      {
        value: "extraLarge",
        label: "Extra Large",
      },
      {
        value: "full",
        label: "Full",
      },
    ],
    required: true,
    defaultValue,
  }
}

export default maxWidth
