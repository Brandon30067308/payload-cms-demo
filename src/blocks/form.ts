import { Block } from "payload/types"

const Form: Block = {
  slug: "form-block",
  labels: {
    singular: "Form",
    plural: "Forms",
  },
  graphQL: {
    singularName: "FormBlock",
  },
  fields: [
    {
      name: "form",
      label: "Form",
      type: "relationship",
      relationTo: "forms",
      required: true,
    },
    {
      name: "type",
      label: "Form Type",
      type: "radio",
      options: [
        {
          value: "default",
          label: "Default",
        },
        {
          value: "signin",
          label: "Sign in",
        },
        {
          value: "requestDemo",
          label: "Request Demo",
        },
      ],
      defaultValue: "default",
      required: true,
    },
  ],
}

export default Form
