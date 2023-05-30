import payload from "payload"

async function footerData() {
  await payload.updateGlobal({
    slug: "footer",
    data: {
      text: "The smarter way to start your next idea.",
      items: [
        {
          title: "How it works",
          links: [
            {
              link: {
                type: "page",
                label: "Overview",
                page: "/",
                sublinks: [],
              },
            },
            {
              link: {
                type: "page",
                label: "Pricing",
                page: "/",
                sublinks: [],
              },
            },
            {
              link: {
                type: "page",
                label: "Service Areas",
                page: "/",
                sublinks: [],
              },
            },
          ],
        },
        {
          title: "Resources",
          links: [
            {
              link: {
                type: "page",
                label: "Customer Stories",
                page: "/",
                sublinks: [],
              },
            },
            {
              link: {
                type: "page",
                label: "Knowledge Base",
                page: "/",
                sublinks: [],
              },
            },
            {
              link: {
                type: "page",
                label: "Contact Us",
                page: "/",
                sublinks: [],
              },
            },
          ],
        },
        {
          title: "Products",
          links: [
            {
              link: {
                type: "page",
                label: "Corporate Partners",
                page: "/",
                sublinks: [],
              },
            },
            {
              link: {
                type: "page",
                label: "Secure Identity",
                page: "/",
                sublinks: [],
              },
            },
            {
              link: {
                type: "page",
                label: "Legal Help",
                page: "/",
                sublinks: [],
              },
            },
            {
              link: {
                type: "page",
                label: "First Capital",
                page: "/",
                sublinks: [],
              },
            },
          ],
        },
        {
          title: "Company",
          links: [
            {
              link: {
                type: "page",
                label: "About Us",
                page: "/",
                sublinks: [],
              },
            },
            {
              link: {
                type: "page",
                label: "Careers",
                page: "/",
                sublinks: [],
              },
            },
            {
              link: {
                type: "page",
                label: "Terms of Use",
                page: "/",
                sublinks: [],
              },
            },
          ],
        },
      ],
    },
  })
}

export default footerData
