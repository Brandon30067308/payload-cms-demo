import React from "react"
import { LeafButton } from "payload/components/rich-text"

const Button = () => (
  <LeafButton format="emerald-text">
    <div
      style={{
        width: "16px",
        height: "16px",
        backgroundColor: "#10b981",
        borderRadius: ".3rem",
      }}
    />
  </LeafButton>
)

export default Button
