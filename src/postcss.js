const px2rem = require('postcss-px2rem');
module.exports = {
  
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader:["style-loader!css-loader!postcss-loader","sass-loader"]
      }
    ]
  },
  postcss: function() {
    return [px2rem({remUnit: 75})];
  }
}