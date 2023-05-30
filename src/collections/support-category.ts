import { CollectionConfig } from "payload/types"

import { isAdmin, isAdminOrEditorOrNotArchived } from "../access"

const SupportCategory: CollectionConfig = {
  slug: "support-categories",
  access: {
    create: isAdmin,
    read: isAdminOrEditorOrNotArchived,
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
      name: "description",
      label: "Description",
      type: "textarea",
      required: true,
    },
    {
      name: "icon",
      label: "Icon",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "archived",
      type: "checkbox",
      defaultValue: false,
      required: true,
      admin: {
        description:
          "Archiving filters it from being an option in the support articles collection",
      },
    },
  ],
}

export default SupportCategory
