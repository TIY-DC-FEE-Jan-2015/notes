## Git Intro

#### Configuration

* `git config --global user.name "John Doe"`
* `git config --global user.email name@domain.com`
* `git config --global color.ui auto`

#### Initialization

*Creating a brand new project?*

1. `git init` in a folder you want to add version control to
2. Create a repository for this project on GitHub
3. `git remote add`, with a remote name (conventionally, "origin") and the GitHub repo URL

*Cloning an existing project?*

`git clone` and the URL of the project you're cloning

#### Simple Workflow

1. Make changes to files

2. `git status` to see files changed
3. `git diff` to see specific lines changed
4. `git add` files to "staged" status
5. `git commit` to create a checkpoint (with message)
6. `git push` to update remote repo to current state

#### Other Commands

* `git log` - shows commits and messages
* `git checkout` - also does...
    * Reset changes made to *unstaged* file
    * Change files to a specific commit
    * Change files to a specific branch
* `git tag` - creates named checkpoint for easy return
