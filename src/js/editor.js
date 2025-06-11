// Initialize CodeMirror editor
let codeEditor;

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    codeEditor = CodeMirror(document.getElementById('code-editor'), {
  mode: 'htmlmixed',
  theme: 'default',
  lineNumbers: true,
  value: `<!DOCTYPE html>
<html>
<head>
    <title>Test Page</title>
    <style>
        body { 
            background: #f0f0f0;
            padding: 20px;
        }
        h1 { 
            color: blue;
        }
    </style>
</head>
<body>
    <h1>Test Header</h1>
    <p>If you can see this with styling, the editor is working!</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
</body>
</html>`
});

// Debounce function to limit preview updates
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add editor change handler
codeEditor.on('change', debounce(() => updatePreview(codeEditor), 300));

// Initialize event listeners for tag snippets
document.querySelectorAll('.dropdown-content a').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const tagKey = e.target.dataset.tag;
        if (tagSnippets[tagKey]) {
            // Get cursor position
            const cursor = codeEditor.getCursor();
            // Insert the snippet at cursor position
            codeEditor.replaceRange(tagSnippets[tagKey], cursor);
        }
    });
});

// Apply button handler
const applyButton = document.getElementById('apply-button');
applyButton.addEventListener('click', () => updatePreview(codeEditor));

// Initial preview
updatePreview(codeEditor);

}); // End of DOMContentLoaded

// Export the editor initialization function
export function getEditor() {
    return codeEditor;
}