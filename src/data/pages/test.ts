import payload from "payload"

async function testPageData(testFormId: string) {
  await payload.create({
    collection: "pages",
    data: {
      title: "Test",
      heroPadding: {
        top: "extraLargeSmall",
        bottom: "extraLargeSmall",
        left: "none",
        right: "none",
      },
      heroMaxWidth: "large",
      heroBackground: {
        type: "straight",
        fillType: "color",
        color: "darkSlate",
        height: "full",
      },
      heroType: "minimal",
      heroContent: [
        {
          children: [
            {
              text: "Welcome!",
            },
          ],
          type: "h1",
        },
      ],
      heroCallToAction: [
        {
          link: {
            type: "page",
            label: "Join Us!",
            page: "/",
            sublinks: [],
          },
          size: "medium",
          appendArrow: true,
        },
      ],
      heroMediaDecoration: false,
      layout: [
        {
          layoutBlocks: [
            {
              content: [
                {
                  type: "h2",
                  children: [
                    {
                      text: "Join us today!",
                    },
                  ],
                },
              ],
              decoration: false,
              width: "full",
              contentPlacement: "center",
              textAlignment: "center",
              textSize: "medium",
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
              form: testFormId,
              blockType: "form-block",
            },
          ],
          layout: "column",
          contentMaxWidth: "large",
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
          retract: false,
          blockType: "content",
        },
      ],
      includeFooter: true,
      published: true,
      slug: "test",
      meta: {
        title: "Test - Corporate",
        description: "Test - Corporate",
      },
    },
  })
}

export default testPageData
