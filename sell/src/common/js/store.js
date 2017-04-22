/**
 * Created by Administrator on 2017/4/22.
 *
 */
export function saveToLocal(id, key, value) {
  // 得到字符串
  let seller = window.localStorage.__seller__;
  if (!seller) {
    seller = {};
    seller[id] = {};
  } else {
    // 解析成对象
    seller = JSON.parse(seller);
    if (!seller[id]) {
      seller[id] = {};
    }
  }
  seller[id][key] = value;
  // 解析成字符串
  localStorage.__seller__ = JSON.stringify(seller);
}

export function loadFromLocal(id, key, def) {
  let seller = window.localStorage.__seller__;
  if (!seller) {
    return def;
  }
  seller = JSON.parse(seller)[id];
  if (!seller) {
    return def;
  }
  let ret = seller[key];
  return ret || def;
}
