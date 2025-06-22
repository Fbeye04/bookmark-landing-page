# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

### Links

- Solution URL: [The Repository](https://github.com/Fbeye04/bookmark-landing-page)
- Live Site URL: [Live Site](https://bookmark-landing-page-azure.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Tailwind css

### What I learned

#### Introduction to Tailwind CSS

In this NFT Preview Card project, I explored Tailwind CSS as a utility-first CSS framework. This was my first experience using a CSS framework, and I discovered several valuable benefits and learning points:

##### 1. Utility-First Approach

Tailwind CSS employs a utility-first approach that allowed me to build designs directly in HTML using utility classes. This differs significantly from traditional CSS approaches where we write separate selectors and rules. For example:

```html
<!-- Traditional Approach: Requires writing separate CSS -->
<div class="card">...</div>

<!-- Tailwind Approach: Styling directly in HTML -->
<div
  class="bg-very-dark-blue-card text-white rounded-2xl p-6 max-w-[350px] shadow-2xl">
  ...
</div>
```

This enables faster development without switching between HTML and CSS files.

##### 2. Easy Responsiveness

Tailwind provides an intuitive prefix system (`sm:`, `md:`, `lg:`, etc.) for applying different styles at different screen sizes. Example:

```html
<h1 class="text-lg md:text-xl lg:text-2xl">Responsive Heading</h1>
```

##### 3. Group Modifier for Interactions

I learned to use Tailwind's `group` and `group-hover` features to create complex interactions like image overlays:

```html
<div class="relative group">
  <img src="image.jpg" class="rounded-lg" />
  <div
    class="absolute inset-0 bg-cyan opacity-0 group-hover:opacity-50 transition-opacity duration-300">
    <img src="icon.svg" class="opacity-0 group-hover:opacity-100" />
  </div>
</div>
```

##### 4. Transitions and Animations

Tailwind has excellent utility classes for transitions and animations that make adding interactivity easy:

```html
<button class="bg-blue-500 hover:bg-blue-700 transition-colors duration-300">
  Button with Transition
</button>
```

##### 5. Mobile-First Mindset

Tailwind encourages a mobile-first approach to design, which is a modern practice in responsive web development. I started by designing for mobile devices, then expanded for larger screens.

##### 6. Pseudo-classes and Pseudo-elements

Tailwind provides an easy way to apply styles to various element states using prefixes like `hover:`, `focus:`, `active:`, etc.

```html
<a class="text-blue-500 hover:text-blue-700 hover:underline"
  >Link with Hover Effect</a
>
```

### Useful resources

- [Tailwind docs](https://tailwindcss.com/docs) - the documentation prepared by tailwind officials is very helpful in transitioning to using this framework.
- [tailwind 4.1 user guide](https://youtu.be/Kh3xj-5nMqw?si=a8dv9hHOpzFJSewx) - for anyone who feels lost in the initial setup of the latest tailwind.
- [guide to some changes in tailwind 4.0](https://youtu.be/sHnG8tIYMB4?si=PHep3VChewNiJiF3)

## Author

- LinkedIn - [Muhammad Fachrezi Barus](https://www.linkedin.com/in/muhammad-fachrezi-barus/)
- Frontend Mentor - [@Fbeye04](https://www.frontendmentor.io/profile/Fbeye04)
- GitHub - [@Fbeye04](https://github.com/Fbeye04)
