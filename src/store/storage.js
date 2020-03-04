const storage = {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    //需要轉成字串存入localStorage中
  },
  get(key){
    return JSON.parse(localStorage.getItem(key));
    //存在localStorage內的資料皆為字串，所以需要將之轉為數值或者物件
  },
  remove(key){
    localStorage.removeItem(key);
  }
}

export default storage;