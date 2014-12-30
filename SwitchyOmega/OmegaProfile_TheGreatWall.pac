var FindProxyForURL = function(init, profiles) {
  return function(url, host) {
    "use strict";
    var result = init, scheme = url.substr(0, url.indexOf(":"));
    do {
      result = profiles[result];
      if (typeof result === "function") result = result(url, host, scheme);
    } while (typeof result !== "string" || result.charCodeAt(0) === 43);
    return result;
  };
}("+TheGreatWall", {
  "+TheGreatWall": function(url, host, scheme) {
    "use strict";
    if (host === "[::1]" || host === "localhost" || host === "127.0.0.1" || /^localhost$/.test(host) || /^[^:]+:\/\/localhost:*\//.test(url) || /^127\.0\.0\.1$/.test(host) || /^192\.168\..*\./.test(host) || /\.cn$/.test(host) || /^baidu\.com$/.test(host) || /\.baidu\.com$/.test(host) || /\.bdimg\.com$/.test(host) || /^qq\.com$/.test(host) || /\.qq\.com$/.test(host) || /\.gtimg\.com$/.test(host) || /^paipai\.com$/.test(host) || /\.paipai\.com$/.test(host) || /\.paipaiimg\.com$/.test(host) || /^163\.com$/.test(host) || /\.163\.com$/.test(host) || /^126\.net$/.test(host) || /\.126\.net$/.test(host) || /\.netease\.com$/.test(host) || /^lofter\.com$/.test(host) || /\.lofter\.com$/.test(host) || /^weibo\.com$/.test(host) || /\.weibo\.com$/.test(host) || /^jd\.com$/.test(host) || /\.jd\.com$/.test(host) || /^taobao\.com$/.test(host) || /\.taobao\.com$/.test(host) || /^tmall\.com$/.test(host) || /\.tmall\.com$/.test(host) || /\.tbcdn\.cn$/.test(host) || /\.alicdn\.com$/.test(host) || /\.aliimg\.com$/.test(host) || /\.taobaocdn\.com$/.test(host) || /^alipay\.com$/.test(host) || /\.alipay\.com$/.test(host) || /^1688\.com$/.test(host) || /\.1688\.com$/.test(host) || /^tanx\.com$/.test(host) || /\.tanx\.com$/.test(host) || /^iqiyi\.com$/.test(host) || /\.iqiyi\.com$/.test(host) || /\.qiyipic\.com$/.test(host) || /^youku\.com$/.test(host) || /\.youku\.com$/.test(host) || /^tudou\.com$/.test(host) || /\.tudou\.com$/.test(host) || /\.tudouui\.com$/.test(host) || /^pptv\.com$/.test(host) || /\.pptv\.com$/.test(host) || /^renren\.com$/.test(host) || /\.renren\.com$/.test(host) || /\.cnzz\.com$/.test(host)) return "DIRECT";
    return "PROXY 127.0.0.1:8087";
  }
});