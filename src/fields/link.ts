import { Field } from "payload/types"

const link: Field = {
  name: "link",
  type: "group",
  fields: [
    {
      name: "type",
      type: "radio",
      options: [
        {
          value: "page",
          label: "Page",
        },
        {
          value: "external",
          label: "External link",
        },
        {
          value: "multiple",
          label: "Multiple links",
        },
      ],
      defaultValue: "page",
      admin: {
        layout: "horizontal",
      },
    },
    {
      name: "label",
      label: "Label",
      type: "text",
      required: true,
    },
    {
      name: "page",
      type: "text",
      label: "Page to link to",
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData?.type === "page",
      },
    },
    {
      name: "url",
      type: "text",
      label: "Exteral URL to link to",
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData?.type === "external",
      },
    },
    {
      name: "sublinks",
      labels: {
        singular: "Sublink",
        plural: "Sublinks",
      },
      type: "array",
      required: true,
      fields: [
        {
          name: "type",
          type: "radio",
          options: [
            {
              value: "page",
              label: "Page",
            },
            {
              value: "external",
              label: "External link",
            },
          ],
          defaultValue: "page",
        },
        {
          type: "row",
          fields: [
            {
              name: "label",
              type: "text",
              admin: {
                width: "50%",
              },
            },
            {
              name: "url",
              type: "text",
              label: "Exteral URL to link to",
              required: true,
              admin: {
                condition: (_, siblingData) => siblingData?.type === "external",
                width: "50%",
              },
            },
            {
              name: "page",
              type: "text",
              label: "Page to link to",
              required: true,
              admin: {
                condition: (_, siblingData) => siblingData?.type === "page",
                width: "50%",
              },
            },
          ],
        },
      ],
      admin: {
        condition: (_, siblingData) => siblingData?.type === "multiple",
      },
    },
  ],
}

export default link
