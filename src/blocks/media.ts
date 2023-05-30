import { Block } from "payload/types"

import padding from "../fields/padding"
import maxWidth from "../fields/max-width"
import link from "../fields/link"

const Media: Block = {
  slug: "media-block",
  labels: {
    singular: "Media",
    plural: "Media",
  },
  fields: [
    {
      name: "media",
      label: "Media",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "mediaLink",
      label: "Media Link",
      type: "array",
      fields: [link],
      maxRows: 1,
    },
    maxWidth("mediaMaxWidth"),
    padding("mediaPadding"),
  ],
}

export default Media
