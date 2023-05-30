import { CollectionConfig } from "payload/types"

import { isAdmin, isAdminOrEditor } from "../access"

const Testimonial: CollectionConfig = {
  slug: "testimonials",
  access: {
    create: isAdmin,
    read: isAdminOrEditor,
    update: isAdmin,
    delete: isAdmin,
  },
  admin: {
    useAsTitle: "companyName",
  },
  fields: [
    {
      name: "companyName",
      label: "Company Name",
      type: "text",
      required: true,
    },
    {
      name: "companyLogo",
      label: "Company Logo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "companyWebsite",
      label: "Company Website Link",
      type: "text",
    },
    {
      name: "clientName",
      label: "Client Name",
      type: "text",
      required: true,
    },
    {
      name: "clientImage",
      label: "Client Image",
      type: "upload",
      relationTo: "media",
      required: true,
      filterOptions: {
        mimeType: { contains: "image" },
      },
    },
    {
      name: "clientRole",
      label: "Client Role",
      type: "text",
      required: true,
    },
    {
      name: "testimonySummary",
      label: "Testimony Summary",
      type: "textarea",
    },
    {
      name: "testimony",
      label: "Testimony",
      type: "richText",
      admin: {
        elements: ["blockquote", "indent", "link"],
      },
      required: true,
    },
    {
      name: "mediaType",
      label: "Testimonial Media Type",
      type: "radio",
      options: [
        {
          label: "None",
          value: "none",
        },
        {
          label: "Image",
          value: "image",
        },
        {
          label: "Video",
          value: "video",
        },
      ],
      defaultValue: "none",
    },
    {
      name: "media",
      label: "Testimonial Media",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        condition: (_, siblingData) =>
          siblingData?.mediaType === "video" ||
          siblingData?.mediaType === "image",
      },
    },
    {
      name: "videoThumbnail",
      label: "Testimonial Video Thumbnail",
      type: "upload",
      relationTo: "media",
      admin: {
        condition: (_, siblingData) => siblingData?.mediaType === "video",
      },
      required: true,
    },
  ],
}

export default Testimonial
