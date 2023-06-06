import React from "react"

const EmeraldText: React.FC<any> = ({ attributes, children }) => (
  <span {...attributes} style={{ color: "#10b981" }}>
    {children}
  </span>
)

export default EmeraldText
