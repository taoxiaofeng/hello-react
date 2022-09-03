import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';
 
const styles = {
  editor: {
    border: '1px solid gray',
    minHeight: '6em'
  }
};

function MyEditor() {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );
 
  const editor = React.useRef(null);
 
  function focusEditor() {
    editor.current.focus();
  }
 
  React.useEffect(() => {
    focusEditor()
  }, []);
 
  return (
    <div style={styles.editor} onClick={focusEditor}>
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={editorState => setEditorState(editorState)}
      />
    </div>
  );
}

export default MyEditor;