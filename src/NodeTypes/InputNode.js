import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';

const handleAStyle = { left: "25%", width:"65px" };
const handleBStyle = { left: "50%", width:"75px" };
const handleCStyle = { left: "75%", width:"60px" };


function InputNode({ data }) {
  const onChange = useCallback((evt) => {
    // console. log(evt.target.value);
  }, []);

  return (
    <div className="  ">
      
      <div className='card-header'>
        Input: gather_customer_input
      </div>
      <div className='card-body' style={{paddingBottom:"1.25em"}}>

      
        <div>
          <label htmlFor="text">Say:</label>
          <input id="text" name="text" onChange={onChange} />
        </div>
      </div>
      <Handle type="target" position={Position.Top} id = "t" />
      <Handle type="target" position={Position.Right} id="r" />
      <Handle type="target" position={Position.Bottom} id="l" />

      <Handle className='source' type="source" position={Position.Bottom} id="a" style={handleAStyle}>
        <div >
          Key Input 
        </div>
      </Handle>
      <Handle className='source' type="source" position={Position.Bottom} id="b" style={handleBStyle}>
        <div>
            Audio Input 
        </div>
      </Handle>
      <Handle className='source' type="source" position={Position.Bottom} id="c" style={handleCStyle}>
        <div>
          No Input 
        </div>
      </Handle>

    </div>
  );
}

export default InputNode;
