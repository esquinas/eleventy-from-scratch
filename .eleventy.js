module.exports = config => {
  
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/images/');

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
