export type Node = {
  name: string | null
  children?: ReadonlyArray<Node>
  version?: string
  file?: string
  summary?: string
  textProps?: {x: number; y: number}
}
