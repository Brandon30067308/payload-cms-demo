import payload from "payload"

async function headerData() {
  await payload.updateGlobal({
    slug: "header",
    data: {
      links: [
        {
          link: {
            type: "page",
            label: "Pricing",
            page: "/pricing",
            sublinks: [],
          },
        },
        {
          link: {
            type: "page",
            label: "About",
            page: "/about",
            sublinks: [],
          },
        },
        {
          link: {
            type: "page",
            label: "Blog",
            page: "/blog",
            sublinks: [],
          },
        },
        {
          link: {
            type: "page",
            label: "Wall of Love",
            page: "/wall-of-love",
            sublinks: [],
          },
        },
        {
          link: {
            type: "multiple",
            label: "Resources",
            page: "/",
            sublinks: [
              {
                type: "page",
                label: "404",
                page: "/404",
              },
              {
                type: "page",
                label: "Support",
                page: "/support",
              },
            ],
          },
        },
      ],
    },
  })
}

export default headerData
