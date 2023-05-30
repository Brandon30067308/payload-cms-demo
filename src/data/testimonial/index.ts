import payload from "payload"

export async function testimonialData(testimonial: {
  companyName: string
  companyLogo?: string
  clientName: string
  clientImage: string
  clientRole: string
  testimonySummary?: string
  testimony: any
  mediaType?: string
  media?: string
  videoThumbnail?: string
}) {
  return await payload.create({
    collection: "testimonials",
    data: testimonial,
  })
}

export default testimonialData
