import payload from "payload"

async function socialMediaData() {
  await payload.updateGlobal({
    slug: "social-media",
    data: {
      items: [
        {
          label: "twitter",
          link: "https://twitter.com/test",
        },
        {
          label: "facebook",
          link: "https://facebook.com/test",
        },
        {
          label: "github",
          link: "https://github.com/test",
        },
        {
          label: "telegram",
          link: "https://telegram.com/test",
        },
      ],
    },
  })
}

export default socialMediaData
