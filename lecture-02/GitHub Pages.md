## GitHub Pages

#### Git Branches

We'll talk a lot more about branches later on. For now, here's what we need to understand conceptually.

* Git creates a timeline of commits called a "tree"; all commits are part of a branch of that tree
* When a branch is created, any file changes made on the branch are kept separate from any file changes made on the trunk
* A branch's changes can be merged back into the trunk (we'll worry about how later)

*Creating a new branch*

`git branch new_branch_name`

*Changing from one branch to another*

`git checkout destination_branch_name`

#### GitHub Pages

GitHub provides free static webpage hosting, which is fine for what we're doing for the first half of the course (and useful since your code will be on there anyway). 

GitHub serves up the content in the `gh-pages` branch. Create that branch (if you haven't already), and then `git push` that branch up to the GitHub remote. The first time you push a `gh-pages` branch to a remote you may need to wait a minute or two before the hosted page is publicly accessible, but afterwards it's immediate.

The URL for your page will be `http://youraccountname.github.io/repository-name`.

#### References

[GitHub Pages Intro](https://pages.github.com/)