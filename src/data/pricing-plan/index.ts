import payload from "payload"

export async function pricingPlanData(
  name: string,
  price: {
    monthly: number
    yearly: number
  },
  description: string,
  featuresListText: string,
  coreFeatures: Array<string>,
  callToAction: { type?: "page"; label: string; link: string },
  tag: string = ""
) {
  return await payload.create({
    collection: "pricing-plans",
    data: {
      name,
      description: [
        {
          children: [
            {
              text: description,
            },
          ],
        },
      ],
      price,
      featuresListText,
      coreFeatures: coreFeatures.map((feature) => ({
        feature,
      })),
      tag,
      callToAction: [
        {
          link: {
            type: "page",
            label: callToAction.label,
            page: callToAction.link,
            sublinks: [],
          },
          size: "small",
          appendArrow: true,
        },
      ],
    },
  })
}

export default pricingPlanData
