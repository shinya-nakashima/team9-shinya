const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',　//buildするファイル
    output: {
        filename: 'bundle.js',　//build後のファイル名
        path: path.join(__dirname, '../django_react/react_app/static/js') //buildファイルが作成される場所
    },
    module: {
        rules: [	
		//Typescriptの場合のloader設定
			{
				test: /\.ts[x]?$/,  
				exclude: /node_modules/,
				use: 'ts-loader',
			},
		],	
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json']
	}
};
