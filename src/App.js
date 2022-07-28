import './App.css';
import OverviewFlow from './Flow';
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import { CodeEditor } from './CodeEditor';
import { useState } from 'react';

function App() {
  const [isShowEditor, setShowEditor] = useState(true);
  const [isShowWorkflow, setShowWorkflow] = useState(true)

  return (
    <div className="App" style={{ width: 1400 , height: 650  }}>
      <Allotment defaultSizes={[3,7]}>

        {isShowEditor &&
          <Allotment.Pane snap minSize={200}>
            <div style={{height:"100%", display:"flex", flexDirection:"column"}}>
              <h2>Code Editor</h2>
              <div style={{margin:"0em 1em 1em 1em",backgroundColor:"#FFFFFF", flexGrow:1, border:"2px solid #323E47"}}>
                <CodeEditor/>
              </div>
            </div>

            {/* X Button */}
            <div style={{ position: "absolute", top: "1em", right: "1em" }}>
              <button
                type="button"
                onClick={() =>
                  setShowEditor(false)
                }
              >
                x
              </button>
            </div>
          </Allotment.Pane>
        } 
          
        {isShowWorkflow &&
          <Allotment.Pane snap minSize={200}>
            <div style={{height:"100%", display:"flex", flexDirection:"column"}}>
              <h2>Workflow Diagram</h2>
              <div style={{margin:"0em 1em 1em 1em",backgroundColor:"#FFFFFF", flexGrow:1, border:"2px solid #323E47"}}>
                <OverviewFlow/>
              </div>
            </div>
            
            {/* X Button */}
            <div style={{ position: "absolute", top: "1em", right: "1em" }}>
              <button
                type="button"
                onClick={() =>
                  setShowWorkflow(false)
                }
              >
                x
              </button>
            </div>
          </Allotment.Pane>
        }
      </Allotment>

    </div>
  );
}

export default App;
 
