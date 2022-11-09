export const addArticles = (data) => ({
  type: "ADD_ARTICLE",
  dataSource: data
})

export const editItme = (key) => ({
  type: 'EDIT_ITEM',
  obj
})

export const deleteItem = (key) => ({
  type: "DELETE_ITEM",
  key
})

