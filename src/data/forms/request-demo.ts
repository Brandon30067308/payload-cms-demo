import payload from "payload"

async function requestDemoFormData() {
  return await payload.create({
    collection: "forms",
    data: {
      title: "Request Demo",
      fields: [
        {
          name: "email",
          label: "Email",
          width: 100,
          required: true,
          blockType: "email",
        },
        {
          name: "contactname",
          label: "Contact Name",
          width: 100,
          required: true,
          blockType: "text",
        },
        {
          name: "city",
          label: "City",
          width: 50,
          required: true,
          blockType: "text",
        },
        {
          name: "postalcode",
          label: "Postal Code",
          width: 50,
          required: true,
          blockType: "text",
        },
        {
          name: "streetaddress",
          label: "Street Address",
          width: 100,
          required: true,
          blockType: "text",
        },
        {
          name: "country",
          label: "Country",
          width: 100,
          options: [
            {
              label: "United States",
              value: "united states",
            },
            {
              label: "United Kingdom",
              value: "united kingdom",
            },
            {
              label: "Germany",
              value: "germany",
            },
          ],
          required: true,
          blockType: "select",
        },
      ],
      submitButtonLabel: "Submit",
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
    },
  })
}

export default requestDemoFormData
