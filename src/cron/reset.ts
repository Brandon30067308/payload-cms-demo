import payload from "payload"
import path from "path"
import fs from "fs"
import dotenv from "dotenv"
import { MongoClient } from "mongodb"

import headerData from "../data/globals/header"
import footerData from "../data/globals/footer"
import socialMediaData from "../data/globals/social-media"
import newsletterData from "../data/globals/newsletter"
import newsletterFormData from "../data/forms/newsletter"
import mediaData from "../data/media"
import homePageData from "../data/pages/home"
import featureData from "../data/feature"
import pricingPlanData from "../data/pricing-plan"
import aboutPageData from "../data/pages/about"
import employeeData from "../data/employee"
import customerData from "../data/customer"
import pricingPageData from "../data/pages/pricing"
import faqData from "../data/faqs"
import wallOfLovePageData from "../data/pages/wall-of-love"
import testimonialData from "../data/testimonial"
import blogPostData from "../data/blog-post"
import supportArticleData from "../data/support-article"
import testFormData from "../data/forms/test"
import testPageData from "../data/pages/test"
import requestDemoFormData from "../data/forms/request-demo"
import signinFormData from "../data/forms/signin"
import resetPasswordFormData from "../data/forms/reset-password"
import signinPageData from "../data/pages/signin"
import requestDemoPageData from "../data/pages/request-demo"
import resetPasswordPageData from "../data/pages/reset-password"

dotenv.config()

const mongoUri = process.env.MONGO_URI ?? ""

export async function seed() {
  try {
    payload.logger.info(`Seeding database...`)

    const mediaDir = path.resolve(__dirname, "../media")
    if (fs.existsSync(mediaDir)) {
      fs.rmSync(path.resolve(__dirname, "../media"), { recursive: true })
    }

    await seedData()
    payload.logger.info(`Seed Complete.`)
  } catch (error) {
    console.error(error)
    payload.logger.error("Error seeding database.")
  }
}

export async function reset() {
  try {
    payload.logger.info(`Resetting collection...`)

    const mediaDir = path.resolve(__dirname, "../media")
    if (fs.existsSync(mediaDir)) {
      fs.rmSync(path.resolve(__dirname, "../media"), { recursive: true })
    }

    await dropDB()
    await seedData()
    payload.logger.info(`Reset Complete.`)
  } catch (error) {
    console.error(error)
    payload.logger.error("Error resetting database.")
  }
}

async function dropDB() {
  const client = await MongoClient.connect(mongoUri)

  const db = client.db(new URL(mongoUri).pathname.substring(1))

  await db.dropDatabase()
}

async function seedData() {
  // Images
  const { id: adminImageId } = await mediaData("admin.jpg", "jpg", "Admin")

  const { id: editorImageId } = await mediaData("editor.jpg", "jpg", "Editor")

  const { id: videoId } = await mediaData("video.mp4", "mp4", "Hero", "video")

  const { id: homeHeroThumbnailId } = await mediaData(
    "home-video-thumbnail.webp",
    "webp",
    "Hero",
    "image"
  )

  const { id: wallOfLoveHeroThumbnailId } = await mediaData(
    "wall-of-love-video-thumbnail.webp",
    "webp",
    "Hero",
    "image"
  )

  const { id: aboutHeroBgImageId } = await mediaData(
    "about-hero-bg.webp",
    "webp",
    "About Hero"
  )

  const { id: aboutHeroImageId } = await mediaData(
    "about-hero.webp",
    "webp",
    "About Hero"
  )

  const { id: homeContentGridImageId } = await mediaData(
    "content-grid-home.png",
    "png",
    "Content Grid"
  )

  const { id: aboutContentGridImageId } = await mediaData(
    "content-grid-about.png",
    "png",
    "Content Grid"
  )

  const { id: pricingContentGridImageId } = await mediaData(
    "content-grid-pricing.png",
    "png",
    "Content Grid"
  )

  const { id: tabsImageId1 } = await mediaData("image-tabs.webp", "webp", "Tab")

  const { id: tabsImageId2 } = await mediaData(
    "detailed-image-tabs.webp",
    "webp",
    "Tab"
  )

  const { id: tabControlImageId1 } = await mediaData(
    "image-tab-control-1.png",
    "png",
    "Tab Control"
  )

  const { id: tabControlImageId2 } = await mediaData(
    "image-tab-control-2.png",
    "png",
    "Tab Control"
  )

  const { id: featureImageId } = await mediaData(
    "feature.webp",
    "webp",
    "Feature"
  )

  const { id: statsListImageId } = await mediaData(
    "stats.webp",
    "webp",
    "Stats"
  )

  const { id: signatureImageId } = await mediaData(
    "signature.png",
    "png",
    "Signature"
  )

  const { id: imageGridImageId1 } = await mediaData(
    "image-grid-1.webp",
    "webp",
    "Image Grid"
  )
  const { id: imageGridImageId2 } = await mediaData(
    "image-grid-2.webp",
    "webp",
    "Image Grid"
  )
  const { id: imageGridImageId3 } = await mediaData(
    "image-grid-3.webp",
    "webp",
    "Image Grid"
  )

  const { id: employeeImageId } = await mediaData(
    "employee.webp",
    "webp",
    "Employee"
  )

  const { id: bgImageId } = await mediaData("bg.webp", "webp", "Background")

  const { id: tidyLogoImageId } = await mediaData("tidy.png", "png", "Tidy")

  const { id: amazonImageId } = await mediaData("amazon.png", "png", "Amazon")
  const { id: accelImageId } = await mediaData("accel.png", "png", "Accel")
  const { id: netflixImageId } = await mediaData(
    "netflix.png",
    "png",
    "Netflix"
  )
  const { id: airbnbImageId } = await mediaData("airbnb.png", "png", "Airbnb")
  const { id: googleImageId } = await mediaData("google.png", "png", "Google")

  const { id: clientImageId } = await mediaData("client.png", "png", "Client")

  const { id: customerImageId } = await mediaData(
    "customer.jpg",
    "jpg",
    "Customer"
  )

  const { id: testimonialVideoThumbnail } = await mediaData(
    "testimonial-video-thumbnail.webp",
    "webp",
    "Testimonial"
  )

  const { id: blogPostImageId } = await mediaData(
    "blog-post.webp",
    "webp",
    "Blog Post"
  )

  const { id: supportCategoryImageId } = await mediaData(
    "getting-started.png",
    "png",
    "Support Category"
  )

  const { id: supportArticleImageId } = await mediaData(
    "support-article.jpg",
    "jpg",
    "Support Article"
  )

  // Forms
  const { id: newsletterFormId } = await newsletterFormData()
  const { id: requestDemoFormId } = await requestDemoFormData()
  const { id: resetPasswordFormId } = await resetPasswordFormData()
  const { id: signinFormId } = await signinFormData()
  const { id: testFormId } = await testFormData()

  // Globals
  await headerData()

  await footerData()

  await socialMediaData()

  await newsletterData(newsletterFormId)

  // Admin
  const { id: demoAdminId } = await payload.create({
    collection: "users",
    data: {
      name: "Demo Admin",
      email: "demo@payloadcms.com",
      password: "demo",
      roles: ["admin"],
      image: adminImageId,
    },
  })

  // Editor
  const { id: demoEditorId } = await payload.create({
    collection: "users",
    data: {
      name: "Demo Editor",
      email: "demoeditor@payloadcms.com",
      password: "demo",
      roles: ["editor"],
      image: editorImageId,
    },
  })

  // Support Categories
  const [{ id: supportCategoryId1 }, { id: supportCategoryId2 }] =
    await Promise.all([
      payload.create({
        collection: "support-categories",
        data: {
          name: "Getting Started with Tidy",
          description: "New to Tidy or feeling a little lost? Start here ;)",
          icon: supportCategoryImageId,
        },
      }),
      payload.create({
        collection: "support-categories",
        data: {
          name: "Account Access & Billing",
          description:
            "Managing your account; upgrading, downgrading and cancellations, payments, etc.",
          icon: supportCategoryImageId,
        },
      }),
    ])

  // Support Articles
  await supportArticleData(
    supportArticleImageId,
    "Getting Started with Tidy",
    [supportCategoryId1],
    demoEditorId
  )
  await supportArticleData(
    supportArticleImageId,
    "Account Access and Billing",
    [supportCategoryId1],
    demoAdminId
  )
  await supportArticleData(
    supportArticleImageId,
    "Best Practices",
    [supportCategoryId2],
    demoAdminId
  )
  await supportArticleData(
    supportArticleImageId,
    "API",
    [supportCategoryId2],
    demoEditorId
  )
  await supportArticleData(
    supportArticleImageId,
    "Other Tools",
    [supportCategoryId1],
    demoAdminId
  )

  // Blog Categories
  const [{ id: blogCategoryId1 }, { id: blogCategoryId2 }] = await Promise.all([
    payload.create({
      collection: "blog-categories",
      data: {
        name: "Finance",
      },
    }),
    payload.create({
      collection: "blog-categories",
      data: {
        name: "Science",
      },
    }),
  ])

  // Blog Posts
  await blogPostData(
    blogPostImageId,
    "How Forensic Accounting Can Supercharge Your Financial Risk Analysis",
    [blogCategoryId1],
    demoEditorId
  )
  await blogPostData(
    blogPostImageId,
    "Satellite “Eavesdropping” Algorithm Finds Your Spot On Earth With Stellar Precision",
    [blogCategoryId2],
    demoAdminId
  )
  await blogPostData(
    blogPostImageId,
    "Strategic Financial Leadership: 6 Skills CFOs Need Now",
    [blogCategoryId1],
    demoAdminId
  )
  await blogPostData(
    blogPostImageId,
    "Europe Seeks Flourishing Forests Through Restoration",
    [blogCategoryId2],
    demoAdminId
  )
  await blogPostData(
    blogPostImageId,
    "Robot Wows With Balance Beam Walking Skills",
    [blogCategoryId2],
    demoAdminId
  )

  // Testimonials
  const baseTestimonial = {
    companyName: "Acment Inc.",
    companyLogo: clientImageId,
    clientName: "Marco Tancredi",
    clientImage: customerImageId,
    clientRole: "CTO",
    testimonySummary:
      "Professional communication studio Leon didn't get the personalized approach they wanted from colloboration tools - until they met Tidy.",
    testimony: [
      {
        children: [
          {
            text: "Tidy has been the system to drive change in collaboration on content for our organisation.",
          },
        ],
        type: "blockquote",
      },
    ],
    mediaType: "none",
  }

  const { id: testimonialId1 } = await testimonialData({
    ...baseTestimonial,
    companyName: "Black Inc.",
    clientName: "Štefan Štefančík",
    mediaType: "video",
    media: videoId,
    videoThumbnail: testimonialVideoThumbnail,
  })
  const { id: testimonialId2 } = await testimonialData({
    ...baseTestimonial,
    companyName: "Leon Fibre S.r.l.",
    clientName: "Christine Duck",
    mediaType: "video",
    media: videoId,
    videoThumbnail: testimonialVideoThumbnail,
  })
  const { id: testimonialId3 } = await testimonialData({
    ...baseTestimonial,
    clientName: "Patrick Hills",
  })
  const { id: testimonialId4 } = await testimonialData({
    ...baseTestimonial,
    clientName: "Jeff Wong",
  })
  const { id: testimonialId5 } = await testimonialData({
    ...baseTestimonial,
    clientName: "Cathie Wood",
  })
  const { id: testimonialId6 } = await testimonialData({
    ...baseTestimonial,
  })

  // Features
  const { id: featureId1 } = await featureData(
    "Advanced Features",
    "Lorem ipsum is placeholder text used in the graphic, print, and publishing for previewing layouts.",
    featureImageId
  )
  const { id: featureId2 } = await featureData(
    "Advanced Features",
    "Lorem ipsum is placeholder text used in the graphic, print, and publishing for previewing layouts.",
    featureImageId
  )
  const { id: featureId3 } = await featureData(
    "Advanced Features",
    "Lorem ipsum is placeholder text used in the graphic, print, and publishing for previewing layouts.",
    featureImageId
  )

  // Employees
  const { id: employeeId1 } = await employeeData(
    "Sara Tolinski",
    employeeImageId,
    "CEO & Co-founder"
  )
  const { id: employeeId2 } = await employeeData(
    "Elisa Nguyen",
    employeeImageId,
    "Co-Founder, Lead Engineer"
  )
  const { id: employeeId3 } = await employeeData(
    "Amanda Danish",
    employeeImageId,
    "CEO Business Development"
  )
  const { id: employeeId4 } = await employeeData(
    "Patricia Curnock",
    employeeImageId,
    "Community Manager"
  )

  // Faqs
  const { id: faqId1 } = await faqData(
    "Can I upgrade or downgrade at any time?"
  )
  const { id: faqId2 } = await faqData(
    "What are the advantages of the Tidy Advanced Service?"
  )
  const { id: faqId3 } = await faqData(
    "Are there any commissions in addition to the monthly plans?"
  )
  const { id: faqId4 } = await faqData("Can I request a refund?")
  const { id: faqId5 } = await faqData(
    "Do you offer a discount for universities and students?"
  )

  // Customers
  const { id: customerId1 } = await customerData("Facebook", amazonImageId)
  const { id: customerId2 } = await customerData("Accel", accelImageId)
  const { id: customerId3 } = await customerData("Airbnb", netflixImageId)
  const { id: customerId4 } = await customerData("Netflix", airbnbImageId)
  const { id: customerId5 } = await customerData("Google", googleImageId)

  // Pricing Plans
  const baseFeatures = [
    "Consectetur adipiscing elit",
    "Excepteur sint occaecat cupidatat",
    "Officia deserunt mollit anim",
  ]

  const { id: planId1 } = await pricingPlanData(
    "Essential",
    { monthly: 55, yearly: 49 },
    "Better insights for growing businesses that want more customers.",
    "Features include:",
    ["50 placeholder text commonly", ...baseFeatures],
    {
      label: "Start free trial",
      link: "/",
    }
  )
  const { id: planId2 } = await pricingPlanData(
    "Premium",
    { monthly: 85, yearly: 79 },
    "Better insights for growing businesses that want more customers.",
    "All features of Essential plus:",
    ["100 placeholder text commonly", ...baseFeatures],
    {
      label: "Start free trial",
      link: "/",
    },
    "Most Popular"
  )
  const { id: planId3 } = await pricingPlanData(
    "Advanced",
    { monthly: 135, yearly: 129 },
    "Better insights for growing businesses that want more customers.",
    "All features of Essential plus:",
    [
      "200 placeholder text commonly",
      ...baseFeatures,
      "Voluptate velit esse cillum",
    ],
    {
      label: "Start free trial",
      link: "/",
    }
  )

  const detailedStats = [
    {
      name: "Lorem ipsum is placeholder text used in the graphic, print, and publishing for previewing layouts.",
      value: "79%",
    },
    {
      name: "Lorem ipsum is placeholder text used in the graphic, print, and publishing for previewing layouts.",
      value: "1M+",
    },
    {
      name: "Lorem ipsum is placeholder text used in the graphic, print, and publishing for previewing layouts.",
      value: "500K",
    },
  ]

  const simplifiedStats = [
    {
      name: "Paying Customers",
      value: "75K",
    },
    {
      name: "Capital Raised",
      value: "$50M",
    },
    {
      name: "Team Members",
      value: "140",
    },
  ]

  // Test - Page
  testPageData(testFormId)

  // Home - Page
  await homePageData(
    videoId,
    homeHeroThumbnailId,
    homeContentGridImageId,
    tabsImageId1,
    tabsImageId2,
    tabControlImageId1,
    tabControlImageId2,
    [featureId1, featureId2, featureId3],
    detailedStats,
    statsListImageId,
    [planId1, planId2, planId3]
  )

  // About - Page
  await aboutPageData(
    aboutHeroBgImageId,
    aboutHeroImageId,
    simplifiedStats,
    signatureImageId,
    [imageGridImageId1, imageGridImageId2, imageGridImageId3],
    aboutContentGridImageId,
    ["Shangai", "London", "Washington D.C"],
    [employeeId1, employeeId2, employeeId3, employeeId4],
    [customerId1, customerId2, customerId3, customerId4]
  )

  const detailedFeatures = [
    {
      featureName: "Free trial",
      planSpecs: [
        {
          pricingPlan: planId1,
        },
        {
          pricingPlan: planId2,
        },
        {
          pricingPlan: planId3,
        },
      ],
    },
    {
      featureName: "Startup Plan",
      planSpecs: [
        {
          pricingPlan: planId1,
        },
        {
          pricingPlan: planId2,
        },
        {
          pricingPlan: planId3,
        },
      ],
    },
    {
      featureName: "Contributors",
      planSpecs: [
        {
          pricingPlan: planId1,
          featureSpecs: {
            specDetails: "Up to 2",
          },
        },
        {
          pricingPlan: planId2,
          featureSpecs: {
            specDetails: "Up to 10",
          },
        },
        {
          pricingPlan: planId3,
          featureSpecs: {
            specDetails: "Unlimited",
          },
        },
      ],
    },
    {
      featureName: "Virtual Desk",
      planSpecs: [
        {
          pricingPlan: planId1,
          featureSpecs: {
            includesFeature: false,
          },
        },
        {
          pricingPlan: planId2,
        },
        {
          pricingPlan: planId3,
        },
      ],
    },
    {
      featureName: "Analytics",
      tag: "Soon",
      planSpecs: [
        {
          pricingPlan: planId1,
          featureSpecs: {
            includesFeature: false,
          },
        },
        {
          pricingPlan: planId2,
          featureSpecs: {
            includesFeature: false,
          },
        },
        {
          pricingPlan: planId3,
          featureSpecs: {
            includesFeature: true,
          },
        },
      ],
    },
  ]

  // Pricing = Page
  await pricingPageData(
    [planId1, planId2, planId3],
    pricingContentGridImageId,
    [faqId1, faqId2, faqId3, faqId4, faqId5],
    detailedFeatures
  )

  // Wall Of Love - Page
  await wallOfLovePageData(
    videoId,
    wallOfLoveHeroThumbnailId,
    [customerId1, customerId5, customerId3, customerId4],
    [
      testimonialId1,
      testimonialId2,
      testimonialId3,
      testimonialId4,
      testimonialId5,
      testimonialId6,
    ]
  )

  // Signin - Page
  await signinPageData(tidyLogoImageId, bgImageId, testimonialId1, signinFormId)

  // Request Demo - Page
  await requestDemoPageData(
    tidyLogoImageId,
    bgImageId,
    testimonialId1,
    requestDemoFormId
  )

  // Reset Password - Page
  await resetPasswordPageData(
    tidyLogoImageId,
    bgImageId,
    testimonialId1,
    resetPasswordFormId
  )
}
