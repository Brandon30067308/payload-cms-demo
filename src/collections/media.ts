import { CollectionConfig } from "payload/types"

import { isOnlyAdminOrEditor } from "../access"

const Media: CollectionConfig = {
  slug: "media",
  access: {
    create: isOnlyAdminOrEditor,
    read: () => true,
    update: isOnlyAdminOrEditor,
    delete: isOnlyAdminOrEditor,
  },
  upload: {
    staticURL: "/media",
    staticDir: "media",
    adminThumbnail: "card",
    mimeTypes: ["image/*", "video/*"],
  },
  admin: {
    useAsTitle: "filename",
  },
  fields: [
    {
      name: "alt",
      label: "Alt Text",
      type: "text",
      required: true,
    },
  ],
}

export default Media
