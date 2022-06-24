# Will it miss? (NASA API)
This site is an exercise proposed by the MDN program, which you can find at: 
<br>Guides > Tools and Testing > Understanding client-side web development tools > <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain">Introducing a complete toolchain</a>.<br>
It is also deployed at Netlify: https://lovely-pastelito-74d396.netlify.app/ <br>

# Summary
In summary, all the parts of the toolchain:<br>
- Code quality and maintenance are performed by ESLint and Prettier. These tools are added as devDependencies to the project via npm install --dev eslint prettier eslint-plugin-react (the ESLint plugin is needed because this particular project uses React).
- There are two configuration files that the code quality tools read: .eslintrc and .prettierrc.
- During development, we use Parcel to handle our dependencies. parcel src/index.html is running in the background to watch for changes and to automatically build our source.
- Deployment is handled by pushing our changes to GitHub (on the "main" branch), which triggers a build and deployment on Netlify to publish the project.
- We also have a simple test that blocks the building and deployment of the site if the NASA API feed isn't giving us the correct data format.
<br>

# It could be as simple as follow the recipe, but...
Just following step by step guide wasn't enough to complete the task, so I have to search for some help online. Here is a list of what I have change in order to make this work:<br>

- The command 'npx parcel src/index.html' couldn't build. Solution: Installing parcel (without -bundler): npm install --save-dev parcel
- Add type='module' at index.html: script src="./index.js" type="module"
- "@parcel/transformer-js browser scripts cannot have imports or exports". Solution: add a '.' before the images paths (e.g. './src/img/stars.svg')
- Error: 'package.json error when try to npm run build'. Solution: Replace your "main": "index.js", with "source": "src/index.html",

<br>
Later in the next chapter: Guides > Tools and Testing > Understanding client-side web development tools > <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Deployment"> Deploying our app</a> :<br>

- 'git push github main' wasn't working. Solution: Actually, the other branch (master) has been used instead of 'main'.
- The test command with wildcard does not work on Windows. Solution: buy a Mac X_X $$$. Alternative solution: export the function to another other js file. I created 'index.js' inside the test directory, and required the function.