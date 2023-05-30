import { GlobalConfig } from "payload/types"

import { isAdmin, isAdminOrEditor } from "../access"

const Newsletter: GlobalConfig = {
  slug: "newsletter",
  label: "Newsletter",
  access: {
    read: isAdminOrEditor,
    update: isAdmin,
  },
  fields: [
    {
      name: "form",
      type: "relationship",
      relationTo: "forms",
      required: true,
    },
  ],
}

export default Newsletter
