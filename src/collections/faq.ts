import { CollectionConfig } from "payload/types"

import { isAdmin, isAdminOrEditor } from "../access"

const Faq: CollectionConfig = {
  slug: "faqs",
  access: {
    create: isAdmin,
    read: isAdminOrEditor,
    update: isAdmin,
    delete: isAdmin,
  },
  admin: {
    useAsTitle: "question",
  },
  fields: [
    {
      name: "question",
      label: "Question",
      type: "text",
      required: true,
    },
    {
      name: "answer",
      label: "Answer",
      type: "richText",
      admin: {
        elements: ["indent", "link", "ol", "ul", "blockquote"],
      },
      required: true,
    },
  ],
}

export default Faq
