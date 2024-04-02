import Medusa from "@medusajs/medusa-js"

const medusa = new Medusa({
  baseUrl: MEDUSA_BACKEND_URL,
  maxRetries: 3,
})
await medusa.admin.auth.getToken({
  email: "billbillions1010@gmail.com",
  password: "Qwerty123",
})
// send authenticated requests now