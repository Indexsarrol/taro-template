import Taro from '@tarojs/taro';

export default (options) => {
    if (!options.url) {
        throw Error('请输入请求 url');
    }
    const token = Taro.getStorageSync('token');
    return Taro.request({
        url: options.url,
        data: {
            ...options.data,
        },
        header: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        method: options.method?.toUpperCase() || 'GET',
    }).then((res) => res.data);
};
