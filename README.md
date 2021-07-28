# [droniu.pl](http://droniu.pl)

Droniu Photography is my webfolio for showcasing my portrait / event photos. Made using create-react-app.

Website uses Droniu Photography REST API, which is my backend for storing photos and organizing them into catalogs. 

## Current features:
After adding a catalog to backend, it automatically displays its cover on the frontend. In the future there will be possibility to click on the cover and see the photos added to particular catalog.

At the moment it is also possible to send messages to me directly from the website. The form is handled using custom hook *useForm* and sends POST request to the backend using fetch API.

## Custom libraries used:
- [react-spinners](https://github.com/davidhu2000/react-spinners)
- [react-toastify](https://github.com/fkhadra/react-toastify)

## To-do list:

- [x] Slides
- [x] Scrollable div
- [x] Sidebar
- [x] Social icons
- [x] Logo div
- [x] Title & subtitle
- [ ] Text fade in on scroll
- [x] Api fetch loader
- [x] Prompt arrow
- [x] Contact Page
- [ ] Galleries
- [ ] 'Back' arrow/button
- [ ] Prompt gallery
- [ ] Mobile improvements - vertical photos / centering

## License

Licensed under MIT
