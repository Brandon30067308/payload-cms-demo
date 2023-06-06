import payload from "payload"

async function newsletterFormData() {
  return await payload.create({
    collection: "forms",
    data: {
      title: "Newsletter",
      fields: [
        {
          name: "email",
          label: "Your Email",
          width: 100,
          required: true,
          blockType: "email",
        },
      ],
      submitButtonLabel: "Subscribe",
      confirmationType: "message",
      confirmationMessage: [
        {
          children: [
            {
              text: "Success!",
            },
          ],
        },
      ],
      redirect: {
        type: "reference",
      },
      emails: [],
    },
  })
}

export default newsletterFormData
