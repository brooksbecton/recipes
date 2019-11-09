import * as React from "react"

export interface IProps {
  slug: string
}

export const FavoriteButton: React.FC<IProps> = ({ slug }) => {
  const [isFavorite, setIsFavorite] = React.useState(getFavorite(slug) !== null)

  function deleteFavorite(recipeSlug: string) {
    return localStorage.removeItem(`favorites${recipeSlug}`)
  }
  function storeFavorite(recipeSlug: string) {
    return localStorage.setItem(`favorites${recipeSlug}`, recipeSlug)
  }
  function getFavorite(recipeSlug: string) {
    return localStorage.getItem(`favorites${recipeSlug}`)
  }

  function handlePress() {
    setIsFavorite(prevIsFavorite => {
      prevIsFavorite ? deleteFavorite(slug) : storeFavorite(slug)
      return !prevIsFavorite
    })
  }

  return (
    <button
      style={{ backgroundColor: "transparent", border: 0 }}
      onClick={handlePress}
    >
      {isFavorite ? (
        <i className="nes-icon heart"></i>
      ) : (
        <i className="nes-icon heart is-empty"></i>
      )}
    </button>
  )
}
