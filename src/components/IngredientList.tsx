import React from "react"

interface IProps {
  ingredients: string[]
}

export const IngredientList = ({ ingredients }: IProps) => {
  return (
    <ul>
      {ingredients.map(ingredient => (
        <li>{ingredient}</li>
      ))}
    </ul>
  )
}

export default IngredientList
