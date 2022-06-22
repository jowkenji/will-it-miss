# Will it miss? (NASA API)
This site is part of the MDN program, more specifically: Guides > Tools and Testing > Understanding client-side web development tools > <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain">Introducing a complete toolchain</a>.<br>
Just following the chapter guide wasn't enough to complete the task, so I have to search for some help on the internet.<br>
Here is a list of what I have change in order to make this work:<br>
<ul>
<li> The command 'npx parcel src/index.html' couldn't build. Solution: Installing parcel (without -bundler): npm install --save-dev parcel </li>
<li> Solution: Add type='module' at index.html: script src="./index.js" type="module"</li>
<li> "@parcel/transformer-js browser scripts cannot have imports or exports". Solution: add a '.' before the images paths (e.g. './src/img/stars.svg')</li>
<li> Error: 'package.json error when try to npm run build'. Solution: Replace your "main": "index.js", with "source": "src/index.html",</li>
</ul>
<br>
And also the following chapter Guides > Tools and Testing > Understanding client-side web development tools > <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Deployment"> Deploying our app</a>.<br>
<ul>
<li> 'git push github main'. Solution: Actually the other branch was used instead (master)</li>
</ul>