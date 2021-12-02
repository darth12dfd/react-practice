//04-2 CSS로 컴포넌트 스타일 적용하기

//컴포넌트에 머터리얼 디자인 본격적으로 적용해보기

//3. 스토리북 서버에 sass-loader를 설치하고 이를 스토리북에 설정한다.

const path = require("path");

module.exports ={
    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: ["sass-loader"],
                include: path.resolve(__dirname,"../")
            }
        ]
    }
};