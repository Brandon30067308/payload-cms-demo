import payload from "payload"

async function newsletterData(formId: string) {
  await payload.updateGlobal({
    slug: "newsletter",
    data: {
      form: formId,
      globalType: "newsletter",
      createdAt: "2023-05-10T15:54:51.337Z",
      updatedAt: "2023-05-10T15:54:51.337Z",
    },
  })
}

export default newsletterData
