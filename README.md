NEVER MERGE THIS BRANCH WITH MASTER. They are set up this way so that the gh-pages module can deploy production code to master while the source code is stored here. 

Also, don't forget to run `npm install` in the root directory of the `development` branch when cloning from scratch. 

## Deployment instructions

Commit and push all changes to the `development` branch. Then, run `npm run deploy` FROM THE `development` BRANCH. 