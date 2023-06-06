import payload from "payload"

async function newsletterData(formId: string) {
  await payload.updateGlobal({
    slug: "newsletter",
    data: {
      form: formId,
      globalType: "newsletter",
    },
  })
}

export default newsletterData
