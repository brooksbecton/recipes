import React, { useState } from "react"

interface IProps {
  ingredients: string[]
}

function distinct(arr) {
  return [...new Set(arr)]
}

export const IngredientList = ({ ingredients }: IProps) => {
  const [selectedIds, setSelectedIds] = useState([])
  const isSelected = index => selectedIds.indexOf(index) !== -1

  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li
          style={
            isSelected(index)
              ? {
                  textDecoration: "line-through",
                }
              : {}
          }
          onClick={() =>
            setSelectedIds(prevSelectedIds => {
              if (isSelected(index)) {
                return prevSelectedIds.filter(id => id !== index)
              } else {
                return distinct([...prevSelectedIds, index])
              }
            })
          }
        >
          {ingredient}
        </li>
      ))}
    </ul>
  )
}

export default IngredientList
