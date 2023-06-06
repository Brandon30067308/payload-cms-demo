import { Block } from "payload/types"

import TextContent from "./text-content"
import Divide from "./divide"
import Spacing from "./spacing"
import CallToAction from "./call-to-action"
import ContentGrid from "./content-grid"
import background from "../fields/background"
import padding from "../fields/padding"
import ImageGrid from "./image-grid"
import ImageTabs from "./image-tabs"
import FeaturesList from "./features-list"
import StatsList from "./stats-list"
import PricingTables from "./pricing-tables"
import Media from "./media"
import EmployeesList from "./employees-list"
import CustomersList from "./customers-list"
import Banner from "./banner"
import FaqsList from "./faqs-list"
import TestimonialsList from "./testimonials-list"
import Form from "./form"
import SingleTestimonial from "./single-testimonial"
import maxWidth from "../fields/max-width"

const Content: Block = {
  slug: "content",
  labels: {
    singular: "Content",
    plural: "Contents",
  },
  fields: [
    {
      name: "layoutBlocks",
      labels: {
        singular: "Layout Block",
        plural: "Layout Blocks",
      },
      type: "blocks",
      blocks: [
        Form,
        Media,
        TextContent,
        Divide,
        Spacing,
        CallToAction,
        ContentGrid,
        ImageTabs,
        ImageGrid,
        Banner,
        FeaturesList,
        StatsList,
        PricingTables,
        EmployeesList,
        CustomersList,
        FaqsList,
        TestimonialsList,
        SingleTestimonial,
      ],
      required: true,
      minRows: 1,
    },
    {
      type: "row",
      fields: [
        {
          name: "width",
          label: "Width",
          type: "select",
          options: [
            {
              label: "Full",
              value: "full",
            },
            {
              label: "Half",
              value: "half",
            },
          ],
          required: true,
          defaultValue: "full",
        },
        {
          name: "height",
          label: "Height",
          type: "select",
          options: [
            {
              label: "Fill Page",
              value: "fill",
            },
            {
              label: "Fit Content",
              value: "fit",
            },
          ],
          required: true,
          defaultValue: "fit",
        },
      ],
    },
    maxWidth("contentMaxWidth", "Max Width", "large"),
    {
      name: "layout",
      label: "Layout Direction",
      type: "select",
      options: [
        {
          label: "Row",
          value: "row",
        },
        {
          label: "Column",
          value: "column",
        },
      ],
      required: true,
      defaultValue: "column",
    },
    background("contentBackground", `Content Background`),
    {
      name: "hideOnSmallScreens",
      label: "Hide On Small Screens",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "basePadding",
      label: "Base Padding",
      type: "checkbox",
      defaultValue: true,
    },
    padding("contentPadding", `Content Padding`),
    {
      name: "retract",
      label: "Retract Contents",
      type: "checkbox",
      defaultValue: false,
    },
  ],
}

export default Content
