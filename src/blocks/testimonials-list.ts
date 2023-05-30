import { Block } from "payload/types"

import padding from "../fields/padding"

const TestimonialsList: Block = {
  slug: "testimonials-list",
  labels: {
    singular: "Testimonials List",
    plural: "Testimonials Lists",
  },
  fields: [
    {
      name: "testimonials",
      label: "Testimonial",
      type: "relationship",
      relationTo: "testimonials",
      hasMany: true,
      required: true,
      min: 2,
    },
    {
      name: "testimonialsListDisplayStyle",
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
    padding("testimonialsListPadding"),
  ],
}

export default TestimonialsList
