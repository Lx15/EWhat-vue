import Vue from 'vue'
import VueSource from 'vue-resource'
Vue.use(VueSource);
var apiURL = {
    baseurl: 'http://139.129.128.77:3000',
    // baseurl: 'http://192.168.3.164:3000',
    getRandom: '/food/weather',
    getResult: '/food/suggest',
    getInvite: '/food/treat',
    getWeather: 'http://route.showapi.com/9-5?showapi_appid=29691&showapi_sign=4b5c31bf9ba34d1a93f8651ad0bc3c1b&from=5',
    getLogin: '/users/login',
    getRegister: '/users/signup',
    editUserInfo: '/users/editInfo',
    getCuteData: '/food/heatList',
    choiceLove: '/users/iLoveIt',
};

function postData(url, msg, successcallback, errorcallback) {
    // VueSource.$http.post({
    //     method: 'POST',
    //     url: url,
    //     headers: { 'Content-Type': 'application/json; charset=utf-8' },
    //     body: JSON.stringify(msg)
    // }, function(retdata) {
    //     callback(retdata);
    // });
    Vue.http.post(url, JSON.stringify(msg), {
        method: 'POST',
        url: url,
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
    }).then(successcallback, errorcallback);

}

function getData(url, successcallback, errorcallback) {
    // VueSource.$http.get({
    //     method: 'GET',
    //     url: url,
    // }, function(retdata) {
    //     callback(retdata);
    // });
    Vue.http.get(url).then(successcallback, errorcallback);
}

function fetchItem(key) {
    return JSON.parse(window.localStorage.getItem(key) || '[]');
}

function saveItem(key, items) {
    window.localStorage.setItem(key, JSON.stringify(items));
}

exports.apiURL = apiURL;
exports.getData = getData;
exports.postData = postData;
exports.fetchItem = fetchItem;
exports.saveItem = saveItem;