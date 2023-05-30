import payload from "payload"

async function blogPostData(
  postImageId: string,
  title: string,
  categories: Array<string>,
  userId: string
) {
  return await payload.create({
    collection: "blog-posts",
    data: {
      title,
      readTime: "5 mins",
      summary:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
      image: postImageId,
      layout: [
        {
          postContent: [
            {
              children: [
                {
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum. Neque sodales ut etiam sit amet ",
                },
                {
                  text: "how to manage anything malesuada",
                  bold: true,
                },
                {
                  text: " proin libero nunc consequat interdum varius. Quam pellentesque nec nam aliquam sem ",
                },
                {
                  type: "link",
                  newTab: false,
                  url: "http://localhost:3001/blog/how-startups-can-sell-more-using-smart-channels#0",
                  children: [
                    {
                      text: "et tortor consequat",
                    },
                  ],
                },
                {
                  text: ". Pellentesque adipiscing commodo elit at imperdiet. Semper auctor neque vitae tempus quam pellentesque nec. Amet dictum sit amet justo donec enim diam. ",
                },
                {
                  text: "Varius sit amet mattis vulputate enim",
                  bold: true,
                },
                {
                  text: " nulla aliquet porttitor. Odio pellentesque diam volutpat commodo sed. Elit sed vulputate mi sit amet mauris commodo quis imperdiet.",
                },
              ],
            },
            {
              children: [
                {
                  text: "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Eget sit amet tellus cras adipiscing enim eu. Neque aliquam vestibulum morbi blandit cursus risus.",
                },
              ],
            },
          ],
          blockType: "post-content",
        },
        {
          blockType: "separator",
        },
        {
          postContent: [
            {
              children: [
                {
                  text: "1 / Adaptation of the mobile version",
                },
              ],
              type: "h2",
            },
            {
              children: [
                {
                  text: "Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat auctor urna nunc id cursus metus aliquam eleifend, arcu dictum varius duis at consectetur lorem donec massa sapien, sed risus ultricies tristique nulla aliquet.\n",
                },
              ],
            },
          ],
          blockType: "post-content",
        },
        {
          postMedia: postImageId,
          blockType: "post-media",
        },
        {
          postContent: [
            {
              children: [
                {
                  text: "Why this change seems mostly visual",
                },
              ],
              type: "h3",
            },
            {
              children: [
                {
                  text: "Et leo duis ut diam quam nulla porttitor porttitor lacus luctus accumsan tortor, lorem dolor sed viverra ipsum nunc aliquet bibendum enim eu augue ut lectus arcu bibendum at. Non sodales neque sodales ut etiam sit. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam.",
                },
              ],
            },
            {
              children: [
                {
                  text: "",
                },
              ],
            },
          ],
          blockType: "post-content",
        },
      ],
      status: "published",
      publishedAt: "2023-05-24T23:00:00.000Z",
      author: userId,
      categories: categories,
      meta: {
        title: "Blog Post - Corporate",
        description: "Blog Post - Corporate",
        keywords: "blog post",
      },
    },
  })
}

export default blogPostData
