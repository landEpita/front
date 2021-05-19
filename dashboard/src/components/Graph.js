import React, { useState } from 'react';
import Tree from 'react-tree-graph';
import { Drawer, Input, Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


const Graph = () => {
    const [visible, setVisible] = useState(false);
    const [node, setNode] = useState({name:null});

    const showDrawer = (event, nodeKey) => {
      setVisible(true);
      setNode({name: nodeKey})
    };
  
    const onClose = () => {
      setVisible(false);
    };


    let data = {
        name: 'Parent',
        textProps: {x: -25, y: 25},
        children: [{
            name: 'Child One',
            textProps: {x: -25, y: 25},
            children:[{
                name: 'model',
                textProps: {x: -25, y: 25}
            },{
                name: 'model2',
                textProps: {x: -25, y: 25}
            }]
        }, {
            name: 'Child Two',
            textProps: {x: -25, y: 25}
        }]
    };

    
    return (
        <div className="graph">

            <div className="input-containers">
            <Input.Group compact>
                <Input style={{ width: "70%" }} placeholder="address" />
                <Input style={{ width: "30%" }} placeholder="port" />
            </Input.Group>
            <Tooltip title="search">
                <Button type="primary" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            </div>

            <div className="custom-container">
                <Tree
                    animated={true}
                    nodeRadius={15}
                    margins={{ top: 20, bottom: 10, left: 30, right: 30 }}
                    data={data}
                    height={400}
                    width={800}
                    gProps={{onClick: showDrawer}}
                    svgProps={{
                        className: 'custom'
                    }}/>
            </div>

            <Drawer
                title={node["name"]}
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    );
};

export default Graph;