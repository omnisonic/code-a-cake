import { getEditor } from './editor.js';

// Import confetti from CDN
const confettiScript = document.createElement('script');
confettiScript.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
document.head.appendChild(confettiScript);

function triggerConfetti() {
  if (window.confetti) {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

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

function getFormattedContent() {
    const codeEditor = getEditor();
    if (!codeEditor) return '';
    
    const content = codeEditor.getValue();
    return content; // The content is already HTML, so we return it as is
}

function downloadHtml() {
    const htmlContent = getFormattedContent();
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'code-a-cake.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function previewInTab() {
    const htmlContent = getFormattedContent();
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    window.open(url, '_blank');
    
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  // Set up the initial preview
  setTimeout(updatePreview, 500); // Give editor time to initialize

  // Set up apply button
  const applyButton = document.getElementById('apply-button');
  if (applyButton) {
    applyButton.addEventListener('click', () => {
      updatePreview();
      triggerConfetti();
    });
  }
  
  // Set up download and preview buttons
  document.getElementById('downloadButton').addEventListener('click', downloadHtml);
  document.getElementById('previewButton').addEventListener('click', previewInTab);
});

// Initial preview update
updatePreview();

// Export the updatePreview function for use in other modules
export { updatePreview };