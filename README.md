# 코드스테이츠 Coz-Shopping-Project 프로젝트
코드스테이츠 프론트엔트 44기 솔로 프로젝트 입니다.

## Stack
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/Styled-components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/>

Redux 없이 구현해 봤습니다. 
상품 데이터는 useState를 통해 저장해서 사용했고  / 북마크에 저장될 상품들은 localStorage를 이용해 구현했습니다. 
(덕분에 상태 관리 라이브러리의 중요성을 깨닫는 계기가 되었습니다,,,)😂

## 폴더 구조 
```
📦src
 ┣ 📂Image
 ┃ ┣ 📜로고.jpeg
 ┃ ┣ 📜카테고리0.jpeg
 ┃ ┣ 📜카테고리1.jpeg
 ┃ ┣ 📜카테고리2.jpeg
 ┃ ┣ 📜카테고리3.jpeg
 ┃ ┗ 📜카테고리4.jpeg
 ┣ 📂components
 ┃ ┣ 📂Layout
 ┃ ┃ ┣ 📜Footer.js
 ┃ ┃ ┗ 📜Header.js
 ┃ ┗ 📂UI
 ┃ ┃ ┣ 📜BookmarkComponent.js
 ┃ ┃ ┣ 📜Category.js
 ┃ ┃ ┣ 📜Modal.js
 ┃ ┃ ┣ 📜ProductItemList.js
 ┃ ┃ ┗ 📜Toast.js
 ┣ 📂pages
 ┃ ┣ 📜Bookmark.js
 ┃ ┣ 📜Main.js
 ┃ ┗ 📜ProductList.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜logo.svg
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
```

##  코딩컨벤션  

git branch 전략  
 - feature/자기이름/기능 

git commit 시에 사용한 작성규칙 
- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서 수정

## 배운점

이전 과제들과는 다르게, 에자일 방법론을 기반으로 한 현업 개발자의 개발 루틴을 경험해 본 것 
- 페어 분과 스크럼을 통해 각 기능별로 티켓을 나누고 필요한 기능을 어떻게 구현할 것인지 작성하고 개발을 완료하기까지의 시간을 상의해서 정하였다. 
 기능 개발의 순서가 명확하니 오류가 발생했을 시 어디서 오류가 났는지 캐치가 빨랐던 것 같다. 


상태 관리의 중요성 
 - 이번 프로젝트에서 Redux를 사용하지 않고 구현하려고 했다. 
   상태 관리와 관련해서 따로 오류가 생긴 건 아니지만 props를 여러 개 내려줄 시에 props를 추적하는 게 힘들었고, 가독성 또한 너무 떨어졌다. 
   그래서 리덕스를 알아보다가 외부 상태 라이브러리가 아닌 리액트의 `Context API`를 알게 되어 학습할 예정이다. 


## 해결하지 못한 오류 🥲

1.  북마크(별표) 클릭 시 북마크 리스트나 페이지에는 잘 들어가지만, 색상이 노란색으로 안바뀌는 버그가 있다. 
<img width="1430" alt="image" src="https://github.com/tmdghks8642/fe-sprint-coz-shopping/assets/119275581/992eddb7-da35-446c-b2af-bbc0f9f0614c">

2. 무한 스크롤 구현 
   무한 스크롤이 필요한 상품 리스트 페이지에서 아래와 같이  IntersectionObserver를 통해 무한 스크롤을 구현하려 했다. 
   스크롤 했을 때 footer에 위치하게 되면 `callback` 함수가 호출되면서 내부의 콘솔(1) 이 찍히게 된다. 
   이 함수에 어떤 로직을 추가해 주어야 하는지 모르겠다,,.
   추가로 찾아보니 scroll 이벤트를 통해 무한 스크롤을 구현하는 방법도 있어 학습할 예정이다. 
```js
function ProductList ({SetBookmarkitems}){
  
    const target = useRef(null)
    useEffect(()=>{
            observer.observe(target.current)
          },[])

        // allitem 정렬
        const sortitems = allitem.sort((a,b)=> a.id-b.id)
        const allcategory = sortitems.filter((el,idx)=> idx <25)

          const options = {
            root: null,
            threshold: 1.0,
            rootMargin: '10px'
          }
          // 무한스크롤을 구현하려고 했으나 추가 데이터를 받아와서 뿌리는 걸 못하겠음
          const callback = ()=>{
                console.log(1)
            }
          
      const observer = new IntersectionObserver(callback, options)
```


## 느낀점 

이전 과제들은 이미 프로젝트가 완성되어 있어 클론 해와서 테스트를 통과하는 과제들만 하다가 처음으로 프로젝트를 어떻게 구성할지 설계를 하고
무에서 유를 창조하려고 하니 시간이 오래 걸렸던 것 같고 컴포넌트 사이의 구조 설계가 완벽하지 못해 오류가 있는 거 같다. 

git 또한 익숙하지 않아서 처음에 많은 시간을 허비하였다,,, 덕분에 git flow 전략을 학습하게 되었고 대략적으로 어떻게 git을 활용해야 하는지 배운 계기가 된 프로젝트이다. 


