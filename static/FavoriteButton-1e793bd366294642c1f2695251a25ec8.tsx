import * as React from "react"
import { useLocalStorage } from "./../utils/useLocalStorage"

export interface IProps {
  slug: string
}

export const FavoriteButton: React.FC<IProps> = ({ slug }) => {
  const favoriteRecipeKey = `favorites${slug}`

  const [isFavorited, setIsFavorited] = useLocalStorage(
    favoriteRecipeKey,
    false
  )
  function handlePress() {
    setIsFavorited(!isFavorited)
  }

  return (
    <button
      aria-label='Favorite Current Recipe'
      style={{ backgroundColor: "transparent", border: 0 }}
      onClick={handlePress}
    >
      {isFavorited ? (
        "s"
      ) : (
          ""
        )}
    </button>
  )
}
