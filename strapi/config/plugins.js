module.exports = ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        article: {
          field: "slug",
          references: "title",
        },
        page: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
});
