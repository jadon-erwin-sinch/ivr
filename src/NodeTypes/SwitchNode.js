import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';

const handleAStyle = { left: "10%", width:"12px"};
const handleBStyle = { left: "30%" };
const handleCStyle = { left: "70%", width:"60px" };


function SwitchNode({ data }) {
  
  return (
    <div className="  ">
      
      <div className='card-header'>
        {data.header}
      </div>
      <div className='card-body'>

        <div style={{minHeight:"5px"}}>
          
          
        </div>
      </div>
      <Handle type="target" position={Position.Top} />

      <Handle className='source' type="source" position={Position.Bottom} id="a" style={handleAStyle}>
        <div>
          1
        </div>
      </Handle>
      <Handle className='source' type="source" position={Position.Bottom} id="b" style={handleBStyle}>
        <div>
          2
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

export default SwitchNode;
