import payload from "payload"

async function testFormData() {
  return await payload.create({
    collection: "forms",
    data: {
      title: "Test",
      fields: [
        {
          name: "firstname",
          label: "First Name",
          width: 100,
          required: true,
          blockType: "text",
        },
        {
          name: "lastname",
          label: "Last Name",
          width: 100,
          required: true,
          blockType: "text",
        },
      ],
      submitButtonLabel: "Let's go",
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
      createdAt: "2023-05-26T17:24:49.330Z",
      updatedAt: "2023-05-26T18:02:06.322Z",
    },
  })
}

export default testFormData
