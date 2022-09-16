# Image Search App

Portfolio project. React

App link: [https://heorhii-aksiuk.github.io/image-search-app/]

Technologies:

- React(v18)(Hooks),
- JavaScript(ES62022/ES12),
- JSX(HTML5),
- CSS-in-JS(Styled Components)(CSS3),
- REST API(Axios)
- ...and React Toastify, React Loader Spinner, sanitize.css

Extra: RWD, Semantic, A11y

Backend: Pixabay API

Hosting: GitHub Pages

Features:

- Основная функция приложения - поиск изображений по ключевому слову
  (используется форма для запроса с кнопкой, которая принимает значение от
  пользователя и по нем осуществляется запрос на сторонний бэкенд Pixabay API
  [https://pixabay.com/api/docs/] в случае успешного и не пустого ответа от
  которого отображаются 12 картинок в интерфейсе)
- Увеличение выбранной картинки на весь экран кликом/тапом (используется
  модальное окно и React-порталы )
- Закрытие модального окна по Esc, клик/тап вне картинки, двойной клик/тап по
  картинке (используется Browser Api)
