<p align="center">
	<a href="https://i.ibb.co/mD4CQGx/Group-4.png">
		<img src="https://i.ibb.co/mD4CQGx/Group-4.png" width="456" alt="unitcss">
	</a>
</p>

[![NPM](https://nodei.co/npm/unitcss.png)](https://nodei.co/npm/unitcss/)

## About

[Unitcss](https://github.com/adenekan41/unitcss) A cli tool to convert css units in your file **helps you swiftly convert units / mesurements in your file or folders**.

**Using unitcss** on **files** provides an **easy way** of **changing mesurement from px to rem or rem to px or even px to em** with only a few commands in your terminal.

## Installing [unitcss](https://github.com/adenekan41/unitcss)

```bash
npm i -g unitcss
```

## Usage

```bash
unitcss --help

   Options:

    unitcss [command] <options>
    <foldername | file> .............. to change unit of files in a folder or in a file its self
    --version, -v .............. check version of unitcss
    --perview, -p .............. preview file to make changes to, this shows you how many px, rem, em... occured in your file


    Working with folders:

    unitcss <foldername> ..... to change unit of files in a folder


    Working with files :

    unitcss <file> ..... to change unit of a file

```

### Using the commands

Unitcss allows you to utilize the best of css unit mesurements, here are some examples and a few articles to guide you on the best way to use the measurements, where and when to use them.

- [Simple Explanation Of rem & em CSS Units](https://www.youtube.com/watch?v=H4UtKu11yXg) by Traversey Media
- [Your Ultimate Guide to CSS Units – All You Need to Know](https://blog.alexdevero.com/css-units-ultimate-guide/) by Alex Devero
- [EM, PX, PT, CM, IN…](https://www.w3.org/Style/Examples/007/units.en.html) by w3.org community

```bash
unitcss assets/css

? What do you want to convert ? (Use arrow keys)
❯ Convert from px to rem
  Convert from rem to px
  Convert from px to em
  Convert from em to px

? What is your root size ? (please this value must be in px) (16px)

================================

[||||||-------------] 34%
[|||||||||||||------] 67%
[|||||||||||||||||||] 100%

UNIT CSS REPORT:

Unitcss is done and we found 88 matches and replaced  88
 File we helped you convert: src/commands/style.css


```

😀 You see its that simple

### Other Interesting Resources

- [Most Common CSS Units Of Measure Explained](https://dev.to/flippedcoding/most-common-css-units-of-measure-explained-2kee) by Milecia McG
- [Understanding and Using rem Units in CSS](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/) by Adrian Sandu
- [CSS Units (CSS Lengths: rems, ems, pixels, percents, and more)](https://www.youtube.com/watch?v=qrduUUdxBSY) by Devtips

> MIT © [codewonders.dev](https://codewonders.dev) &nbsp;&middot;&nbsp; GitHub
> [@adenekan41](https://github.com/adenekan41) >
> &nbsp;&middot;&nbsp;
