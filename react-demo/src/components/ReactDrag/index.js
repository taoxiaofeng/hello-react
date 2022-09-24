import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

function ReactDrag() {

    const eventLogger = (e, data) => {
        console.log('Event: ', e);
        console.log('Data: ', data);
    };

    return <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        // position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
            <div className="handle">Drag from here</div>
            <div>This readme is really dragging on...</div>
        </div>
    </Draggable>
}

export default ReactDrag;