import axios from "axios"

const afterSupportArticleChange: any = async ({ doc }) => {
  try {
    const revalidateUrl = new URL(`${process.env.APP_URL}/api/revalidate`)
    revalidateUrl.searchParams.append("tag", doc.slug)

    await axios.post(revalidateUrl.toString(), {
      secret: process.env.REVALIDATE_SECRET,
    })

    revalidateUrl.searchParams.set("tag", "support-articles")

    await axios.post(revalidateUrl.toString(), {
      secret: process.env.REVALIDATE_SECRET,
    })
  } catch (err) {
    console.error("error: ", err?.message)
  } finally {
    return doc
  }
}

export default afterSupportArticleChange
