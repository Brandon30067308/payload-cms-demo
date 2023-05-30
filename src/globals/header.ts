import { GlobalConfig } from "payload/types"

import link from "../fields/link"
import { isAdmin, isAdminOrEditor } from "../access"

const Header: GlobalConfig = {
  slug: "header",
  label: "Header",
  access: {
    read: isAdminOrEditor,
    update: isAdmin,
  },
  fields: [
    {
      name: "links",
      label: "Header Links",
      type: "array",
      fields: [link],
    },
  ],
}

export default Header
