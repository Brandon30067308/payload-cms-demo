import { Field } from "payload/types"

import link from "./link"

const callToAction: Field = {
  name: "callToAction",
  label: "Call To Action",
  type: "array",
  fields: [
    link,
    {
      name: "size",
      label: "Size",
      type: "radio",
      options: [
        { value: "small", label: "Small" },
        { value: "medium", label: "Medium" },
        { value: "large", label: "Large" },
      ],
      defaultValue: "medium",
      required: true,
    },
    {
      name: "appendArrow",
      label: "Append Arrow",
      type: "checkbox",
      defaultValue: true,
    },
  ],
  maxRows: 2,
}

export default callToAction
