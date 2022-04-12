# 💫  Simple Graph UI
<img src="https://img.shields.io/npm/v/simple-graph-ui"/> <img src="https://img.shields.io/npm/dw/simple-graph-ui?color=blue"/> <img src="https://img.shields.io/bundlephobia/min/simple-graph-ui?color=gree"/> 

> A simple React component library to create directed/undirected graph for visualization

## 👇 Installation

```javascript
npm i simple-graph-ui
```

## 🌐 Components

### ``` Canvas ``` (Must have)
* A layout wrapper for the graph


### ``` Node ```
* Create a node with the text label inside with custom x,y coordinates and edges

| props  | type | required | description |
|  :---:  |  :---:  |  :---:  |  :---:  |
| label  | string  | true  | Label of the node  |
| x | number  | true  | x position of the node  |
| y | number  | true  | y position of the node  |
| neighbor | string  | false  | Neighbor of the node (currently have one only) |

## 😎 Basic usage
``` typescript
import { Node, Canvas } from 'simple-graph-ui';
<Canvas>
  <Node label={'A'} x={75} y={75} neighbor="B"/>
  <Node label={'B'} x={600} y={85} neighbor="A"/>
  <Node label={'C'} x={600} y={500} neighbor="B"/>
</Canvas>
```

### Result
<img width="322" alt="Screen Shot 2022-04-12 at 2 23 37 AM" src="https://user-images.githubusercontent.com/58461444/162927378-c15d5229-8c2c-437c-9ebe-b87ac32be21e.png">



## 🛠 Work in progress  🛠
