# README

This is my solution to The Odin Project's Restaurant Page assignment, which you can learn more about here:

https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/javascript/lessons/restaurant-page

**Live Version:** https://brandonricharda.github.io/restaurant-page/

## Application Walkthrough

### Default Page

By default, the application will display the hours screen.

<img src="https://github.com/brandonricharda/restaurant-page/blob/main/screenshots/hours.png">

### Menu Page

If you click the "menu" option in the navbar, it will switch the page's content to the menu view.

<img src="https://github.com/brandonricharda/restaurant-page/blob/main/screenshots/menu.png">

### About Page

Lastly, clicking the "about" option in the navbar will switch the application to the about view.

<img src="https://github.com/brandonricharda/restaurant-page/blob/main/screenshots/about.png">

### How it Works

I built this application using npm. Each page (represented in the navbar) has its own module. Clicking an item in the navbar empties the current view and fills it with content generated by the module.
