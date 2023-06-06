import payload from "payload"

async function wallOfLovePageData(
  heroVideoId: string,
  heroVideoThumbnailId: string,
  customers: Array<string>,
  testimonials: Array<string>
) {
  await payload.create({
    collection: "pages",
    data: {
      title: "Wall Of Love",
      heroPadding: {
        top: "extraLargeSmall",
        bottom: "none",
        left: "none",
        right: "none",
      },
      heroMaxWidth: "medium",
      heroBackground: {
        type: "clipped",
        fillType: "color",
        color: "darkSlate",
        height: "overflowSmall",
      },
      heroType: "contentAboveMedia",
      heroContent: [
        {
          children: [
            {
              text: "Join 70K+ companies and investors",
            },
          ],
          type: "h1",
        },
        {
          children: [
            {
              text: "We're proud to have played a part in these amazing journeys.",
            },
          ],
        },
      ],
      heroMediaType: "video",
      heroMedia: heroVideoId,
      heroVideoThumbnail: heroVideoThumbnailId,
      heroCallToAction: [],
      layout: [
        {
          layoutBlocks: [
            {
              customers,
              customersListPadding: {
                bottom: "small",
                top: "mediumSmall",
              },
              customersListDisplayStyle: "flex",
              blockType: "customers-list",
            },
            {
              divideStyle: "vertical",
              blockType: "divide",
              hideOnSmallScreens: true,
            },
            {
              testimonials,
              testimonialsListPadding: {
                top: "mediumSmall",
                bottom: "none",
              },
              testimonialsListDisplayStyle: "detailed",
              blockType: "testimonials-list",
            },
          ],
          layout: "column",
          basePadding: true,
          contentBackground: {
            type: "straight",
            fillType: "color",
            color: "white",
            height: "full",
          },
          retract: false,
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
                      text: "What our customers are saying about us",
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
              testimonials,
              testimonialsListPadding: {
                top: "none",
                bottom: "none",
              },
              testimonialsListDisplayStyle: "simplified",
              blockType: "testimonials-list",
            },
          ],
          layout: "column",
          basePadding: true,
          contentBackground: {
            type: "straight",
            fillType: "color",
            color: "lightSlate",
            height: "full",
          },
          retract: false,
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
      slug: "wall-of-love",
      meta: {
        title: "Wall of Love - Corporate",
        description: "Wall of Love - Corporate",
      },
    },
  })
}

export default wallOfLovePageData
