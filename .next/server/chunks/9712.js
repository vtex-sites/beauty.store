exports.id = 9712
exports.ids = [9712]
exports.modules = {
  /***/ 9712: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    'use strict'

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* reexport */ sections_Hero_Hero,
    })

    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/organisms/Hero/Hero.js
    var Hero = __webpack_require__(5015)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/organisms/Hero/HeroImage.js
    var HeroImage = __webpack_require__(231)
    // EXTERNAL MODULE: ./node_modules/@faststore/ui/dist/organisms/Hero/HeroHeading.js
    var HeroHeading = __webpack_require__(3332)
    // EXTERNAL MODULE: ./src/components/ui/Button/index.ts + 9 modules
    var Button = __webpack_require__(1310)
    // EXTERNAL MODULE: ./src/components/ui/Icon/index.ts + 1 modules
    var Icon = __webpack_require__(2478)
    // EXTERNAL MODULE: ./src/components/ui/Image/Image.tsx + 2 modules
    var Image = __webpack_require__(514)
    // EXTERNAL MODULE: ./src/components/sections/Section/index.ts + 1 modules
    var Section = __webpack_require__(8879)
    // EXTERNAL MODULE: ./src/components/sections/Hero/hero.module.scss
    var hero_module = __webpack_require__(6010)
    var hero_module_default = /*#__PURE__*/ __webpack_require__.n(hero_module)
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997) // CONCATENATED MODULE: ./src/components/sections/Hero/Hero.tsx
    const Hero_Hero = ({
      title,
      subtitle,
      variant = 'primary',
      colorVariant = 'main',
      linkText,
      link,
      icon,
      imageAlt,
      imageSrc,
    }) => {
      return /*#__PURE__*/ jsx_runtime_.jsx(Section /* default */.Z, {
        children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)(Hero /* default */.Z, {
          className: hero_module_default().fsHero,
          'data-fs-hero': true,
          'data-fs-hero-variant': variant,
          'data-fs-hero-color-variant': colorVariant,
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx(HeroImage /* default */.Z, {
              'data-fs-hero-image': true,
              children: /*#__PURE__*/ jsx_runtime_.jsx(Image /* default */.Z, {
                preload: true,
                loading: 'eager',
                fetchPriority: 'high',
                src: imageSrc,
                alt: imageAlt,
                width: 360,
                height: 240,
                sizes: '(max-width: 768px) 70vw, 50vw',
              }),
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(HeroHeading /* default */.Z, {
              'data-fs-hero-heading': true,
              'aria-labelledby': 'hero-heading',
              children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                'data-fs-hero-wrapper': true,
                className: 'layout__content',
                children: [
                  /*#__PURE__*/ (0, jsx_runtime_.jsxs)('div', {
                    'data-fs-hero-info': true,
                    children: [
                      /*#__PURE__*/ jsx_runtime_.jsx('h1', {
                        'data-fs-hero-title': true,
                        children: title,
                      }),
                      /*#__PURE__*/ jsx_runtime_.jsx('p', {
                        'data-fs-hero-subtitle': true,
                        children: subtitle,
                      }),
                      !!link &&
                        /*#__PURE__*/ (0, jsx_runtime_.jsxs)(
                          Button /* ButtonLink */.ZP,
                          {
                            href: link,
                            inverse: colorVariant === 'main',
                            children: [
                              linkText,
                              ' ',
                              /*#__PURE__*/ jsx_runtime_.jsx(
                                Icon /* default */.Z,
                                {
                                  name: 'ArrowRight',
                                  width: 24,
                                  height: 24,
                                }
                              ),
                            ],
                          }
                        ),
                    ],
                  }),
                  icon &&
                    variant === 'secondary' &&
                    /*#__PURE__*/ jsx_runtime_.jsx('div', {
                      'data-fs-hero-icon': true,
                      children: icon,
                    }),
                ],
              }),
            }),
          ],
        }),
      })
    }

    /* harmony default export */ const sections_Hero_Hero = Hero_Hero // CONCATENATED MODULE: ./src/components/sections/Hero/index.ts

    /***/
  },

  /***/ 6010: /***/ (module) => {
    // Exports
    module.exports = {
      'fs-hero': 'hero_fs-hero__PIPrK',
      fsHero: 'hero_fs-hero__PIPrK',
    }

    /***/
  },
}
