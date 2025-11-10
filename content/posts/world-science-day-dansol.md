"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import CommentSection from "../../components/CommentSection";

const content = `---
title: "Celebrating World Science Day at Dansol Schools"
date: "2025-11-10"
author: "Dansol Schools"
image: "/blog/world-science-day-cover.jpg"
slug: "world-science-day-dansol"
---

## 🔬 Celebrating World Science Day at Dansol Schools
**Theme: Building Trust in Science**

Today, Dansol Schools proudly joins the global community in marking **World Science Day for Peace and Development**, an annual celebration established by UNESCO to emphasize the critical role of science in promoting sustainable progress, peace, and human development.

At Dansol, we believe that science is one of God’s greatest gifts to humanity — a pathway to understanding His creation and improving life on earth. True to our mission of combining **academic excellence with godly values**, we nurture students who use scientific knowledge responsibly, with integrity, and for the common good.

> “Science helps us understand God’s creation, but wisdom helps us use that knowledge for good.”
> — Mrs. Adunola Akinyemiju, Founder, Dansol Schools

---

![Dansol Students in Lab](/blog/world-science-day-lab.jpg)

## 🔭 The Importance of Science in Today’s World

Science is at the heart of progress. It shapes innovation, improves health, and solves problems that affect our everyday lives. From medicine and technology to agriculture and environmental protection, science drives the solutions that sustain our world.

By fostering curiosity and critical thinking, science helps students:

1. **Develop problem-solving skills**
2. **Learn the value of evidence and truth**
3. **Make informed decisions about their health, environment, and communities**
4. **Build innovations that can change the world for good**

At Dansol, we teach our learners that **faith and science are not in conflict** — both seek truth, though through different lenses. When guided by godly wisdom, science becomes a force for peace, compassion, and positive change.

---

![Dansol Science Fair](/blog/world-science-day-fair.jpg)

## 🧪 Dansol’s Contribution to Science Education

Dansol Schools has consistently been a model of excellence in science education in Nigeria. Over the years, we have:

- Built well-equipped science laboratories that allow students to explore physics, chemistry, and biology through hands-on experiments.
- Organized **annual science fairs and exhibitions**, where students showcase innovative projects and research ideas addressing real-world problems.
- Launched the **Dansol Virtual School**, which integrates digital tools and modern teaching methods to promote personalized learning.
- Trained teachers to stay updated with emerging trends in **STEM**.
- Encouraged **girl-child participation in science** through mentorship and competitions.

These initiatives have helped Dansol produce students who not only excel in science competitions but also pursue scientific and engineering careers with passion and integrity.

---

![Dansol Innovation Day](/blog/world-science-day-innovation.jpg)

## 🌍 Inspiring the Next Generation of Innovators

As we celebrate **World Science Day**, we remind our students that science is more than formulas and experiments — it is a calling to discover, to create, and to serve.

By applying their knowledge with humility and responsibility, Dansol students are building the foundation for a future where science promotes harmony, development, and peace.

We are confident that the next great inventors, researchers, and changemakers will emerge from classrooms where curiosity meets faith — from **Dansol Schools**.
`;

export default function BlogPostPage({ frontmatter, slug }) {
  return (
    <article className="prose prose-lg lg:prose-xl mx-auto py-12 px-4 font-[Inter]">
      {/* Markdown content */}
      <ReactMarkdown>{content}</ReactMarkdown>

      {/* ✅ Google AdSense Block */}
      <div className="mt-16 text-center">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-8061135224509487"
          data-ad-slot="5161174753"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
        }}
      />

      {/* 💬 Comments Section */}
      <CommentSection postId={slug} />
    </article>
  );
}
