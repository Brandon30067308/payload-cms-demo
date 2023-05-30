import { Block } from "payload/types"
import padding from "../fields/padding"

const FaqsList: Block = {
  slug: "faqs-list",
  labels: {
    singular: "Faqs List",
    plural: "Faqs Lists",
  },
  fields: [
    {
      name: "faqs",
      label: "Faqs",
      type: "relationship",
      relationTo: "faqs",
      hasMany: true,
      required: true,
      min: 2,
    },
    padding("faqsListPadding"),
  ],
}

export default FaqsList
