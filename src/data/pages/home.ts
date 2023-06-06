import payload from "payload"

async function homePageData(
  heroVideoId: string,
  heroVideoThumbnailId: string,
  contentGridImageId: string,
  tabsImageId: string,
  detailedTabsImageId: string,
  simplifiedTabControlIconId: string,
  detailedTabControlIconId: string,
  features: Array<string>,
  stats: Array<{ name: string; value: string }>,
  statsImageId: string,
  pricingPlans: Array<string>
) {
  await payload.create({
    collection: "pages",
    data: {
      title: "Home",
      heroPadding: {
        top: "extraLargeSmall",
        bottom: "extraLarge",
        left: "none",
        right: "none",
      },
      heroMaxWidth: "large",
      heroBackground: {
        type: "clipped",
        fillType: "color",
        color: "darkSlate",
        height: "full",
      },
      heroType: "contentRightOfMedia",
      heroContent: [
        {
          children: [
            {
              text: "Create stunning web experiences",
            },
          ],
          type: "h1",
        },
        {
          children: [
            {
              text: "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.",
            },
          ],
        },
      ],
      heroMediaType: "video",
      heroMedia: heroVideoId,
      heroVideoThumbnail: heroVideoThumbnailId,
      heroCallToAction: [
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
        {
          link: {
            type: "page",
            label: "Explore Product",
            page: "/",
            sublinks: [],
          },
          size: "medium",
          appendArrow: false,
        },
      ],
      heroMediaDecoration: true,
      layout: [
        {
          layoutBlocks: [
            {
              contents: new Array(6).fill(null).map(() => ({
                image: contentGridImageId,
                heading: "Robust Workflow",
                content: [
                  {
                    children: [
                      {
                        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                      },
                    ],
                  },
                ],
              })),
              lineDecoration: true,
              contentGridPadding: {
                top: "none",
                bottom: "none",
              },
              blockType: "content-grid",
            },
          ],
          layout: "column",
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
                      text: "Built exclusively for you",
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
              textContentMaxWidth: "medium",
              textContentPadding: {
                top: "none",
                bottom: "mediumSmall",
                left: "none",
                right: "none",
              },
              blockType: "text-content",
            },
            {
              displayStyle: "simplified",
              tabs: new Array(4).fill(null).map(() => ({
                controlText: [
                  {
                    children: [
                      {
                        text: "Internal Feedback",
                        bold: true,
                      },
                    ],
                  },
                ],
                controlIcon: simplifiedTabControlIconId,
                tabImage: tabsImageId,
              })),
              imageTabsPadding: {
                top: "none",
                bottom: "none",
              },
              blockType: "image-tabs",
            },
          ],
          layout: "column",
          contentBackground: {
            type: "straight",
            fillType: "color",
            color: "lightSlate",
            height: "fillLarge",
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
              blockType: "divide",
            },
            {
              content: [
                {
                  children: [
                    {
                      text: "The quick brown fox jumped over the lazy dog",
                    },
                  ],
                  type: "h2",
                },
              ],
              textContentMaxWidth: "medium",
              textContentPadding: {
                top: "largeSmall",
                bottom: "largeSmall",
                left: "none",
                right: "none",
              },
              blockType: "text-content",
            },
            {
              displayStyle: "detailed",
              leadText: [
                {
                  children: [
                    {
                      text: "Built exclusively for you",
                    },
                  ],
                  type: "h3",
                },
                {
                  children: [
                    {
                      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.",
                    },
                  ],
                },
              ],
              tabs: new Array(3).fill(null).map(() => ({
                controlText: [
                  {
                    children: [
                      {
                        text: "Internal Feedback",
                        bold: true,
                      },
                      {
                        text: "\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur velit.",
                      },
                    ],
                  },
                ],
                controlIcon: detailedTabControlIconId,
                tabImage: detailedTabsImageId,
              })),
              imageTabsPadding: {
                top: "none",
                bottom: "none",
              },
              blockType: "image-tabs",
            },
          ],
          layout: "column",
          contentBackground: {
            type: "straight",
            fillType: "color",
            color: "white",
            height: "fillLarge",
          },
          contentPadding: {
            top: "none",
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
                      text: "Simplify operating and manage with transparency",
                    },
                  ],
                  type: "h2",
                },
              ],
              textContentMaxWidth: "medium",
              textContentPadding: {
                top: "none",
                bottom: "largeSmall",
                left: "none",
                right: "none",
              },
              blockType: "text-content",
            },
            {
              features,
              featuresListPadding: {
                top: "none",
                bottom: "none",
              },
              blockType: "features-list",
            },
          ],
          layout: "column",
          contentBackground: {
            type: "clipped",
            fillType: "color",
            color: "darkSlate",
            height: "fillMedium",
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
              blockType: "divide",
            },
            {
              content: [
                {
                  children: [
                    {
                      text: "We're experts and brand creators",
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
              textContentMaxWidth: "medium",
              textContentPadding: {
                top: "largeSmall",
                bottom: "largeSmall",
                left: "none",
                right: "none",
              },
              blockType: "text-content",
            },
            {
              stats,
              statsListDisplayStyle: "detailed",
              statsListPadding: {
                top: "none",
                bottom: "none",
              },
              showcaseImage: statsImageId,
              blockType: "stats-list",
            },
          ],
          layout: "column",
          contentBackground: {
            type: "clipped",
            fillType: "color",
            color: "white",
            height: "full",
          },
          contentPadding: {
            top: "none",
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
                      text: "Find the right plan for your business",
                    },
                  ],
                  type: "h2",
                },
              ],
              textContentMaxWidth: "medium",
              textContentPadding: {
                top: "none",
                bottom: "mediumSmall",
                left: "none",
                right: "none",
              },
              blockType: "text-content",
            },
            {
              pricingPlans,
              pricingTablesPadding: {
                top: "none",
                bottom: "none",
              },
              priceDifference: 20,
              blockType: "pricing-tables",
            },
          ],
          layout: "column",
          contentBackground: {
            type: "straight",
            fillType: "color",
            color: "darkSlate",
            height: "fillMedium",
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
            color: "lightSlate",
            height: "full",
          },
          contentPadding: {
            top: "largeSmall",
            bottom: "largeSmall",
          },
          blockType: "content",
        },
      ],
      published: true,
      slug: "home",
      meta: {
        title: "Home - Corporate",
        description: "Home - Corporate",
      },
    },
  })
}

export default homePageData
