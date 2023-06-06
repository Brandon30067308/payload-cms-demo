import { Block } from "payload/types"

import callToAction from "../fields/call-to-action"
import padding from "../fields/padding"

const CallToAction: Block = {
  slug: "call-to-action",
  labels: {
    singular: "Call To Action",
    plural: "Call To Actions",
  },
  fields: [callToAction, padding("callToActionPadding")],
}

export default CallToAction
