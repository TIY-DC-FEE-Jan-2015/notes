## Terminal

#### Command Elements

```bash
$ command -opts arguments
```

A **command** is a small program that you run, which performs a specific task.

**Options** are optional parameters that get passed in to modify the operation and/or output of the program. Options can be passed in as one or more single characters (`-l`, `-alGFz`) and/or as words (`--format=pretty`). Options are specific to each program.

**Arguments** may be passed in to the program to specify values to perform the program on. `ls` (without arguments) lists the contents of the current directory; `ls /usr/local` lists the contents of the /usr/local directory.

#### Common Commands

* `man` - Shows manual for argument
* `pwd` - Prints current folder
* `ls` - Lists files and folder
* `cd` - Change directory
* `mkdir` - Creates new folder
* `touch` - Creates new (empty) file
* `cat` - Prints contents of file
* `head` - Print top lines of file
* `tail` - Print bottom lines of file
* `rm` - Delete (don't be dumb)
* `mv` - Move
* `cp` - Copy
* `grep` - Search for contents
* `pbcopy` - Copy onto clipboard
* `pbpaste` - Pastes from clipboard

#### Shortcuts

* `~` - Home directory
* `/` - Root
* `..` - Up one level
* `|` - "Pipe," passes result from left into right
* `>` - Pipe, but left side is added to a file on right
* `<` - Pipe, but right side is a file input to left