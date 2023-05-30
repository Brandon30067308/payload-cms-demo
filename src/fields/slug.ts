import { Field } from "payload/types"

import formatSlug from "../utils/format-slug"

const slug: Field = {
  name: "slug",
  label: "Slug",
  type: "text",
  admin: {
    position: "sidebar",
  },
  hooks: {
    beforeValidate: [formatSlug("title")],
  },
}

export default slug
