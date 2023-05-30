import path from "path"
import dotenv from "dotenv"
import { buildConfig } from "payload/config"
import formBuilder from "@payloadcms/plugin-form-builder"
import seo from "@payloadcms/plugin-seo"

import Header from "./globals/header"
import Footer from "./globals/footer"
import SocialMedia from "./globals/social-media"
import Newsletter from "./globals/newsletter"
import User from "./collections/user"
import Media from "./collections/media"
import Page from "./collections/page"
import BlogPost from "./collections/blog-post"
import BlogCategory from "./collections/blog-category"
import SupportArticles from "./collections/support-article"
import SupportCategory from "./collections/support-category"
import Feature from "./collections/feature"
import PricingPlans from "./collections/pricing-plan"
import Employee from "./collections/employee"
import Customer from "./collections/customer"
import Faq from "./collections/faq"
import Testimonial from "./collections/testimonial"
import { isAdmin, isAdminOrEditor } from "./access"

dotenv.config()

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_PAYLOAD_URL,
  admin: {
    webpack: (config) => {
      // workaround for react-markdown & remark-gfm
      config?.module?.rules?.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      })

      return {
        ...config,
        resolve: {
          ...config.resolve,
          fallback: {
            ...config.resolve?.fallback,
            fs: false,
          },
        },
      }
    },
    user: User.slug,
  },

  collections: [
    Media,
    User,
    Page,
    BlogPost,
    BlogCategory,
    SupportArticles,
    SupportCategory,
    Feature,
    PricingPlans,
    Employee,
    Customer,
    Faq,
    Testimonial,
  ],
  globals: [Header, Footer, SocialMedia, Newsletter],
  cors: "*",
  rateLimit: {
    trustProxy: true,
    window: 2 * 60 * 1000, // 2 minutes
    max: 2400, // limit each IP per windowMs
  },

  graphQL: {
    disablePlaygroundInProduction: false,
    disable: false,
  },

  plugins: [
    seo({
      collections: ["pages", "blog-posts", "support-articles"],
      uploadsCollection: "media",
      generateTitle: ({ doc }: any) => doc?.meta?.title,
      generateDescription: ({ doc }: any) => doc?.meta?.description ?? "",
      // generateURL: ({ doc }: any) => `https://yoursite.com/${doc?.slug}`
    }),
    formBuilder({
      formOverrides: {
        access: {
          read: isAdminOrEditor,
          create: isAdmin,
          update: isAdmin,
          delete: isAdmin,
        },
        admin: {
          group: "Content",
        },
      },
      formSubmissionOverrides: {
        access: {
          read: isAdmin,
          create: () => true,
          update: () => false,
          delete: isAdmin,
        },
        admin: {
          group: "Form Submissions",
        },
      },
      redirectRelationships: ["pages"],
    }),
  ],

  typescript: {
    outputFile: path.resolve(__dirname, "../../next/src/payload-types.ts"),
  },
})
