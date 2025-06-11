const tagSnippets = {
  'heading': '<h1>Your Heading Here</h1>',
  'paragraph': '<p>Your paragraph text here</p>',
  'list': `<ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
</ul>`,
  'link': '<a href="https://example.com">Link Text</a>',
  'image': '<img src="image.jpg" alt="Image description">',
  'div': '<div class="container">\n    Your content here\n</div>',
  'section': '<section>\n    <h2>Section Title</h2>\n    <p>Section content</p>\n</section>',
  'article': '<article>\n    <h2>Article Title</h2>\n    <p>Article content</p>\n</article>',
  'span': '<span>Inline text</span>'
};

import { getEditor } from './editor.js';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.dropdown-content a').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const tagKey = e.target.dataset.tag;
      const codeEditor = getEditor();
      
      if (tagSnippets[tagKey] && codeEditor) {
        // Get cursor position
        const cursor = codeEditor.getCursor();
        // Insert the snippet at cursor position
        codeEditor.replaceRange(tagSnippets[tagKey], cursor);
      }
    });
  });
});

export default tagSnippets;