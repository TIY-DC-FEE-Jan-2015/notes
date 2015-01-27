## Tuesday, January 27th

#### Today we:

* Ate more squagels (thanks, Su!)
* Should have quarantined Josh out of the room
* Have considered getting an IV from the coffee keg more seriously than jokingly

#### Today we learned

* Basic terminal usage
    * Commands (`ls`)
    * Options (`-al`)
    * and Arguments (`Code/tiy/Spring 2015/Notes`)
* Opening files in Sublime Text with `subl`
* Basic git usage (see below)
* Using GitHub
    * Creating new repositories (and deleting them)
    * Adding git remotes to local git repositories
    * Pushing to GitHub
    * GitHub Pages!
* Using an external stylesheet
* Static code hosting

#### Git Commands 101

All of this should take place in the directory that your project is in. (Make sure to `cd` into it in Terminal.)

When first starting a project:

* `git init` - Tells git to watch this directory

Status:

* `git status` - Tells us what files are new, changed, deleted
* `git diff` - Shows us the line-by-line changes in our **unstaged** files.

Adding/commiting:

* `git add file_name_goes_here` - Prepares the file to be committed (think: stacking boxes on a palette). The technical term is **staging** for commit
* `git commit -m "commit message"` - Creates a commit of **staged** files that can be used as a checkpoint, and pushed to other people (think: shrink wrapping the palette's contents and putting it on a truck)

Remotes:

* `git remote add origin really_long_url` - Tells git that, for this project, we're using (really long URL) as a "remote," or a place we can push and pull to. The URL is shown when we create a New Repository on GitHub. `origin` is the name for this remote.
* `git push origin branch_name` - Push all of our commits on this branch to origin (e.g. GitHub).

Branches:

* `git checkout -b branch_name` - Creates a new branch.
* `git checkout branch_name` - Jumps to an existing branch.