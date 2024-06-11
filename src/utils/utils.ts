
export const handleSelection = (customClass: string) => {
  const selection = window.getSelection();
  if (!selection?.rangeCount) return;

  const range = selection.getRangeAt(0);
  const selectedText = range.toString();

  if (selectedText) {
    const span = document.createElement('span');
    span.className = customClass;
    span.textContent = selectedText;

    const existingSpan = range.startContainer.parentElement;

    if (existingSpan && existingSpan.tagName === 'SPAN') {
      // Remover las clases existentes del mismo tipo
      let existingClasses = existingSpan.className.split(' ');
      const newClasses = customClass.split(' ');

      newClasses.forEach(newClass => {
        const [newClassPrefix] = newClass.split('-');

        // Remover la clase existente del mismo tipo
        if (newClassPrefix === 'underline' || newClassPrefix === 'line-through') {
          existingClasses = existingClasses.filter(existingClass =>
            existingClass !== 'underline' && existingClass !== 'line-through'
          );
        } else if (newClassPrefix === 'text' || newClassPrefix === 'bg') {
          existingClasses = existingClasses.filter(existingClass =>
            !existingClass.startsWith(newClassPrefix)
          );
        }
      });

      // Agregar la nueva clase si no es "none"
      if (customClass !== 'none') {
        existingSpan.className = [...existingClasses, ...newClasses].join(' ');
      } else {
        existingSpan.className = existingClasses.join(' ');
      }
    } else {
      // Si no hay un span existente, creamos uno nuevo
      if (customClass !== 'none') {
        range.deleteContents();
        range.insertNode(span);
      } else {
        // Si es "none", no hacer nada ya que no queremos añadir un nuevo span sin decoración
        return;
      }
    }

    const editableDiv = document.getElementById('editable-content');

    if (editableDiv) {
      const newContent = editableDiv.innerHTML;
      console.log(newContent);
      return newContent;
    }
  }
  return null;
};

