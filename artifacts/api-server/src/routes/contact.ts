import { Router, type IRouter } from "express";
import { SubmitContactBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", (req, res) => {
  const result = SubmitContactBody.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({
      success: false,
      message: "Invalid request body: " + result.error.message,
    });
    return;
  }

  const { name, email, phone, service, message } = result.data;

  req.log.info({ name, email, phone, service }, "Contact form submission received");

  res.status(201).json({
    success: true,
    message: `Thank you, ${name}! We have received your message and will get back to you at ${email} shortly.`,
  });
});

export default router;
