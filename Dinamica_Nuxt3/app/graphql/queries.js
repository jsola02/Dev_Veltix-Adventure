import gql from 'graphql-tag';

export const allArticle = gql`
  query allArticles {
    articles {
      title
      slug
      documentId
      description
    }
  }
`;

export const singleArticle = gql`
  query singleArticle {
    article(documentId: "him05cmyu0csf3p4n3x1o7he") {
      documentId # Opcional: incluir el ID
      slug
      title
      category {
        name
      }
    }
  }
`;
