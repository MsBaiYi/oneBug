### 重现步骤
1. 启动脚手架，打开F12 console
2. 点击缓存Home页面，使include为 ['Home']
3. 点击 count++ 按钮， 使count不为 0
4. 切换路由为about，在console中观察到打印 'home 销毁'，说明触发了 unmounted
5. 切换回home，未打印'home 创建'且count不为0，说明home是被缓存的，与第4步触发unmounted现象发生矛盾
6. 再次点击 count++ 按钮，count视图未发生变化，但console里count会继续增加，视图数据发生不同步情况

### 补充
1. 当在进入Home页面之前在include中添加Home不会发生上述情况，现象会与预期一致
