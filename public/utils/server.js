// var Mock = require("mockjs");

Mock.mock(/\/images\/getImages/, 'get', ({ url }) => {
    const { start , num  } = parse(url.split('?').pop());
    console.log('server:get url:'+url)
    // console.log(typeof(start),start)
    return {
        urls: images.items.slice(start , start + num),
        start: start ,
        num: num 
    };
})

// 获取参数
function parse(str) {
    let obj = {};
    if (typeof str == 'string' && str) {
        let ary = str.split("&");
        for (let item of ary) {
            let [key, value] = item.split('=');
            obj[key] = parseInt(value);
        }
    }
    return obj;
}



// console.log(parse(''))