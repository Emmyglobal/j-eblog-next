import fs from "fs";
import path from "path";
import { JSDOM } from "jsdom";
import TurndownService from "turndown";

const inputDir = path.join(process.cwd(), "original_html");
const outputDir = path.join(process.cwd(), "content/posts");

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// initialize HTML→Markdown converter
const td = new TurndownService();

fs.readdirSync(inputDir)
  .filter(f => f.endsWith(".html"))
  .forEach(file => {
    const filePath = path.join(inputDir, file);
    const html = fs.readFileSync(filePath, "utf-8");
    const dom = new JSDOM(html);
    const doc = dom.window.document;

    // extract title, date, etc.
    const title =
      doc.querySelector("h1")?.textContent?.trim() ||
      path.basename(file, ".html").replace(/[-_]/g, " ");
    const metaDate =
      doc.querySelector('meta[name="date"]')?.content ||
      doc.querySelector("time")?.textContent ||
      new Date().toISOString();

    const contentElement =
      doc.querySelector("article") ||
      doc.querySelector(".post-content") ||
      doc.querySelector("body");

    const markdownBody = td.turndown(contentElement?.innerHTML || "");

    // generate Markdown frontmatter
    const slug = path.basename(file, ".html");
    const md = `---
title: "${title.replace(/"/g, "'")}"
date: "${metaDate}"
slug: "${slug}"
category: "General"
image: "/images/${slug}.jpg"
---

${markdownBody}
`;

    fs.writeFileSync(path.join(outputDir, slug + ".md"), md);
    console.log(`✅ Converted: ${file} → ${slug}.md`);
  });

console.log("🎉 Conversion complete!");

