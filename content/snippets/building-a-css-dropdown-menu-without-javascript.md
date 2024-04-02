---
title: Building a CSS Dropdown Menu Without JavaScript
lastmod: 2020-03-24T12:03:21-07:00
publishdate: 2020-03-24T12:03:21-07:00
author: Gautam Ankoji
draft: false
description: Learn how to create a clickable dropdown menu using only CSS, without relying on JavaScript.
tags: 
    - css

code: https://github.com/server-x-101/226-css-theme-toggler
---

In the following example, we'll illustrate how to construct a dropdown menu using CSS exclusively, without any JavaScript. This approach ensures that the dropdown retains its state when clicked. A key element of this demonstration is the [:focus-within](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within) pseudo selector, which enables the dropdown to remain open even when its child links are clicked.

<!-- {{< vimeo 403465162 >}} -->

## Step 1: Setting up the Navigation Bar

Begin by creating the basic structure of the navigation bar.

{{< file "html" >}}
```html
<nav class="navbar">
      <ul class="navbar-nav">
        <li class="nav-item">Home</li>
        <li class="nav-item">About</li>

        <!-- Dropdown Placeholder -->

        <li class="nav-item">Login</li>
      </ul>
    </nav>
```

The navbar serves as a straightforward flex container.

{{< file "css" >}}
```css
.navbar {
    height: 70px;
    width: 100%;
    background: black;
    color: white;
}

.navbar-nav {
    list-style-type: none;
    margin: 0;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
}
```

## Step 2: Integrating the Dropdown Menu

Insert a list item within the navbar that contains a nested dropdown menu.

```html
        <!-- Dropdown Placeholder -->

        <li class="nav-item has-dropdown">

          <a href="#">Theme</a>

          <ul class="dropdown">

            <li class="dropdown-item">
              <a href="#">light</a>
            </li>
            <li class="dropdown-item">
              <a href="#">dark</a>
            </li>
            <li class="dropdown-item">
              <a href="#">solarize</a>
            </li>

          </ul>
        </li>
```

Initially, the dropdown's opacity is set to zero to keep it concealed until focused. Additionally, it's configured as a flex container to control the arrangement of its child elements.

{{< file "css" >}}
```css
.dropdown {
    opacity: 0;
    position: absolute;
    width: 500px;
    z-index: 2;
    background: black;
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 3rem;
    margin-top: 2rem;
    padding: 0.5rem;
   
    transform: translateX(-40%);
    transition: opacity .15s ease-out;
}

.dropdown-item a {
    width: 100%;
    height: 100%;
}
```

## Step 3: Activating the Dropdown with :focus-within

Upon focusing on any `<a>` elements within the dropdown (by clicking), the opacity is adjusted to 1. The `focus-within` selector remains active as long as ANY of the children inside the dropdown are focused, eliminating the need for JavaScript click event listeners. The preceding transition provides a subtle fade-in effect.

{{< file "css" >}}
```css
.has-dropdown:focus-within .dropdown   {
    opacity: 1;
    pointer-events: auto;
}
```
