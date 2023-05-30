import { CollectionConfig } from "payload/types"

import { isAdmin, isAdminOrEditor } from "../access"

const Feature: CollectionConfig = {
  slug: "features",
  access: {
    create: isAdmin,
    read: isAdminOrEditor,
    update: isAdmin,
    delete: isAdmin,
  },
  admin: {
    useAsTitle: "title",
    group: "General",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "text",
      required: true,
    },
    {
      name: "image",
      label: "Feature Image",
      type: "upload",
      relationTo: "media",
      required: true,
      filterOptions: {
        mimeType: { contains: "image" },
      },
    },
  ],
}

export default Feature
