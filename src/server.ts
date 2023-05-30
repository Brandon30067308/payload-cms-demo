import express from "express"
import payload from "payload"
import dotenv from "dotenv"
import path from "path"

import { reset } from "./cron/reset"

dotenv.config({ path: path.resolve(__dirname, "../.env") })

const app = express()

// Redirect all traffic at root to admin UI
app.get("/", function (_, res) {
  res.redirect("/admin")
})

const start = async () => {
  try {
    await payload.init({
      secret: process.env.PAYLOAD_SECRET_KEY,
      mongoURL: process.env.MONGO_URI,
      express: app,
      /*email: {
        fromName: "Dev",
        fromAddress: "",
        logMockCredentials: true,
      }*/
      onInit: async () => {
        payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)

        // Seed database with startup data
        await reset()
      },
    })
  } catch (err: any) {
    console.log("an error occurred: ", err.message)
    throw new Error(err.message)
  }

  const port = process.env.PORT || 8080
  app.listen(port, () => {
    console.log(`app running on port ${port}`)
  })
}

start()
