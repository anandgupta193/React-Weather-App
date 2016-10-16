var nodeExternals = require('webpack-node-externals') ;
require('dotenv').config()
var webpack = require('webpack');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
		new webpack.DefinePlugin({
			API_KEY: JSON.stringify(process.env.API_KEY)
		})
  ],
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      WeatherForecast: 'app/components/WeatherForecast.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx',
      ErrorModal: 'app/components/ErrorModal.jsx',
      dateFormatter: 'app/utils/dateFormatter.jsx',
      applicationStyles: 'app/styles/app.scss',
      ipInfo: 'app/api/ipInfo.jsx',
      GoogleAutocomplete: 'app/components/GoogleAutocomplete.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map' //allows easier debugging in devtools
};
