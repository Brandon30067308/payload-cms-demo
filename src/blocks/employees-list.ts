import { Block } from "payload/types"

import padding from "../fields/padding"

const EmployeesList: Block = {
  slug: "employees-list",
  labels: {
    singular: "Employees List",
    plural: "Employees Lists",
  },
  fields: [
    {
      name: "employees",
      label: "Emloyees",
      type: "relationship",
      relationTo: "employees",
      hasMany: true,
      required: true,
      min: 1,
    },
    padding("employeesListPadding"),
  ],
}

export default EmployeesList
