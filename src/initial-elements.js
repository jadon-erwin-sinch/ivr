import React from 'react';
import { MarkerType } from 'react-flow-renderer';

export const nodes = [
  {
    id: '0',
    type: 'input',
    data: {
      label: (
        <>
          <strong>Call is Triggered</strong>
        </>
      ),
    },
    position: { x: 200, y: -100 },
    
  },
  {
    id: '1',
    type: 'textUpdater', 
    data: { value: 123 },
    //   label: (
    //     <>
    //       <p>Say: Hello, how can we direct your call? Press 1</p>
    //       <p>or sales for the sales department. Press</p>
    //       <p>2 or say 2 for the customer support.</p>
    //     </>
    //   ),
    // },
    position: { x: 125, y: 0 },
    style: {

        width: 300,
      },
  },
  {
    id: '2',
    type: 'switchNode', 
    data: {
      header: (
        <>
          Key Switch
        </>
      ),
    },
    position: { x: 100, y: 175 },
  },
  {
    id: '3',
    type: 'switchNode', 
    data: {
      header: (
        <>
          Audio Switch
        </>
      ),
    },
    position: { x: 300, y: 175 },
    
  },
  {
    id: '4',
    position: { x: 550, y: 200 },
    type: "defaultNode",
    data: {
      header: (
        <>
          Play Audio: no_input_recieved
        </>
      ),
      label:(
        <>
            <p>Say: Sorry. That is not a valid response.</p>
            <p>Please try again</p>
        </>
      )
    },
  },
  {
    id: '5',
    type: "transferNode",
    data: {
      header:(
        <>
          direct_to_sales
        </>
      ),
      label: (
        <>
            <p>Connect caller to:</p>
            <p>+18012578872</p>
        </>
      ),
    },
    position: { x: 100, y: 350 },
  },
  {
    id: '6',
    type: "transferNode",
    data: {
      header:(
        <>
          direct_to_support
        </>
      ),
      label: (
        <>
            <p>Connect caller to:</p>
            <p>+18012578871</p>
        </>
      ),
    },
    position: { x: 300, y: 325 },
  }
];

export const edges = [
  { id: 'e0-1', source: '0', target: '1',type: 'step' },
  { 
    id: 'e1-2', source: '1', target: '2',
    sourceHandle: 'a',
    type: 'step',
    markerEnd: 
        {
            type: MarkerType.ArrowClosed,
        }, 
    },
  { 
    id: 'e1-3', 
    source: '1', 
    target: '3', 
    sourceHandle: 'b', 
    type: 'step',
    markerEnd: 
        {
            type: MarkerType.ArrowClosed,
        }, 
    },
  { 
    id: 'e3-4', 
    source: '3', 
    sourceHandle: 'c',
    target: '4',
    targetHandle: 'l',
    type: 'step',
    markerEnd: 
      {
          type: MarkerType.ArrowClosed,
      }, 
  },
  { 
    id: 'e3-5', 
    source: '3', 
    sourceHandle: 'a',
    target: '5',
    type: 'step',
    markerEnd: 
      {
          type: MarkerType.ArrowClosed,
      }, 
  },
  { 
    id: 'e3-6', 
    source: '3',
    sourceHandle: 'b',
    target: '6',
    type: 'step', 
    markerEnd: 
      {
          type: MarkerType.ArrowClosed,
      }, 
  },
  {
    id: 'e2-5',
    source: '2',
    target: '5',
    sourceHandle: 'a',
    type: 'step',
  },
  {
    id: 'e2-6',
    source: '2',
    target: '6',
    sourceHandle: 'b',
    type: 'step',
  },
  {
    id: 'e2-4',
    source: '2',
    target: '4',
    targetHandle: 'l',
    sourceHandle: 'c',
    type: 'step',
  },
];

