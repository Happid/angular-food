export interface ICategory{
  categories: ICategories[];
}

export interface ICategories {
  "idCategory": string
  "strCategory": string
  "strCategoryThumb": string
  "strCategoryDescription": string
}

export interface IByOneCategory {
  "strMeal": string
  "strMealThumb": string
  "idMeal": string
}
