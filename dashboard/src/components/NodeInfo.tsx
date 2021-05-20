import {useCallback, useEffect, useState} from "react"
import {Divider, Row, Col} from "antd"
import {Node} from "helpers/graph"
// import { Progress } from 'antd';

interface NodeInfoProps {
  graph: Node
  name: string | null
}

const NodeInfo: React.FC<NodeInfoProps> = props => {
  const {name, graph} = props

  const [node, setNode] = useState<Node | null>(null)
  console.log(props)

  const foo = useCallback(
    (elt: Node) => {
      if (elt.name === name) {
        setNode(elt)
      }
      console.log(elt.name)
      elt.children?.map(child => foo(child))
    },
    [name],
  )

  useEffect(() => {
    foo(graph)
  }, [graph, foo])

  return (
    <div className="nodeInfo">
      <div className="version-container">
        <Row>
          <Col flex="100px">Version: </Col>
          <Col flex="auto">
            <span>{node?.version ?? "None"}</span>
          </Col>
        </Row>
      </div>
      <div className="version-container">
        <Row>
          <Col flex="100px">File: </Col>
          <Col flex="auto">
            <span>{node?.file ?? "None"}</span>
          </Col>
        </Row>
      </div>
      {/* <li>Version: <span>{node && node.version ? node.version : "None"}</span></li>
                <li>File: <span>{node && node.file ? node.file : "None"}</span></li> */}
      <Divider />
      <div className="info-container">
        <p>
          <pre>{node?.summary ?? "None"}</pre>
        </p>
      </div>
      {/* <Progress
                strokeColor={{
                    '0%': '#b3c6ce',
                    '100%': '#15A594',
                }}
                percent={99.9}
                /> */}
      {/* <Progress
                strokeColor={{
                    from: '#b3c6ce',
                    to: '#15A594',
                }}
                percent={99.9}
                status="active"
                />
                <Progress
                type="circle"
                strokeColor={{
                    '0%': '#b3c6ce',
                    '100%': '#15A594',
                }}
                percent={90}
                /> */}
      {/* <Progress
                type="circle"
                strokeColor={{
                    '0%': '#b3c6ce',
                    '100%': '#15A594',
                }}
                percent={100}
                /> */}
    </div>
  )
}

export default NodeInfo
