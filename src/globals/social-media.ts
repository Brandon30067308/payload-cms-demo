import { GlobalConfig } from "payload/types"

import { isAdmin, isAdminOrEditor } from "../access"

const SocialMedia: GlobalConfig = {
  slug: "social-media",
  label: "Social Media",
  access: {
    read: isAdminOrEditor,
    update: isAdmin,
  },
  fields: [
    {
      name: "items",
      label: "Social Media Networks",
      type: "array",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "label",
              label: "Label",
              type: "select",
              options: [
                {
                  label: "Twitter",
                  value: "twitter",
                },
                {
                  label: "GitHub",
                  value: "github",
                },
                {
                  label: "Facebook",
                  value: "facebook",
                },
                {
                  label: "Telegram",
                  value: "telegram",
                },
              ],
              defaultValue: "twitter",
              admin: {
                width: "50%",
              },
            },
            {
              name: "link",
              label: "Link",
              type: "text",
              admin: {
                width: "50%",
              },
            },
          ],
        },
      ],
    },
  ],
}

export default SocialMedia
