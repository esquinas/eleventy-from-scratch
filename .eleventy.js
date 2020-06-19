module.exports = config => {
  return {
    // Process MD files, data files and HTML files by Nunjucks.
    markdownTemplateEngine: 'njk',
    dataTemplateEngine:     'njk',
    htmlTemplateEngine:     'njk',

    dir: {
      input:  'src',
      output: 'dist'
    }
  };
};
