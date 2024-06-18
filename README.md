# Frontend Mentor - Huddle landing page with alternating feature blocks solution

This is a solution to the [Huddle landing page with alternating feature blocks challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-alternating-feature-blocks-5ca5f5981e82137ec91a5100). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

[My Github](https://slideur.github.io/HuddleLanding/)

### The challenge

- ![desktop-design](/design/desktop-design.jpg)
- ![mobile-design](/design/mobile-design.jpg)
- ![active-states](/design/active-states.jpg)

### Screenshot

- ![FirstPartSiteUp](/ImagesSite/FirstPartSiteUp.png)
- ![SecondPartSiteMiddle](/ImagesSite/SecondPartSiteMiddle.png)
- ![ThirdPartSiteEnd](/ImagesSite/ThirdPartSiteEnd.png)
- ![ActiveStateFirst](/ImagesSite/ActiveStateFirst.png)
- ![ActiveStateSecond](/ImagesSite/ActiveStateSecond.png)
- ![ActiveStateThird](/ImagesSite/ActiveStateThird.png)
- ![ActiveStateFourth](/ImagesSite/ActiveStateFourth.png)

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/tailwind-mobile-first-workflow-mki_iONjff)
- Live Site URL: [Live site URL here](https://slideur.github.io/HuddleLanding/)

### Built with

- Tailwind
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I learnt how to use groups in Tailwind, how to apply factorisation and how to integrate style directly into html, something I didn't know I could do in this framework. I also learned how to customise screen sizes while keeping the original ones.

```html
Avec tailwind for group =>

<div class="group">
	<h1 class="group-hover:text-pink-400">Some HTML code I'm proud of</h1>
	<h2 class="group-hover:text-pink-400">Some HTML code I'm proud of</h2>
</div>
```

```css
Tailwind with @apply=> .factor {
	@apply flex flex-col gap-4;
}
```

To customise screen sizes =>

```tailwind
theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
       'xxxs': '320px',
       'xxs' : '375px',
       'xs' : '425px',
     },
    extend: {
      screens: {
        '1xl': '1440px',
        '3xl': '1920px',
      },
    }
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

I'd like to do more training in html structure and in customising various parameters to increase the css possibilities in Tailwind. I'd also like to improve the use of grids with Tailwind.

### Useful resources

- [Tailwind documentation](https://tailwindcss.com/docs/installation) - It's a great help in finding a solution.
- [Solution for a problem with github](https://www.freecodecamp.org/news/error-src-refspec-master-does-not-match-any-how-to-fix-in-git/) - I've had a problem with Github, the classic procedure for submitting a project no longer works on my computer. But maybe others will have the same problem. I found this solution that unblocked everything.
- [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/CSS) - This site often helps me find solutions
- [Font awesome](https://fontawesome.com/icons/google?f=brands&s=solid) - This site often helps me find icons like those for social networks and many others, depending on the project we're working on.

## Author

- Frontend Mentor - [@Slideur](https://www.frontendmentor.io/profile/Slideur)
