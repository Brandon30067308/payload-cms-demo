import { CollectionConfig } from "payload/types"

import { isAdmin, isAdminOrEditorOrNotArchived } from "../access"

const BlogCategory: CollectionConfig = {
  slug: "blog-categories",
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
      label: "Category Name",
      type: "text",
      required: true,
    },
    {
      name: "archived",
      type: "checkbox",
      defaultValue: false,
      required: true,
      admin: {
        description:
          "Archiving filters it from being an option in the blog posts collection",
      },
    },
  ],
}

export default BlogCategory
