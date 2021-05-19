import React, {useEffect, useState} from "react"
import { Progress } from 'antd';

const NodeInfo = (props) => {
    const [node, setNode] = useState(null);
    console.log(props)

    const foo = (elt) => {
        if (elt.name === props.name)
        {
            setNode(elt)
        }
        console.log(elt.name)
        if ("children" in elt)
        {
            elt.children.map((child) => foo(child))
        }
    }

    useEffect(()=> {
        foo(props.graph)
        console.log(node)
    }, [props])

    return (
        <div className="nodeInfo">
                <p>version: {node.version ? node.version : "None"}</p>

                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>

                {/* <Progress
                strokeColor={{
                    '0%': '#b3c6ce',
                    '100%': '#15A594',
                }}
                percent={99.9}
                /> */}
                <Progress
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
                />
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
