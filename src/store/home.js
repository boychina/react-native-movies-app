import { observable, action } from 'mobx';

class HomeStore {
  @observable text; // 注册变量，使其成为可检测的
  @observable num;
  @observable userInfo;

  constructor() {
    this.num = 0;
    this.text = 'Hello, this is homePage!!!';
  }

  @action // 方法推荐用箭头函数的形式
  plus = () => {
    this.num += 1;
  };

  @action
  minus = () => {
    this.num -= 1;
  };

  @action
  getListData = () => {
    fetch(`http://yapi.demo.qunar.com/mock/5228/record/list`)
      .then(
        action("fetchRes", res => {
          return res.json();
        })
      )
      .then(
        action("fetchSuccess", data => {
          return (this.userInfo = data);
        })
      )
      .catch(
        action("fetchError", e => {
          console.log(e.message);
        })
      )
  }
}

const HomeStore = new HomeStore();
export { HomeStore };
 