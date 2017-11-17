import $ from 'jquery'   // 第三方js模块
import {cube} from "./js/math" // 自定义js模块
import lessons from './assets/json/lessons.json' // json模块
import './assets/css/style.css' // css模块

console.log(cube(3))

$(function () {
  const $app = $('#app')  // jQuery对象的变量
  const $ul = $('<ul>')  // 创建标签, 并封装为jQuery对象
  $app.append($ul)
  lessons.forEach(lesson => {
    $ul.append(`<li>课程名: <span class="lesson-name">${lesson.name}</span>, 时间: ${lesson.days}天</li>`)
  })
})