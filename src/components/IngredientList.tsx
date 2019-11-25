import React, { useState } from "react"
import { useLocalStorage } from "./../utils/useLocalStorage"
interface IProps {
  ingredients: string[]
}

function distinct(arr) {
  return [...new Set(arr)]
}

export const IngredientList = ({ ingredients }: IProps) => {
  const ListKey = `Ingredients/${typeof window !== "undefined" &&
    window.location}`
  const [selectedIds, setSelectedIds] = useLocalStorage(ListKey, [])
  const isSelected = (index: number) => selectedIds.indexOf(index) !== -1

  const handlePress = (index: number) => {
    setSelectedIds(prevSelectedIds => {
      if (isSelected(index)) {
        return prevSelectedIds.filter(id => id !== index)
      } else {
        return distinct([...prevSelectedIds, index])
      }
    })
  }

  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li
          className="mb-3 cursor-pointer"
          key={`${ingredient}-${index}`}
          style={
            isSelected(index)
              ? {
                textDecoration: "line-through",
              }
              : {}
          }
          onClick={() => handlePress(index)}
        >
          {ingredient}
        </li>
      ))}
    </ul>
  )
}

export default IngredientList
