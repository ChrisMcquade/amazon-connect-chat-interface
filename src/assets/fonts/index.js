// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { createGlobalStyle } from 'styled-components'

const Fonts = createGlobalStyle`
  @font-face {
    font-family: VMCircular;
    font-style: normal;
    font-weight: 300;
    font-stretch: 100% 100%;
    src: url(https://storyblok.cdn.vmo2digital.co.uk/f/253875/x/8faf8fae43/vmcircularwhispertt-light.woff2) format("woff2"),
         url(https://storyblok.cdn.vmo2digital.co.uk/f/253875/x/7c8fb2045c/vmcircularwhispertt-light.ttf) format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: VMCircular;
    font-style: normal;
    font-weight: 400;
    font-stretch: 100% 100%;
    src: url(https://storyblok.cdn.vmo2digital.co.uk/f/253875/x/53f93679dc/vmcircularchattt-book.woff2) format("woff2"),
         url(https://storyblok.cdn.vmo2digital.co.uk/f/253875/x/b1943ffbd6/vmcircularchattt-book.ttf) format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: VMCircular;
    font-style: normal;
    font-weight: 500;
    font-stretch: 100% 100%;
    src: url(https://storyblok.cdn.vmo2digital.co.uk/f/253875/x/53f93679dc/vmcircularchattt-book.woff2) format("woff2"),
         url(https://storyblok.cdn.vmo2digital.co.uk/f/253875/x/b1943ffbd6/vmcircularchattt-book.ttf) format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: VMCircular;
    font-style: normal;
    font-weight: 600;
    font-stretch: 100% 100%;
    src: url(https://storyblok.cdn.vmo2digital.co.uk/f/253875/x/c90a340a82/vmcircularshouttt-bold.woff2) format("woff2"),
         url(https://storyblok.cdn.vmo2digital.co.uk/f/253875/x/2ba10447e1/vmcircularshouttt-bold.ttf) format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: VMCircular;
    font-style: normal;
    font-weight: 700;
    font-stretch: 100% 100%;
    src: url(https://storyblok.cdn.vmo2digital.co.uk/f/253875/x/c90a340a82/vmcircularshouttt-bold.woff2) format("woff2"),
         url(https://storyblok.cdn.vmo2digital.co.uk/f/253875/x/2ba10447e1/vmcircularshouttt-bold.ttf) format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: VMCircular;
    font-style: normal;
    font-weight: 800;
    font-stretch: 100% 100%;
    src: url(https://storyblok.cdn.vmo2digital.co.uk/f/253875/x/7140f89ef7/vmcircularyelltt-black.woff2) format("woff2"),
         url(https://storyblok.cdn.vmo2digital.co.uk/f/253875/x/e481bf70fb/vmcircularyelltt-black.ttf) format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: VMCircular;
    font-style: normal;
    font-weight: 900;
    font-stretch: 100% 100%;
    src: url(https://storyblok.cdn.vmo2digital.co.uk/f/253875/x/7140f89ef7/vmcircularyelltt-black.woff2) format("woff2"),
         url(https://storyblok.cdn.vmo2digital.co.uk/f/253875/x/e481bf70fb/vmcircularyelltt-black.ttf) format("truetype");
    font-display: swap;
  }

  /* Apply font smoothing like Virgin Media website */
  body {
    font-family: "VMCircular", arial, helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default Fonts;
