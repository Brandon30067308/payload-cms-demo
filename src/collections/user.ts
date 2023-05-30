import { CollectionConfig } from "payload/types"

import {
  isAdmin,
  isAdminFieldLevel,
  isAdminOrEditor,
  isAdminOrSelf,
} from "../access"

const Users: CollectionConfig = {
  slug: "users",
  auth: {
    useAPIKey: true,
  },
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: isAdminOrSelf,
    create: isAdmin,
    delete: isAdmin,
    update: isAdminOrEditor,
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      saveToJWT: true,
    },
    {
      name: "roles",
      saveToJWT: true,
      type: "select",
      hasMany: true,
      defaultValue: ["editor"],
      options: [
        {
          label: "Editor",
          value: "editor",
        },
        {
          label: "Admin",
          value: "admin",
        },
      ],
      access: {
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
      },
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
  ],
}

export default Users
