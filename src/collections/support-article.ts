import { CollectionConfig } from "payload/types"

import PostContent from "../blocks/post-content"
import PostMedia from "../blocks/post-media"
import Separator from "../blocks/separator"
import slug from "../fields/slug"
import { isAdminOrAuthor, isAdminOrEditorOrPublished } from "../access"
import afterSupportArticleChange from "../hooks/afterSupportArticleChange"

const SupportArticle: CollectionConfig = {
  slug: "support-articles",
  admin: {
    useAsTitle: "title",
  },
  access: {
    create: isAdminOrAuthor,
    read: isAdminOrEditorOrPublished,
    update: isAdminOrAuthor,
    delete: isAdminOrAuthor,
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "readTime",
      label: "Read Time",
      type: "text",
      required: true,
    },
    {
      name: "summary",
      label: "Summary",
      type: "textarea",
      required: true,
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Article Header Image",
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              required: true,
              filterOptions: {
                mimeType: { contains: "image" },
              },
            },
          ],
        },
        {
          label: "Article Content",
          fields: [
            {
              name: "layout",
              type: "blocks",
              blocks: [PostContent, PostMedia, Separator],
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: "status",
      type: "select",
      options: [
        {
          value: "draft",
          label: "Draft",
        },
        {
          value: "published",
          label: "Published",
        },
      ],
      defaultValue: "draft",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "publishedAt",
      label: "Published Date",
      type: "date",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      required: true,
      admin: {
        readOnly: true,
        position: "sidebar",
        condition: (data) => Boolean(data?.author),
      },
    },
    {
      name: "categories",
      label: "Categories",
      type: "relationship",
      relationTo: "support-categories",
      filterOptions: {
        archived: { equals: false },
      },
      required: true,
      hasMany: true,
      admin: {
        position: "sidebar",
      },
    },
    slug,
  ],
  hooks: {
    beforeChange: [
      ({ req, operation, data }) => {
        if (operation === "create") {
          if (req.user) {
            return { ...data, author: req.user.id }
          }
        }
      },
    ],
    afterChange: [afterSupportArticleChange],
    afterDelete: [afterSupportArticleChange],
  },
}

export default SupportArticle
