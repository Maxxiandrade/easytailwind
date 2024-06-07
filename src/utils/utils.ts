
export const handleSelection = (customClass:string) => {
    const selection = window.getSelection();
    if (!selection?.rangeCount) return;
  
    const range = selection.getRangeAt(0);
    const selectedText = range.toString();
  
    if (selectedText) {
      const span = document.createElement('span');
      span.className = `${customClass}`; // Clase de Tailwind
      span.textContent = selectedText;
  
      range.deleteContents();
      range.insertNode(span);
  
      const editableDiv = document.getElementById('editable-content');
      if (editableDiv) {
        const newContent = editableDiv.innerHTML;
        console.log(newContent);
        return newContent; // Devuelve el nuevo contenido
      }
    }
    return null;
  };

  
  