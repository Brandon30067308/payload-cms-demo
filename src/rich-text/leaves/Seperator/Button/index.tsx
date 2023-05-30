import React from "react"
import { ElementButton } from "payload/components/rich-text"

const Button = () => (
  <ElementButton format="separator">
    <div
      style={{
        display: "Flex",
        gap: ".25rem",
        alignItems: "center",
      }}
    >
      {new Array(3).fill(null).map((_, index) => (
        <div
          key={index}
          style={{
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            background: "#94a3b8",
          }}
        />
      ))}
    </div>
  </ElementButton>
)

export default Button
