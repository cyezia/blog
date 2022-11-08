// 存放不同的 action
export const type = {
  ARTICLE_LIST : 'ARTICLE_LIST'
};

export function getArticleList(articleList) {
  return {
    type: type.ARTICLE_LIST,
    articleList
  }
}