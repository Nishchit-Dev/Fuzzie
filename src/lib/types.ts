import { z } from "zod";
import { ConnectionProviderProps } from "@/providers/connections-provider";
export const EditUserProfileSchema = z.object({
  email: z.string().email("Required"),
  name: z.string().min(1, "Reqiured"),
});

export type ConnectionType = "Google Drive" | "Notion" | "Slack" | "Discord"


export type Connection = {
  title:ConnectionType
  description:string
  image:string
  connectionKey: keyof ConnectionProviderProps
  accessTokenKey?:string
  alwaysTrue?: boolean
  slackSpecial?: boolean
}