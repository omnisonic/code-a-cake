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
  
  // Cake Styles
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
      background-color: none;
      background-image: radial-gradient(circle at center, #ff69b4 5px, transparent 5px);
      background-size: 30px 30px;
    }`,
  'cake-stripes': `
    .stripes {
      background: repeating-linear-gradient(45deg, #ff6b6b 0px, #ff6b6b 10px, transparent 10px, transparent 20px);
    }`,
  'cake-sparkles': `
    .sparkles {
      background-image: radial-gradient(circle at 30% 30%, gold 1px, transparent 3px),
                       radial-gradient(circle at 70% 60%, gold 1px, transparent 3px),
                       radial-gradient(circle at 40% 80%, gold 1px, transparent 3px);
      background-color: #ffb5e8;
    }`,
  'cake-zigzag': `
    .zigzag {
      background: linear-gradient(135deg, #43c6ac 25%, transparent 25%) -10px 0,
                 linear-gradient(225deg, #43c6ac 25%, transparent 25%) -10px 0,
                 linear-gradient(315deg, #43c6ac 25%, transparent 25%),
                 linear-gradient(45deg, #43c6ac 25%, transparent 25%);
      background-size: 20px 20px;
      background-color: #96e4df;
    }`,
  'cake-confetti': `
    .confetti {
      background-image: 
        radial-gradient(circle at 10% 20%, #ff6b6b 2px, transparent 2px),
        radial-gradient(circle at 80% 30%, #4ecdc4 3px, transparent 3px),
        radial-gradient(circle at 40% 70%, #ffe66d 2px, transparent 2px),
        radial-gradient(circle at 70% 90%, #ff6b6b 3px, transparent 3px);
      background-color: #fff;
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