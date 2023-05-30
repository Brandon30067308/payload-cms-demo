import payload from "payload"

async function signinFormData() {
  return await payload.create({
    collection: "forms",
    data: {
      title: "Sign In",
      fields: [
        {
          name: "email",
          label: "Email",
          width: 100,
          required: true,
          blockType: "email",
        },
        {
          name: "password",
          label: "Password",
          width: 100,
          required: true,
          blockType: "text",
        },
      ],
      submitButtonLabel: "Sign In",
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

export default signinFormData
