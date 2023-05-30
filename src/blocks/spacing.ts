import { Block } from "payload/types"

import spacingOptions from "../utils/spacing-options"

const Spacing: Block = {
  slug: "spacing",
  labels: {
    singular: "Spacing",
    plural: "Spacings",
  },
  fields: [
    {
      name: "spacing",
      label: "Spacing",
      type: "group",
      fields: [
        {
          name: "horizontal",
          label: "Horizontal",
          type: "group",
          fields: [
            {
              name: "large",
              label: "Large Screens",
              type: "select",
              options: spacingOptions,
              defaultValue: "none",
            },
            {
              name: "small",
              label: "Small Screens",
              type: "select",
              options: spacingOptions,
              defaultValue: "none",
            },
          ],
          admin: {
            style: {
              paddingBottom: "1rem",
            },
          },
        },
        {
          name: "vertical",
          label: "Vertical",
          type: "group",
          fields: [
            {
              name: "large",
              label: "Large Screens",
              type: "select",
              options: spacingOptions,
              defaultValue: "none",
            },
            {
              name: "small",
              label: "Small Screens",
              type: "select",
              options: spacingOptions,
              defaultValue: "none",
            },
          ],
          admin: {
            style: {
              paddingBottom: "1rem",
            },
          },
        },
      ],
    },
  ],
}

export default Spacing
