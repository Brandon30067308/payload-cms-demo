import payload from "payload"

async function pricingPageData(
  pricingPlans: Array<string>,
  contentGridImageId: string,
  faqs: Array<string>,
  detailedFeatures: Array<{
    featureName: string
    tag?: string
    planSpecs: Array<{
      pricingPlan?: string
      featureSpecs?: { includesFeature?: boolean; specDetails?: string }
    }>
  }>
) {
  await payload.create({
    collection: "pages",
    data: {
      title: "Pricing",
      heroPadding: {
        top: "extraLargeSmall",
        bottom: "mediumSmall",
        left: "none",
        right: "none",
      },
      heroMaxWidth: "large",
      heroBackground: {
        type: "clipped",
        fillType: "color",
        color: "darkSlate",
        height: "overflowLarge",
      },
      heroType: "minimal",
      heroContent: [
        {
          children: [
            {
              text: "Find the right plan for your business",
            },
          ],
          type: "h1",
        },
      ],
      heroCallToAction: [],
      layout: [
        {
          layoutBlocks: [
            {
              pricingPlans,
              priceDifference: 20,
              pricingTablesPadding: {
                top: "none",
                bottom: "none",
                left: "none",
                right: "none",
              },
              blockType: "pricing-tables",
            },
          ],
          layout: "column",
          basePadding: true,
          contentBackground: {
            type: "straight",
            fillType: "color",
            color: "none",
            height: "full",
          },
          retract: false,
          contentPadding: {
            top: "none",
            bottom: "mediumLarge",
            left: "none",
            right: "none",
          },
          blockType: "content",
        },
        {
          layoutBlocks: [
            {
              layout: "row",
              shadowType: "large",
              textContent: [
                {
                  children: [
                    {
                      text: "Launched a business making less than $100K in revenue?",
                    },
                  ],
                  type: "h4",
                },
              ],
              bannerCallToAction: [
                {
                  link: {
                    type: "page",
                    label: "Contact Us",
                    page: "/",
                    sublinks: [],
                  },
                  size: "small",
                  appendArrow: true,
                },
              ],
              tag: true,
              tagText: "For Young Startups",
              bannerPadding: {
                top: "none",
                bottom: "none",
              },
              blockType: "banner",
            },
          ],
          layout: "column",
          retract: false,
          basePadding: true,
          contentBackground: {
            type: "straight",
            fillType: "color",
            color: "lightSlate",
            height: "half",
          },
          contentPadding: {
            top: "none",
            bottom: "none",
            left: "none",
            right: "none",
          },
          blockType: "content",
        },
        {
          layoutBlocks: [
            {
              content: [
                {
                  children: [
                    {
                      text: "It's easy to add extra benefits to all of our plans.",
                    },
                  ],
                  type: "h2",
                },
              ],
              textContentPadding: {
                top: "none",
                bottom: "largeSmall",
              },
              contentPlacement: "left",
              textAlignment: "left",
              blockType: "text-content",
            },
            {
              contents: new Array(3).fill(null).map(() => ({
                image: contentGridImageId,
                heading: "Workers' Wallet",
                content: [
                  {
                    children: [
                      {
                        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                      },
                      {
                        text: "From $6/mo per participant. No setup fee",
                        bold: true,
                      },
                    ],
                  },
                ],
              })),
              contentGridPadding: {
                top: "none",
                bottom: "none",
              },
              contentGridTextSize: "small",
              blockType: "content-grid",
            },
          ],
          layout: "column",
          retract: false,
          basePadding: true,
          contentBackground: {
            type: "straight",
            fillType: "color",
            color: "lightSlate",
            height: "full",
          },
          contentPadding: {
            top: "largeSmall",
            bottom: "largeSmall",
            left: "none",
            right: "none",
          },
          blockType: "content",
        },
        {
          layoutBlocks: [
            {
              content: [
                {
                  children: [
                    {
                      text: "Compare plans by features",
                    },
                  ],
                  type: "h2",
                },
              ],
              textContentPadding: {
                top: "none",
                bottom: "largeSmall",
              },
              textAlignment: "center",
              blockType: "text-content",
            },
            {
              pricingPlans,
              pricingTablesDisplayStyle: "detailed",
              detailedFeatures,
              priceDifference: 20,
              pricingTablesPadding: {
                top: "none",
                bottom: "mediumSmall",
                left: "none",
                right: "none",
              },
              blockType: "pricing-tables",
            },
            {
              callToAction: [
                {
                  link: {
                    type: "page",
                    label: "Request Demo",
                    page: "/",
                    sublinks: [],
                  },
                  size: "medium",
                  appendArrow: true,
                },
              ],
              callToActionPadding: {
                top: "none",
                bottom: "none",
              },
              blockType: "call-to-action",
            },
          ],
          layout: "column",
          retract: false,
          basePadding: true,
          contentBackground: {
            type: "straight",
            fillType: "color",
            color: "white",
            height: "full",
          },
          contentPadding: {
            top: "largeSmall",
            bottom: "largeSmall",
            left: "none",
            right: "none",
          },
          blockType: "content",
        },
        {
          layoutBlocks: [
            {
              content: [
                {
                  children: [
                    {
                      text: "Frequently Asked Questions",
                    },
                  ],
                  type: "h2",
                },
              ],
              textContentPadding: {
                top: "none",
                bottom: "largeSmall",
              },
              textAlignment: "center",
              blockType: "text-content",
            },
            {
              faqs,
              faqsListPadding: {
                bottom: "none",
                top: "none",
              },
              blockType: "faqs-list",
            },
          ],
          layout: "column",
          retract: false,
          basePadding: true,
          contentBackground: {
            type: "straight",
            fillType: "color",
            color: "lightSlate",
            height: "full",
          },
          contentPadding: {
            top: "largeSmall",
            bottom: "largeSmall",
            left: "none",
            right: "none",
          },
          blockType: "content",
        },
        {
          layoutBlocks: [
            {
              content: [
                {
                  children: [
                    {
                      text: "Say goodbye to long queues, big updates, and ",
                    },
                    {
                      text: "confusion",
                      "emerald-text": true,
                    },
                    {
                      text: ".",
                    },
                  ],
                  type: "h2",
                },
                {
                  children: [
                    {
                      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.",
                    },
                  ],
                },
              ],
              decoration: true,
              textContentMaxWidth: "medium",
              textContentPadding: {
                top: "none",
                bottom: "small",
              },
              blockType: "text-content",
            },
            {
              callToAction: [
                {
                  link: {
                    type: "page",
                    label: "Request Demo",
                    page: "/",
                    sublinks: [],
                  },
                  size: "medium",
                  appendArrow: true,
                },
              ],
              callToActionPadding: {
                top: "none",
                bottom: "none",
              },
              blockType: "call-to-action",
            },
          ],
          layout: "column",
          contentBackground: {
            type: "straight",
            fillType: "color",
            color: "darkSlate",
            height: "full",
          },
          contentPadding: {
            top: "largeSmall",
            bottom: "largeSmall",
          },
          blockType: "content",
        },
      ],
      includeFooter: true,
      published: true,
      slug: "pricing",
      meta: {
        title: "Pricing - Corporate",
        description: "Pricing - Corporate",
      },
    },
  })
}

export default pricingPageData
