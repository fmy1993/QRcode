/*
 * @Descripttion: 
 * @version: 
 * @Author: fmy1993
 * @Date: 2021-08-27 22:05:38
 * @LastEditors: fmy1993
 * @LastEditTime: 2021-08-27 22:09:23
 */
const baseURL="http://120.77.156.205:8000/api/v1/"
//const baseURL="http://localhost:8000/api/v1/"

// Nodejs的写法，往外导处数据,或者说别的文件可以使用这个变量，这个例子只是把url的根当成一个变量，其他也是类似的
// vue文件中也有这样的写法
export default {
    baseURL,
}