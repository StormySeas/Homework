
#What command do you use to setup a git repository inside of your folder?
- git init

#What command do you use to ask git to start tracking a file?
- git add .

#What command do you use to ask git to move your file from the staging area to the repository?
- git push origin master

#What command do you use to pull any changes from the master repository into your local repository?
- git pull

#What command do you use to unstage a file?
- git reset HEAD <filename>

#What command do you use to change your files back to how they were after a commit?
- git fetch origin
- git reset --hard origin

#Why is it important to use -- when changing files back to a previous state?
- to make sure the file paths stay the same inside the git index after reverting to a previous commit version

#Why might you want to reset your files back to a previous commit?
- Because I broke something, and I don't know what.

#What command do you use to create a branch?
- git checkout -b <filename>

#What command do you use to use a different branch?
- git --checkout <filename>

#Why would you want to use a branch other than the default master?
- In order to make changes to my repository or do development that I may not want to affect the master file.

#Give an example for when you would use git merge and give an example for when it would be better to submit a pull request to have your branch merged
- merge is used to combine two or more commits into a single commit using a common ancestor as a reference point for a branch

#What command do you use to send all of the work that you've done locally to your remote repository?
- git push remote <repository url>
