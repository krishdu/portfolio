#Krishnendu Patra -Portfolio

```
node version:
```
node: v16.8.0
npm: 7.21.0

```
Steps to Deploy in GitHub Pages
```
+ add `homepage` URL in `package.json` file (e.g,. https://krishdu.github.io/portfolio)
+ add dependency `npm install gh-pages --save-dev`
+ add these two cmd in package.json scripts
    + `"predeploy" : "npm run build"`
    + `"deploy" : "gh-pages -d build"`
+ push the changes to repo
+ run cmd `npm run deploy`
    + This will create a bundled version of our React application and push it to a gh-pages   branch in our remote repository on GitHub.
