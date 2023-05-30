import { GlobalConfig } from "payload/types"

import link from "../fields/link"
import { isAdmin, isAdminOrEditor } from "../access"

const Footer: GlobalConfig = {
  slug: "footer",
  label: "Footer",
  access: {
    read: isAdminOrEditor,
    update: isAdmin,
  },
  fields: [
    {
      name: "text",
      label: "Footer Text",
      type: "textarea",
    },
    {
      name: "items",
      labels: {
        singular: "Footer Item",
        plural: "Footer Items",
      },
      type: "array",
      fields: [
        {
          name: "title",
          label: "Item Title",
          type: "text",
        },
        {
          name: "links",
          label: "Links",
          type: "array",
          fields: [link],
        },
      ],
    },
  ],
}

export default Footer
