import fs from "fs";
import { join } from "path";

import matter from "gray-matter";

const markdownDirectory = join(process.cwd(), "_markdown");

export default function getMarkdownContent(filename: string) {
  const fullPath = join(markdownDirectory, `${filename}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return matter(fileContents);
}
