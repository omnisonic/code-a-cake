const tagSnippets = {
  // Basic Tags
  'heading': '<h1>Your Heading Here</h1>',
  'paragraph': '<p>Your paragraph text here</p>',
  'list': `<ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
</ul>`,
  'link': '<a href="https://example.com">Link Text</a>',
  'image': '<img src="image.jpg" alt="Image description">',
  'div': '<div class=""></div>',
  'class': 'class="your-class-name"',
  
  // Container Tags
  'section': '<section>\n    <h2>Section Title</h2>\n    <p>Section content</p>\n</section>',
  'article': '<article>\n    <h2>Article Title</h2>\n    <p>Article content</p>\n</article>',
  'span': '<span>Inline text</span>',
  'cake-chocolate': `
    .chocolate {
      background-color: #704214;
      color: #fff;
    }`,
  'cake-vanilla': `
    .vanilla {
      background-color: #f3e5ab;
      color: #000;
    }`,
  'cake-strawberry': `
    .strawberry {
      background-color: #f9c7ca;
      color: #000;
    }`,
  'cake-rainbow': `
    .rainbow {
      background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
      color: #fff;
    }`,
  'cake-polkadot': `
    .polkadot {
      background-color: transparent;
      background-image: radial-gradient(circle at center, #ff69b4 10px, transparent 11px);
      background-size: 40px 40px;
      color: #000;
    }`
};

import { getEditor } from './editor.js';

function attachSnippetHandlers() {
  document.querySelectorAll('.dropdown-content a').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      // Get the closest anchor element in case we clicked on a child element
      const anchor = e.target.closest('a');
      if (!anchor) return;
      
      const tagKey = anchor.dataset.tag;
      const codeEditor = getEditor();
      console.log('Clicked tag:', tagKey); // Debug log
      
      if (tagSnippets[tagKey] && codeEditor) {
        // Get cursor position
        const cursor = codeEditor.getCursor();
        // Insert the snippet at cursor position
        codeEditor.replaceRange(tagSnippets[tagKey], cursor);
      }
    });
  });
}

// Initial attachment of handlers
document.addEventListener('DOMContentLoaded', attachSnippetHandlers);

// Re-attach handlers when menu content changes
const menuContainer = document.getElementById('menu-container');
if (menuContainer) {
  const observer = new MutationObserver(() => {
    attachSnippetHandlers();
  });
  
  observer.observe(menuContainer, {
    childList: true,
    subtree: true
  });
}

export default tagSnippets;