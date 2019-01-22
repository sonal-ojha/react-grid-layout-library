import React, { Component } from 'react';
import './App.css';
import RGL, { WidthProvider } from "react-grid-layout";
//  import css -- IMP!!!
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

const ReactGridLayout = WidthProvider(RGL);

class App extends Component {
  
  state = { 
    layout : [
      {i: '1', x: 0, y: 0, w: 1, h: 2, minH: 2, maxH: 2},         // *** -- minH & maxH doesnt effect the grid items
      {i: '2', x: 1, y: 0, w: 1, h: 2, minH: 2, maxH: 2},
      {i: '3', x: 0, y: 1, w: 1, h: 2, minH: 2, maxH: 2},
      {i: '4', x: 1, y: 1, w: 1, h: 2, minH: 2, maxH: 2}
    ],
    resizeplotly: false,
  };

  onLayoutChange = (layout) => {
    this.setState({layout});
  }
  
  onResize = (layouts) => {
    this.setState({
      layout: layouts,
    });
  };
  
  render() {
    return (
      <div className="App">
        <ReactGridLayout
            rowHeight= {150}
            cols={2}
            onResize={this.onResize}
            width={100}
            layout={this.state.layout}
            onLayoutChange={this.onLayoutChange}
            draggableHandle=".MyDragHandleClassName"
            draggableCancel=".MyDragCancel"
        >
            <div className="item" key={1}>
              <div className='MyDragHandleClassName'> 
                Drag from Here - <span className="text">1</span>
              </div>
              <div style={{marginTop: '80px'}}>Grid - 1</div>
            </div>
            <div className="item" key={2}>
              <div className='MyDragHandleClassName'> 
                Drag from Here - <span className="text">2</span>
              </div>
              <div style={{marginTop: '80px'}}>Grid - 2</div>
            </div>
        </ReactGridLayout>
        
      </div>
    );
  }
}

App.defaultProps = {
    rowHeight: 150,
    cols: 2, // to make grid item 50% or 100%
};

export default App;
