import { CollectionConfig } from "payload/types"

import callToAction from "../fields/call-to-action"
import tag from "../fields/tag"
import { isAdmin, isAdminOrEditor } from "../access"

const PricingPlans: CollectionConfig = {
  slug: "pricing-plans",
  access: {
    create: isAdmin,
    read: isAdminOrEditor,
    update: isAdmin,
    delete: isAdmin,
  },
  admin: {
    group: "General",
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
      type: "richText",
      required: true,
    },
    {
      name: "price",
      label: "Plan Price",
      type: "group",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "monthly",
              type: "number",
              admin: {
                width: "50%",
              },
              required: true,
            },
            {
              name: "yearly",
              type: "number",
              admin: {
                width: "50%",
              },
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: "featuresListText",
      type: "text",
      defaultValue: "Features include:",
    },
    { ...callToAction, ...{ maxRows: 1 } },
    tag,
    {
      name: "coreFeatures",
      label: "Core Features",
      type: "array",
      required: true,
      fields: [
        {
          name: "feature",
          label: "Feature",
          type: "text",
        },
      ],
    },
  ],
}

export default PricingPlans
