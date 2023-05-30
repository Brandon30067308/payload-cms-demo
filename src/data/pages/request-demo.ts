import payload from "payload"

async function requestDemoPageData(
  logoImageId: string,
  bgImageId: string,
  testimonial: string,
  formId: string
) {
  await payload.create({
    collection: "pages",
    data: {
      title: "Request Demo",
      heroPadding: {
        top: "none",
        bottom: "none",
        left: "none",
        right: "none",
      },
      heroMaxWidth: "large",
      heroBackground: {
        type: "straight",
        fillType: "none",
        color: "none",
        height: "full",
      },
      heroType: "minimal",
      heroCallToAction: [],
      heroMediaDecoration: false,
      layoutDirection: "row",
      layout: [
        {
          layoutBlocks: [
            {
              media: logoImageId,
              mediaPadding: { top: "none", bottom: "extraSmallLarge" },
              mediaLink: [
                {
                  link: {
                    type: "page",
                    label: "Tidy",
                    page: "/",
                    sublinks: [],
                  },
                },
              ],
              blockType: "media-block",
            },
            {
              content: [
                {
                  children: [
                    {
                      text: "Request your demo",
                    },
                  ],
                  type: "h2",
                },
              ],
              decoration: false,
              width: "full",
              contentPlacement: "left",
              textAlignment: "left",
              textSize: "medium",
              textContentMaxWidth: "small",
              textContentPadding: {
                top: "none",
                bottom: "mediumSmall",
                left: "none",
                right: "none",
              },
              blockType: "text-content",
            },
            {
              form: formId,
              type: "requestDemo",
              blockType: "form-block",
            },
          ],
          width: "half",
          height: "fill",
          layout: "column",
          contentMaxWidth: "small",
          basePadding: true,
          contentBackground: {
            type: "straight",
            fillType: "none",
            color: "none",
            height: "full",
          },
          contentPadding: {
            top: "small",
            bottom: "small",
            left: "none",
            right: "none",
          },
          retract: false,
          blockType: "content",
        },
        {
          layoutBlocks: [
            {
              background: bgImageId,
              singleTestimonialPadding: {
                top: "none",
                bottom: "none",
                left: "none",
                right: "none",
              },
              testimonial,
              blockType: "single-testimonial",
            },
          ],
          width: "half",
          height: "fill",
          layout: "column",
          contentMaxWidth: "full",
          basePadding: false,
          contentBackground: {
            type: "straight",
            fillType: "none",
            color: "none",
            height: "full",
          },
          contentPadding: {
            top: "none",
            bottom: "none",
            left: "none",
            right: "none",
          },
          hideOnSmallScreens: true,
          retract: false,
          blockType: "content",
        },
      ],
      includeHeader: false,
      includeFooter: false,
      published: true,
      slug: "request-demo",
      meta: {
        title: "Request Demo - Corporate",
        description: "Request Demo - Corporate",
      },
    },
  })
}

export default requestDemoPageData
