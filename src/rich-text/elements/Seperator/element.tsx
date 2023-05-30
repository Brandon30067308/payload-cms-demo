import React from "react"

const Separator: React.FC<any> = ({ attributes, children }) => {
  return (
    <div {...attributes}>
      <div
        style={{
          display: "Flex",
          gap: ".25rem",
          alignItems: "center",
          margin: "1rem 0",
        }}
      >
        {...children}

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
    </div>
  )
}

export default Separator
