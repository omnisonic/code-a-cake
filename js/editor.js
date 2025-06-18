// Initialize CodeMirror editor
let codeEditor;

// Default template content
const defaultTemplate = `<!DOCTYPE html>
<html>
<head>
    <title>CODE ME A CAKE PLEASE!</title>
    <style>
        body { 
            padding: 20px;
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        /* Emoji style to ensure proper rendering */
        .emoji {
            font-family: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            font-style: normal;
        }

        /* These are your cake styling classes! Mix and match them to create your masterpiece! */
        
        .cake {
            width: 300px;
            height: auto;
            margin: 20px auto;
        }      
        
        .layer {
            padding: 30px;
            margin: 5px 0;
            border-radius: 10px;
            transition: transform 0.3s ease;
        }

        .layer:hover {
            transform: translateX(10px);
        }
        
        /* Delicious cake flavors and decorations below! */
        .chocolate {
            background-color: #704214;
            color: #fff;
        }
        
        .vanilla {
            background-color: #f3e5ab;
            color: #000;
        }
        
        .strawberry {
            background-color: #f9c7ca;
            color: #000;
        }
        
        .rainbow {
            background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
            color: #fff;
        }
        
        .polkadot {
            background-color: none;
            background-image: radial-gradient(circle at center, #ff69b4 5px, transparent 5px);
            background-size: 30px 30px;
        }
    </style>
</head>
<body>
    <h1><span class="emoji">\u{1F9C1}</span> Welcome to CODE ME A CAKE PLEASE! <span class="emoji">\u{1F382}</span></h1>
    
    <div class="instructions">
        <h2>How to Create Your Cake:</h2>
        <ol>
        <li>Use the editor to write HTML code for your cake layers. Everthing on this side of the screen is made from the code editor side.</li>
            <li>Each cake layer uses the class "layer" plus a flavor class (like "chocolate" or "vanilla")</li>
            <li>Add decoration classes like "polkadot" or "rainbow" for extra flair</li>
            <li>Click the "Bake" button to see your changes come to life!</li>
            <li>Try hovering over the layers to see them wiggle!</li>
            <li> Go futher by editing the CSS and HTML to create your own unique cake design!</li>
            <li>Click the "Download HTML" button to save your creation!</li>
            <li>Click the "Preview in Tab" button to see your creation in a new tab!</li>
            <li>Click the "Clear All" button to start over!</li>
        </ol>
        <span class="tip"><span class="emoji">\u{1F4A1}</span> This is for intermediate students that already know some html and css.  I recommend FreeCodeCamp's Responsive Web Design!</span>
    </div>
    <h2> THESE ARE THE LAYERS OF YOUR CAKE SO FAR!</h2>
    <div class="cake">
        <!-- Try changing the classes below to create your own cake design! -->
        <div class="layer vanilla"></div>
        <div class="layer strawberry rainbow"></div>
        <div class="layer chocolate"></div>
        <div class="layer vanilla polkadot"></div>
    </div>
    
    <p class="tip"><span class="emoji">\u{1F4A1}</span> Tip: Use the menu buttons above to add more layers and styles!</p>
</body>
</html>`;

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    codeEditor = CodeMirror(document.getElementById('code-editor'), {
  mode: 'htmlmixed',
  theme: 'default',
  lineNumbers: true,
  value: defaultTemplate
});

// Debounce function to limit preview updates
// function debounce(func, wait) {
//     let timeout;
//     return function executedFunction(...args) {
//         const later = () => {
//             clearTimeout(timeout);
//             func(...args);
//         };
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//     };
// }

// Remove or comment out the automatic change handler
// codeEditor.on('change', debounce(() => updatePreview(codeEditor), 300));

// Apply button handler (already exists)
// const applyButton = document.getElementById('apply-button');
// applyButton.addEventListener('click', () => updatePreview(codeEditor));

// Initial preview (keep this to show initial content)
// updatePreview(codeEditor);    // Add clear and restore button functionality
    const clearButton = document.getElementById('clearButton');
    const restoreButton = document.getElementById('restoreButton');

    clearButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear the editor? This will remove all content.')) {
            codeEditor.setValue(`<!DOCTYPE html>
<html>
<head>
    <title>Code-a-Cake Editor</title>
    <style>
        /* Add your styles here */
    </style>
</head>
<body>
    <!-- Add your content here -->
</body>
</html>`);
        }
    });

    restoreButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to restore the default template? This will replace the current content.')) {
            codeEditor.setValue(defaultTemplate);
        }
    });

}); // End of DOMContentLoaded

// Export the editor initialization function
export function getEditor() {
    return codeEditor;
}

// Function to format HTML
function formatHTML() {
    let code = codeEditor.getValue();

    // Format HTML
    code = html_beautify(code, {
        indent_size: 4,
        wrap_attributes: 'force-aligned'
    });

    // Format CSS within <style> tags
    const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
    code = code.replace(styleRegex, (match, css) => {
        const formattedCSS = css_beautify(css, {
            indent_size: 4
        });
        return `<style>\n${formattedCSS}\n</style>`;
    });

    codeEditor.setValue(code);
}

// Add event listener to the format button
document.addEventListener('DOMContentLoaded', () => {
    const formatButton = document.getElementById('formatButton');
    formatButton.addEventListener('click', formatHTML);
});
