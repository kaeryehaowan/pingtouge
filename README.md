## promise 文件夹是完成面试时关于重复请求的问题
- 用来中断promise，我目前能想到的是三个思路
    - 用一个变量控制是执行 resolve 还是 reject,示例就是如此
    - 在特定逻辑里手动 throw 一个 error
    - 使用 Promise.race 方法，  Promise.race([fetchInstance, Promise.reject()])

## user-card 文件夹是完成 userCard 页面。以下是我自己能想到可优化的地方，因时间关系，没有去实现
- 没有对表单做校验
- 没有对已保存的userCard做 delete edit
- 没有做交互，例如加载中
- 没有做按钮防抖节流
- 在请求中，没有做容错，那个地方是不严谨的
- 整个项目没有任何架构设计，仅是为了做那个组件