import { createServerFn } from "@tanstack/react-start";
import {
  sendCallRequestEmails,
  type CallRequestPayload,
  type SendCallRequestResult,
} from "../server/email";

export const submitCallRequest = createServerFn({ method: "POST" })
  .validator((data: CallRequestPayload) => data)
  .handler(async ({ data }): Promise<SendCallRequestResult> => {
    return await sendCallRequestEmails(data);
  });
