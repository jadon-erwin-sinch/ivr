import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';

function TransferNode({ data }) {
  
  return (
    <div className="  ">
      
      <div className='card-header'>
        {data.header}
      </div>
      <div className='card-body'>

        <div style={{minHeight:"20px"}}>
          {data.label}
        </div>
      </div>
      <Handle type="target" position={Position.Top} id = 't'/>
      <Handle type="target" position={Position.Left} id = 'l'/>
      <Handle type="target" position={Position.Right} id = 'r'/>
      <Handle type="target" position={Position.Bottom} id = 'b'/>
    </div>
  );
}

export default TransferNode;
