import {useState} from "react"
// @ts-ignore no-types
import Tree from "react-tree-graph"
import {Drawer, Input, Button, Tooltip} from "antd"
import {SearchOutlined} from "@ant-design/icons"
import NodeInfo from "./NodeInfo"
import Predict from "./Predict"
import {fetchGet} from "helpers/fetchers"
import {Node} from "helpers/graph"

const Graph: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [node, setNode] = useState<Node>({name: null})
  const [name, setName] = useState<string | null>(null)
  const [port, setPort] = useState<string | null>(null)
  const [addr, setAddr] = useState<string | null>(null)
  const [data, setData] = useState<Node>({
    name: "node",
    textProps: {x: -25, y: 25},
    // children: [{
    //     name: 'preprocessing 1',
    //     textProps: {x: -25, y: 25},
    //     children:[{
    //         name: 'model 1',
    //         textProps: {x: -25, y: 25}
    //     },{
    //         name: 'model 2',
    //         textProps: {x: -25, y: 25}
    //     }]
    // }, {
    //     name: 'model 3',
    //     textProps: {x: -25, y: 25}
    // }]
  })

  const showDrawer = (nodeKey: string) => {
    setVisible(true)
    setNode({name: nodeKey})
  }

  const onClose = () => {
    setVisible(false)
  }

  const getData = async () => {
    if (name && port && addr) {
      const responseData = await fetchGet(`http://${addr}:${port}/pipeline/${name}`)
      console.log(responseData)

      if (responseData) {
        setData(responseData)
      }
    }
  }

  return (
    <div className="graph">
      <div className="input-containers">
        <Input.Group compact>
          <Input
            style={{width: "50%"}}
            placeholder="address"
            onChange={e => setAddr(e.target.value)}
          />
          <Input
            style={{width: "30%"}}
            placeholder="port"
            onChange={e => setPort(e.target.value)}
          />
          <Input
            style={{width: "20%"}}
            placeholder="name"
            onChange={e => setName(e.target.value)}
          />
        </Input.Group>
        <Tooltip title="search">
          <Button
            type="primary"
            shape="circle"
            icon={<SearchOutlined />}
            onClick={() => getData()}
          />
        </Tooltip>
        <Predict pipeline={name || ""} />
      </div>

      <div className="custom-container">
        <Tree
          animated={true}
          nodeRadius={15}
          margins={{top: 20, bottom: 10, left: 30, right: 30}}
          data={data}
          height={400}
          width={800}
          gProps={{onClick: (_e: any, nodeKey: string) => showDrawer(nodeKey)}}
          svgProps={{
            className: "custom",
          }}
        />
      </div>

      <Drawer
        title={node.name}
        placement="right"
        closable={false}
        width={600}
        onClose={onClose}
        visible={visible}
      >
        <NodeInfo name={node.name} graph={data} />
      </Drawer>
    </div>
  )
}

export default Graph
