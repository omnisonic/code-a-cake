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
    <title>Code-a-Cake Editor</title>
    <style>
        body { 
            padding: 20px;
            font-family: Arial, sans-serif;
        }

        /* Add your cake styles here! */
        
  .cake {
   padding: 10px;
   border-radius: 5px;
   width: 100px;
  }
    .chocolate {
      background-color: #704214;
      color: #fff;
      height:50px;
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
    <h1>Welcome to Code-a-Cake!</h1>
    <p>Add cake styles in the style section and use them in your HTML!</p>
    
 <div class="cake chocolate"></div>
  <div class="cake vanilla"></div>
  <div class="cake strawberry"></div>
  <div class="cake rainbow"></div>
  <div class="cake chocolate polkadot"></div>
  
</body>
</html>`
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
// updatePreview(codeEditor);

}); // End of DOMContentLoaded

// Export the editor initialization function
export function getEditor() {
    return codeEditor;
}