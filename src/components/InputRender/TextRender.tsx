import { useState } from 'react';
import { handleSelection } from '../../utils/utils';

const TextRender = () => {
  const [content, setContent] = useState("Your text here");

  const customClass = 'bg-red-300 text-cyan-600 underline'

  const handleButtonClick = () => {
    const newContent = handleSelection(customClass);
    if (newContent) {
      setContent(newContent);
    }
  };

  const copyToClipboard = () => {
    const editableDiv = document.getElementById('editable-content');
    if (editableDiv) {
      const editableContent = editableDiv.innerHTML;
      const formattedContent = editableContent.replace(/<br>/g, '<br />'); 
      navigator.clipboard.writeText(formattedContent).then(() => {
        alert('Contenido copiado al portapapeles.');
      }).catch(err => {
        alert({error: err});
      });
    } else {
      alert('Editable content not found');
    }
  };

  return (
    <div>
      <div 
        id="editable-content"
        className="p-4 border border-neutral-900 dark:border-neutral-300 max-w-6xl dark:text-neutral-300" 
        contentEditable 
        suppressContentEditableWarning={true}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
      <div className="mt-2">
        <button 
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded" 
          onClick={handleButtonClick}
        >
          Cambiar Color
        </button>
        <button 
          className="px-4 py-2 bg-green-500 text-white rounded" 
          onClick={copyToClipboard}
        >
          Copiar HTML
        </button>
        
      </div>
      
    </div>
  );
}

export default TextRender;
