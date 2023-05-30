import { Block } from "payload/types"
import padding from "../fields/padding"

const FeaturesList: Block = {
  slug: "features-list",
  labels: {
    singular: "Features List",
    plural: "Features Lists",
  },
  fields: [
    {
      name: "features",
      label: "Features",
      type: "relationship",
      relationTo: "features",
      hasMany: true,
      required: true,
      min: 1,
      max: 3,
    },
    padding("featuresListPadding"),
  ],
}

export default FeaturesList
