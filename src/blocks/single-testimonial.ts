import { Block } from "payload/types"
import padding from "../fields/padding"

const SingleTestimonial: Block = {
  slug: "single-testimonial",
  labels: {
    singular: "Single Testimonial",
    plural: "Single Testimonials",
  },
  fields: [
    {
      name: "background",
      label: "Background",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "testimonial",
      label: "Testimonial",
      type: "relationship",
      relationTo: "testimonials",
    },
    padding("singleTestimonialPadding"),
  ],
}

export default SingleTestimonial
