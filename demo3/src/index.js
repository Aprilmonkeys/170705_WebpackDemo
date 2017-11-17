import $ from 'jquery'
import {cube} from "./js/math"
import lessons from './assets/json/lessons.json'
import './assets/css/style.css'
// import * as atguigu from './js/atguigu'

console.log(cube(3))

$(function () {
  const $app = $('#app')
  // 根据json数据显示一个列表
  const $ul = $('<ul>')
  $app.append($ul)
  lessons.forEach(lesson => {
    $ul.append(`<li>课程名: <span class="lesson-name">${lesson.name}</span>, 时间: ${lesson.days}天</li>`)
  })

  // 添加一个按钮
  const $button = $('<button>我要学习</button>')
  $button.click(function () {
    import('./js/atguigu').then(atguigu => {
      if(atguigu.studyConfirm()) {
        atguigu.goAtguigu()
      }
    })
  })
  $app.append($button)

  /*

  $button.click(function () {
    import('./js/atguigu').then(atguigu => {
      if(atguigu.studyConfirm()) {
        atguigu.goAtguigu()
      }
    })
  })
  $app.append($button)*/
})