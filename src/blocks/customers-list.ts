import { Block } from "payload/types"
import padding from "../fields/padding"

const CustomersList: Block = {
  slug: "customers-list",
  labels: {
    singular: "Customers List",
    plural: "Customers Lists",
  },
  fields: [
    {
      name: "customers",
      label: "Customers",
      type: "relationship",
      relationTo: "customers",
      hasMany: true,
      required: true,
      min: 2,
    },
    {
      name: "customersListDisplayStyle",
      label: "Display Style",
      type: "radio",
      options: [
        {
          label: "Grid",
          value: "grid",
        },
        {
          label: "Flex",
          value: "flex",
        },
      ],
      defaultValue: "flex",
    },
    padding("customersListPadding"),
  ],
}

export default CustomersList
