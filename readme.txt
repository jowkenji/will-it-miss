This site is part of the MDN program, specifically the Guides > Tools and Testing > Understandinf client-side web development tools > Introducing a complete toolchain.
Following the chapter guide was unable to complete the task, I have to search for some problem solving on the internet.
Here is a list of what I have change in order to make this work:
- Installing parcel (without -bundler): npm install --save-dev parcel 
- Add type='module' at index.html: <script src="./index.js" type="module"></script>
- "@parcel/transformer-js browser scripts cannot have imports or exports": add a '.' before the images paths (e.g. './src/img/stars.svg')
- package.json error when try to npm run build: To solve the error you can replace your "main": "index.js", with "source": "src/index.html",
- git push github main: master branch was used instead