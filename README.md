# digisalad1122

DEMO- https://u10210018.github.io/digisalad1122/dist/index.html

行動裝置展示- [responsinator.com/digisalad1122](https://www.responsinator.com/?url=https%3A%2F%2Fu10210018.github.io%2Fdigisalad1122%2Fdist%2Findex.html)

## 測試的內容
<ol>
  <li>運用提供的素材，建構前端網頁</li>
  <li>加入網頁動畫、轉場效果等元素</li>
  <li>RWD 網頁</li>
  <li>前端框架:Vue.js</li>
</ol>

## 說明
css部分以scss撰寫。<br>
RWD以自適應為主，輔以`media query`，主內容以1440px為主，並最小支援至375px。<br>

本次利用`Vue CLI`進行撰寫，分開原件為`vue`單檔，方便整理及重複利用。<br>
共通的slider資料部分則以`vuex`的方式管控。

動畫轉場上主要應用到的部分有三:
<ol>
  <li>hover效果</li>
  <li>隨畫面滾動產生變化</li>
  <li>animation變化</li>
</ol>

第二項主要以`AOS`及`scroll-out`製作。<br>

slider則利用`swiper`和其api實現。<br>


## Project setup
```
npm install
```

### Compiles and minifies for production
```
npm run build
```
