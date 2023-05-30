import payload from "payload"

export async function employeeData(
  name: string,
  imageId: string,
  role: string
) {
  return await payload.create({
    collection: "employees",
    data: {
      name,
      image: imageId,
      role,
    },
  })
}

export default employeeData
