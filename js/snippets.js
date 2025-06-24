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
  'candle-row-container': `
      .candle-row-container {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 10px;
          margin-top: 20px;
      }`,
  
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
    }`,
  // Candle Styles
  'candle-basic': `
    .candle-basic {
      width: 10px;
      height: 40px;
      background-color: #f0e68c; /* Khaki */
      border-radius: 2px;
      position: relative;
      margin: 5px;
    }
    .candle-basic::before {
      content: '';
      position: absolute;
      top: -5px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 8px;
      background-color: #8b4513; /* SaddleBrown */
      border-radius: 1px;
    }
    .candle-basic::after {
      content: '';
      position: absolute;
      top: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      border-bottom: 6px solid orange;
    }`,
  'candle-striped': `
    .candle-striped {
      width: 12px;
      height: 50px;
      background: repeating-linear-gradient(
        to bottom,
        #ff69b4, /* Hot Pink */
        #ff69b4 10px,
        #fff 10px,
        #fff 20px
      );
      border-radius: 3px;
      position: relative;
      margin: 5px;
    }
    .candle-striped::before {
      content: '';
      position: absolute;
      top: -6px;
      left: 50%;
      transform: translateX(-50%);
      width: 5px;
      height: 10px;
      background-color: #a0522d; /* Sienna */
      border-radius: 1px;
    }
    .candle-striped::after {
      content: '';
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-bottom: 8px solid yellow;
    }`,
  'candle-fancy': `
    .candle-fancy {
      width: 15px;
      height: 60px;
      background-color: #add8e6; /* LightBlue */
      border-radius: 7px / 3px; /* Oval top and bottom */
      position: relative;
      margin: 5px;
      box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    }
    .candle-fancy::before {
      content: '';
      position: absolute;
      top: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 6px;
      height: 12px;
      background-color: #696969; /* DimGray */
      border-radius: 2px;
    }
    .candle-fancy::after {
      content: '';
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 10px solid gold;
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
