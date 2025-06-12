import { getEditor } from './editor.js';

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

function updatePreview() {
  const htmlOutput = document.getElementById('html-output');
  const codeEditor = getEditor();
  
  if (!codeEditor) {
    console.log('Editor not ready yet');
    return;
  }

  try {
    const content = codeEditor.getValue();
    const iframe = htmlOutput;
    iframe.srcdoc = content;
    console.log('Preview updated with content length:', content.length);
  } catch (error) {
    console.error('Preview update failed:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Set up the initial preview
  setTimeout(updatePreview, 500); // Give editor time to initialize

  // Set up apply button
  const applyButton = document.getElementById('apply-button');
  if (applyButton) {
    applyButton.addEventListener('click', updatePreview);
  }
});

// Initial preview update
updatePreview();

// Export the updatePreview function for use in other modules
export { updatePreview };