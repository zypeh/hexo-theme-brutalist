<p align="center"><img src="https://user-images.githubusercontent.com/1331557/30509508-ad941cca-9ae4-11e7-9920-952bd9e7daa9.png"></img></p>

<p align="center"><img src="https://user-images.githubusercontent.com/1331557/30509509-b260f9ee-9ae4-11e7-8fef-8fdac62be2f7.png"></img></p>

# hexo-theme-brutalist
![](https://img.shields.io/badge/L%20I%20C%20E%20N%20S%20E-M%20I%20T-lightgrey.svg?style=flat-square)
>In its ruggedness and lack of concern to look comfortable or easy, Brutalism can be seen as a reaction by a younger generation to the lightness, optimism, and frivolity of today's web design. —— brutalistwebsite.com

## Installation;
```
hexo init your-lovely-blog
npm install --save hexo-renderer-jade hexo-toc
git clone https://github.com/zypeh/hexo-theme-brutalist.git themes/brutalist
```
Change your `_config.yml` in order to look raw.
```yaml
theme: brutalist

# Table of content, powered by hexo-toc
toc:
  maxdepth: 3
  class: index
  anchor:
    symbol: ¶
    position: after
    style: linea
```
