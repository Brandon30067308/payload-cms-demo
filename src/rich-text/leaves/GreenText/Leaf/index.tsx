import React from "react"

const GreenText: React.FC<any> = ({ attributes, children }) => (
  <span {...attributes} style={{ color: "#10b981" }}>
    {children}
  </span>
)

export default GreenText
