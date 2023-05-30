import { CollectionConfig } from "payload/types"

import { isAdmin, isAdminOrEditor } from "../access"

const Customer: CollectionConfig = {
  slug: "customers",
  access: {
    create: isAdmin,
    read: isAdminOrEditor,
    update: isAdmin,
    delete: isAdmin,
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      label: "Company Name",
      type: "text",
      required: true,
    },
    {
      name: "logo",
      label: "Company Logo",
      type: "upload",
      relationTo: "media",
      required: true,
      filterOptions: {
        mimeType: { contains: "image" },
      },
    },
  ],
}

export default Customer
