### Testing image Reveal with GSAP

## WARNING!

#### I Decided to change the original settings of the scss for this project

<p>Because for some reason i wasnt getting the effect like in the tutorial , where
you could center the image with width: 1440px ... etc i will add the comments inside the App.js</p>

<br>

[<img src="./src/img/preview.gif">](https://nadiamariduena.github.io/animated-portfolio-with-intersection-observer/)

<br>
<br>

##### Preview

```javascript
useEffect(() => {
  tl.to(container, 1, {
    css: { visibility: "visible" },
  })
    .to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut })
    .from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.5 });
});
```

<br>
<br>
<br>

<hr>

## Dependencies

```javascript

npm i react

npm i react-dom

npm i react-scripts

npm i node-sass --save

npm i autoprefixer@9.8.0

npm i gh-pages --save-dev


npm i gsap
```

<br>
<br>

## Is WebP supported by all browsers?

<p>
According to caniuse, currently 79.2% of browsers support the WebP image format. That would include Chrome, Firefox, and Edge. Safari will support WebP in version 14, which is expected to be released in September 2020

</p>

<br>
<br>
<br>
<br>

#### Tutorial by: Wrong Akram
