import { CollectionConfig } from "payload/types"

import { isAdmin, isAdminOrEditor } from "../access"

const Employee: CollectionConfig = {
  slug: "employees",
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
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
      required: true,
      filterOptions: {
        mimeType: { contains: "image" },
      },
    },
    {
      name: "role",
      label: "Role",
      type: "text",
      required: true,
    },
  ],
}

export default Employee
