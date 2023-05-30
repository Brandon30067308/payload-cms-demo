import payload from "payload"

async function resetPasswordFormData() {
  return await payload.create({
    collection: "forms",
    data: {
      title: "Reset Password",
      fields: [
        {
          name: "email",
          label: "Email",
          width: 100,
          required: true,
          blockType: "email",
        },
      ],
      submitButtonLabel: "Reset Password",
      confirmationType: "message",
      confirmationMessage: [
        {
          children: [
            {
              text: "Success",
            },
          ],
        },
      ],
      redirect: {
        type: "reference",
      },
      emails: [],
      createdAt: "2023-05-28T19:54:07.529Z",
      updatedAt: "2023-05-28T19:54:07.529Z",
    },
  })
}

export default resetPasswordFormData
