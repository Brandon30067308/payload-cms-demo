import { CollectionConfig } from "payload/types"

import { isAdmin, isAdminOrEditorOrPagePublished } from "../access"
import padding from "../fields/padding"
import maxWidth from "../fields/max-width"
import background from "../fields/background"
import callToAction from "../fields/call-to-action"
import Content from "../blocks/content"
import slug from "../fields/slug"
import afterPageChange from "../hooks/afterPageChange"

const Page: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
  },
  access: {
    create: isAdmin,
    read: isAdminOrEditorOrPagePublished,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "title",
      label: "Page Title",
      type: "text",
    },
    padding("heroPadding", "Hero Padding", {
      top: "extraLargeSmall",
      bottom: "none",
      left: "none",
      right: "none",
    }),
    maxWidth("heroMaxWidth", "Hero Max Width", "large"),
    background("heroBackground", "Hero Background"),
    {
      type: "radio",
      name: "heroType",
      label: "Hero Type",
      required: true,
      defaultValue: "minimal",
      options: [
        {
          label: "Minimal",
          value: "minimal",
        },
        {
          label: "Content Left Of Media",
          value: "contentLeftOfMedia",
        },
        {
          label: "Content Right Of Media",
          value: "contentRightOfMedia",
        },
        {
          label: "Content Above Media",
          value: "contentAboveMedia",
        },
      ],
    },
    {
      name: "heroContent",
      label: "Hero Text Content",
      type: "richText",
      admin: {
        elements: ["h1", "link", "blockquote"],
      },
    },
    {
      name: "heroMediaType",
      label: "Hero Media Type",
      type: "radio",
      options: [
        {
          label: "Video",
          value: "video",
        },
        {
          label: "Image",
          value: "image",
        },
      ],
      required: true,
      admin: {
        condition: (_, siblingData) =>
          siblingData?.heroType === "contentRightOfMedia" ||
          siblingData?.heroType === "contentLeftOfMedia" ||
          siblingData?.heroType === "contentAboveMedia",
      },
    },
    {
      name: "heroMedia",
      label: "Hero Media",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        condition: (_, siblingData) =>
          siblingData?.heroType === "contentRightOfMedia" ||
          siblingData?.heroType === "contentLeftOfMedia" ||
          siblingData?.heroType === "contentAboveMedia",
      },
    },
    {
      name: "heroVideoThumbnail",
      label: "Hero Video Thumbnail",
      type: "upload",
      relationTo: "media",
      admin: {
        condition: (_, siblingData) => {
          return (
            (siblingData?.heroType === "contentRightOfMedia" ||
              siblingData?.heroType === "contentLeftOfMedia" ||
              siblingData?.heroType === "contentAboveMedia") &&
            siblingData?.heroMediaType === "video"
          )
        },
      },
      filterOptions: {
        mimeType: { contains: "image" },
      },
    },
    {
      ...callToAction,
      ...{ name: "heroCallToAction", label: "Hero Call To Action" },
    },
    {
      name: "heroMediaDecoration",
      label: "Hero Media Decoration",
      type: "checkbox",
      defaultValue: false,
      admin: {
        condition: (_, siblingData) =>
          siblingData?.heroType === "contentRightOfMedia" ||
          siblingData?.heroType === "contentLeftOfMedia" ||
          siblingData?.heroType === "contentAboveMedia",
      },
    },
    {
      name: "layoutDirection",
      label: "Page Layout Direction",
      type: "radio",
      options: [
        {
          label: "Column",
          value: "column",
        },
        {
          label: "Row",
          value: "row",
        },
      ],
      defaultValue: "column",
    },
    {
      name: "layout",
      label: "Layout",
      type: "blocks",
      required: true,
      blocks: [Content],
    },
    {
      name: "includeHeader",
      label: "Include Header",
      type: "checkbox",
      defaultValue: true,
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "includeFooter",
      label: "Include Footer",
      type: "checkbox",
      defaultValue: true,
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "published",
      label: "Published",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
      },
    },
    slug,
  ],
  hooks: {
    afterChange: [afterPageChange],
    afterDelete: [afterPageChange],
  },
}

export default Page
