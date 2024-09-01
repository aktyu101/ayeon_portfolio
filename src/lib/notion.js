import { NotionAPI } from "notion-client";

export const notion = new NotionAPI();

export async function getNotionData(pageId) {
  return await notion.getPage(pageId);
}
