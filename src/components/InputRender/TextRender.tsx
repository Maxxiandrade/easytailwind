import { useState } from 'react';
import { MdContentCopy } from 'react-icons/md';


const TextRender = () => {
  const [content, ] = useState("Your text here");
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
        className="p-4 border text-center border-neutral-900 dark:border-neutral-300 max-w-6xl dark:text-neutral-300"  
        contentEditable 
        suppressContentEditableWarning={true}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
      <div className=" flex justify-end cursor-pointer text-neutral-900 dark:text-neutral-300 mt-2">
    <MdContentCopy onClick={copyToClipboard} />
      </div> 
 </div>
  );
}

export default TextRender;
