import { Block } from "payload/types"
import padding from "../fields/padding"

const PricingTables: Block = {
  slug: "pricing-tables",
  labels: {
    singular: "Pricing Tables",
    plural: "Pricing Tables",
  },
  fields: [
    {
      name: "pricingPlans",
      label: "Pricing Plans",
      type: "relationship",
      relationTo: "pricing-plans",
      hasMany: true,
      required: true,
    },
    {
      name: "pricingTablesDisplayStyle",
      label: "Display Style",
      type: "radio",
      options: [
        {
          label: "Detailed",
          value: "detailed",
        },
        {
          label: "Simplified",
          value: "simplified",
        },
      ],
      defaultValue: "simplified",
    },
    {
      name: "detailedFeatures",
      label: "Detailed Features",
      type: "array",
      admin: {
        condition: (_, siblingData) =>
          siblingData.pricingTablesDisplayStyle === "detailed",
      },
      required: true,
      fields: [
        {
          name: "featureName",
          label: "Feature Name",
          type: "text",
          required: true,
        },
        {
          name: "tag",
          label: "Feature Tag",
          type: "text",
        },
        {
          name: "planSpecs",
          label: "Pricing Plan Specifications",
          type: "array",
          required: true,
          minRows: 1,
          fields: [
            {
              name: "pricingPlan",
              label: "Pricing Plan",
              type: "relationship",
              relationTo: "pricing-plans",
              required: true,
            },
            {
              name: "featureSpecs",
              label: "Feature Specifications",
              type: "group",
              fields: [
                {
                  name: "includesFeature",
                  label: "Includes Feature",
                  type: "checkbox",
                  defaultValue: true,
                },
                {
                  name: "specDetails",
                  label: "Specification Details",
                  type: "text",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "priceDifference",
      label: "Percentage Price Difference",
      type: "number",
    },
    padding("pricingTablesPadding"),
  ],
}

export default PricingTables
