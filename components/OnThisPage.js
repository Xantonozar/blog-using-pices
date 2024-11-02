"use client"
import React from 'react';
import parse from 'html-react-parser';

const OnThisPage = ({ htmlContent }) => {
  // Function to extract all <h1> headings from the HTML content
  const extractHeadings = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    const headings = div.querySelectorAll('h1, h2, h3, h4, h5, h6');
    return Array.from(headings).map(heading => {
      if (!heading.id) {
        heading.id = heading.textContent.toLowerCase().replace(/\s+/g, '-');
      }
      return {
        id: heading.id,
        text: heading.textContent
      };
    });
  };

  // Extract the headings
  const headings = extractHeadings(htmlContent);
alert(headings)
  return (
    <div className='absolute top-24 right-56'>
      <h1 className='text-lg font-bold'>On This Page</h1>
      <ul>
        {headings.map((heading, index) => (
          <li className='text-xs space-y-4' key={index}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
      <div></div>
    </div>
  );
};

export default OnThisPage;

