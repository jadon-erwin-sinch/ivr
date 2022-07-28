import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';

function DefaultNode({ data }) {
  
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
      <Handle className='source' type="source" position={Position.Bottom}/>

    </div>
  );
}

export default DefaultNode;
