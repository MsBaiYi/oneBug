### 重现步骤
1. 启动脚手架，打开F12 console
2. 点击缓存Home页面，使include为 ['Home']
3. 点击 count++ 按钮， 使count不为 0
4. 切换路由为about，在console中观察到打印 'home 销毁'，说明触发了 unmounted
5. 切换回home，未打印'home 创建'且count不为0，说明home是被缓存的，与第4步触发unmounted现象发生矛盾

