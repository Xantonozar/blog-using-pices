import fs from 'fs';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'
import OnThisPage from '@/components/OnThisPage';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
export default async function Page({ params }) {
    const filepath = `content/${params.slug}.md`;
    if (!fs.existsSync(filepath)) {
        return notFound();
    }
    const fileContent = fs.readFileSync(filepath, "utf8");
    const { content, data} = matter(fileContent);
    
   const processor =  unified()
   .use(remarkParse)
   .use(remarkRehype)
   .use(rehypeDocument, {title: '👋🌍'})
   .use(rehypeFormat)
   .use(rehypeStringify).use(rehypeSlug).use(rehypeAutolinkHeadings).use(rehypePrettyCode,{
    theme: 'github-dark',
    transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ],
   })
   
   const htmlContent = (await processor.process(content)).toString();
   
    // const blog = {
    //     title: "Sample Blog Title",
    //     author: "John Doe",
    //     description: "This is a sample blog description.",
    //     date: "October 10, 2023",
    //     content: "<p>Your HTML content here</p>"
    // };

    return (
        <div className="max-w-5xl mx-auto  p-6">
            <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
            <div className="text-gray-600 mb-2 dark:prose-invert prose">
                <span className=" dark:prose-invert prose"><b>Author:</b> {data.author}</span>
            </div>
            <div className="text-gray-600 mb-2">
                <span className=" dark:prose-invert prose"><b>Date:</b> {data.date}</span>
            </div>
            <div className="text-gray-800 mb-4">
                <span className=" dark:prose-invert prose"><b>Description:</b> {data.description}</span>
            </div>
            <div className="prose max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        

        </div>
    );
}