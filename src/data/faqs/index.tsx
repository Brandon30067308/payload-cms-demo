import payload from "payload"

export async function faqData(question: string) {
  return await payload.create({
    collection: "faqs",
    data: {
      question,
      answer: [
        {
          children: [
            {
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
          ],
        },
      ],
    },
  })
}

export default faqData
