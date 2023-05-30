import payload from "payload"

async function aboutPageData(
  heroBackgroundId: string,
  heroImageId: string,
  stats: Array<{ name: string; value: string }>,
  signatureImageId: string,
  imageGridImages: Array<string>,
  contentGridImageId: string,
  contentGridItems: Array<string>,
  employees: Array<string>,
  customers: Array<string>
) {
  await payload.create({
    collection: "pages",
    data: {
      title: "About",
      heroPadding: {
        top: "extraLargeSmall",
        bottom: "none",
        left: "none",
        right: "none",
      },
      heroMaxWidth: "large",
      heroBackground: {
        type: "straight",
        fillType: "image",
        image: heroBackgroundId,
        height: "fillSmall",
      },
      heroType: "contentAboveMedia",
      heroMediaType: "image",
      heroMedia: heroImageId,
      heroContent: [
        {
          type: "h1",
          children: [
            {
              text: "We're designing a new way to do business",
            },
          ],
        },
      ],
      heroCallToAction: [],
      layout: [
        {
          layoutBlocks: [
            {
              stats,
              statsListPadding: {
                top: "none",
                bottom: "none",
              },
              blockType: "stats-list",
            },
          ],
          retract: true,
          layout: "column",
          contentBackground: {
            type: "straight",
            fillType: "none",
            height: "full",
          },
          contentPadding: {
            top: "none",
            bottom: "none",
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
                      text: "Our Story",
                    },
                  ],
                  type: "h3",
                },
              ],
              decoration: false,
              textAlignment: "left",
              textContentMaxWidth: "medium",
              textContentPadding: {
                top: "none",
                bottom: "extraSmall",
                left: "none",
                right: "none",
              },
              blockType: "text-content",
            },
            {
              content: [
                {
                  children: [
                    {
                      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum. Neque sodales ut etiam sit amet how to manage. Malesuada proin libero nunc consequat interdum varius. Quam pellentesque nec nam aliquam sem et tortor consequat. Pellentesque adipiscing commodo elit at imperdiet. Semper auctor neque ",
                    },
                    {
                      text: "vitae tempus quam pellentesque",
                      bold: true,
                    },
                    {
                      text: " nec. Amet dictum sit amet justo donec enim diam. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Odio pellentesque diam volutpat commodo sed. Elit sed vulputate mi sit amet mauris commodo quis imperdiet.",
                    },
                  ],
                },
              ],
              textSize: "small",
              decoration: false,
              textAlignment: "left",
              textContentMaxWidth: "medium",
              textContentPadding: {
                top: "none",
                bottom: "small",
                left: "none",
                right: "none",
              },
              blockType: "text-content",
            },
            {
              content: [
                {
                  children: [
                    {
                      text: "Temper auctor neque vitae tempus quam pellentesque nec. Amet dictum sit amet justo donec enim diam. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Odio pellentesque diam volutpat commodo sed. Elit sed vulputate mi sit amet mauris commodo quis imperdiet.",
                    },
                  ],
                },
              ],
              textSize: "small",
              decoration: false,
              textAlignment: "left",
              textContentMaxWidth: "medium",
              textContentPadding: {
                top: "none",
                bottom: "small",
                left: "none",
                right: "none",
              },
              blockType: "text-content",
            },
            {
              content: [
                {
                  children: [
                    {
                      text: "The Tidy Team",
                    },
                  ],
                },
              ],
              textSize: "small",
              decoration: false,
              textAlignment: "left",
              textContentMaxWidth: "medium",
              textContentPadding: {
                top: "none",
                bottom: "small",
                left: "none",
                right: "none",
              },
              blockType: "text-content",
            },
            {
              media: signatureImageId,
              mediaPadding: {
                top: "none",
                bottom: "none",
              },
              blockType: "media-block",
            },
          ],
          layout: "column",
          contentBackground: {
            type: "straight",
            fillType: "none",
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
                      text: "We are fully distributed, which means you can join us whenever you want.",
                    },
                  ],
                  type: "h2",
                },
              ],
              textContentPadding: {
                top: "none",
                bottom: "largeSmall",
              },
              blockType: "text-content",
            },
          ],
          layout: "column",
          basePadding: false,
          contentBackground: {
            type: "straight",
            fillType: "color",
            color: "lightSlate",
            height: "full",
          },
          contentPadding: {
            top: "largeSmall",
            bottom: "none",
            left: "none",
            right: "none",
          },
          blockType: "content",
        },
        {
          layoutBlocks: [
            {
              images: imageGridImages.map((id) => ({
                image: id,
              })),
              fadeSides: true,
              imageGridPadding: {
                bottom: "none",
                top: "none",
              },
              blockType: "image-grid",
            },
            {
              spacing: {
                vertical: {
                  large: "mediumSmall",
                  small: "small",
                },
              },
              blockType: "spacing",
            },
            {
              divideStyle: "vertical",
              hideOnSmallScreens: true,
              blockType: "divide",
            },
          ],
          layout: "column",
          contentMaxWidth: "extraLarge",
          basePadding: false,
          contentBackground: {
            type: "straight",
            fillType: "color",
            color: "lightSlate",
            height: "full",
          },
          contentPadding: {
            top: "none",
            bottom: "mediumSmall",
            left: "none",
            right: "none",
          },
          blockType: "content",
        },
        {
          layoutBlocks: [
            {
              contents: contentGridItems.map((item) => ({
                image: contentGridImageId,
                heading: item,
                content: [
                  {
                    children: [
                      {
                        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                      },
                      {
                        text: "7 open positions",
                        bold: true,
                      },
                    ],
                  },
                ],
              })),
              contentGridPadding: {
                top: "none",
                bottom: "largeSmall",
              },
              contentAlignment: "center",
              contentGridTextSize: "small",
              blockType: "content-grid",
            },
            {
              callToAction: [
                {
                  link: {
                    type: "page",
                    label: "See Open Positions",
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
                      text: "What do we value? All sorts of things!",
                    },
                  ],
                  type: "h2",
                },
              ],
              textContentPadding: {
                bottom: "largeSmall",
                top: "none",
              },
              blockType: "text-content",
            },
            {
              employees,
              employeesListPadding: {
                top: "none",
                bottom: "none",
              },
              blockType: "employees-list",
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
                      text: "We're fortunate to have incredible investors.",
                    },
                  ],
                  type: "h2",
                },
              ],
              textContentPadding: {
                bottom: "largeSmall",
                top: "none",
              },
              blockType: "text-content",
            },
            {
              customers,
              customersListPadding: {
                bottom: "none",
                top: "none",
              },
              customersListDisplayStyle: "grid",
              blockType: "customers-list",
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
                      text: "Want to be part of the journey?",
                    },
                  ],
                  type: "h2",
                },
                {
                  children: [
                    {
                      text: "We are always open to talk to great people who want to help us shape the future of work, and we have job openings all over the world.",
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
                    label: "See Open Positions",
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
      includeFooter: true,
      published: true,
      slug: "about",
      meta: {
        title: "About - Corporate",
        description: "About - Corporate",
      },
    },
  })
}

export default aboutPageData
