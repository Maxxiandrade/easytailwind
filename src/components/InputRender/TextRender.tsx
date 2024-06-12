import { useState } from 'react';
import { MdContentCopy } from 'react-icons/md';
import { useMyContext } from '../../buttonReducer';

const TextRender = () => {
  const {textState} = useMyContext()
  const align = textState.align
  const [content, ] = useState("Your text here");
  const copyToClipboard = () => {
    const editableDiv = document.getElementById('editable-content');
    if (editableDiv) {
        
        const wrapperDiv = document.createElement('div');
        wrapperDiv.className = `${align}`; 

        // Clonar el contenido del editableDiv al nuevo wrapperDiv
        wrapperDiv.innerHTML = editableDiv.innerHTML;

        // Obtener el HTML del wrapperDiv
        const wrapperContent = wrapperDiv.outerHTML;

        navigator.clipboard.writeText(wrapperContent).then(() => {
            alert('Contenido copiado al portapapeles.');
        }).catch(err => {
            alert('Error al copiar contenido: ' + err);
        });
    } else {
        alert('Editable content not found');
    }
};


  return (
    <div>
      <div 
        id="editable-content"
        className={`p-4 border border-neutral-900 dark:border-neutral-300 max-w-6xl dark:text-neutral-300 ${align}`}
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

