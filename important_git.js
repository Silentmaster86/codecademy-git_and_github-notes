// Important Git Operations

// No. 1 Backtracking Intro

/*

When working on a Git project, sometimes we make changes that we want to get rid of. Git offers a few eraser-like features that allow us to undo mistakes during project creation. In this lesson, we’ll learn some of these features.

*/

// No.2 head commit

/* 

In Git, the commit you are currently on is known as the HEAD commit. In many cases, the most recently made commit is the HEAD commit.

To see the HEAD commit, enter:

    -- git show HEAD --

The output of this command will display everything the git log command displays for the HEAD commit, plus all the file changes that were committed.

*/

// No.3 git checkout

/*

What if you decide to change the ghost’s line in the working directory, but then decide you wanted to discard that change?

You could rewrite the line how it was originally, but what if you forgot the exact wording? The command

    -- git checkout HEAD filename --

will restore the file in your working directory to look exactly as it did when you last made a commit.

Here, filename again is the actual name of the file. If the file is named changes.txt, the command would be

    -- git checkout HEAD changes.txt --

*/

// No.4 more git add

/*

The hamlet repository we are working on contains five files. In Git, it’s common to change many files, add those files to the staging area, and commit them to a repository in a single commit.

For example, say you want to change the character “LARRY” to “LAERTES” in the script. The name currently appears in two files. After you change the name in both files, you could add the changed files to the staging area with:

    -- git add filename_1 filename_2 --

Note the word filename above refers to the name of the file you are adding to the staging area, such as scene-3.txt.

*/

// No.5a git reset I

/*

Great! The files you’ve added to the staging area belong in the same commit.

What if, before you commit, you accidentally delete an important line from scene-2.txt? Unthinkingly, you add scene-2.txt to the staging area. The file change is unrelated to the Larry/Laertes swap and you don’t want to include it in the commit.

We can unstage that file from the staging area using

    -- git reset HEAD filename --

This command resets the file in the staging area to be the same as the HEAD commit. It does not discard file changes from the working directory, it just removes them from the staging area.

*/

// No.5b git reset II

/*

Creating a project is like hiking in a forest. Sometimes you take a wrong turn and find yourself lost.

Just like retracing your steps on that hike, Git enables you to rewind to the part before you made the wrong turn. You can do this with:

    -- git reset commit_SHA --

This command works by using the first 7 characters of the SHA of a previous commit. For example, if the SHA of the previous commit is 5d692065cf51a2f50ea8e7b19b5a7ae512f633ba, use:

    -- git reset 5d69206 --

HEAD is now set to that previous commit.

*/

// No. 6 Git stash

/*

Let’s say you’re working on experimental code on a fresh branch and realize that you forgot to add something to a previous commit in order to continue your work. In order to go to a different branch, one must always be at a clean commit point. In this case you don’t want to commit your experimental code since it’s not ready but you also don’t want to lose all the code you’ve been working on.

A good way to handle this is by using git stash, which allows you to get back to a clean commit point with a synchronized working tree, and avoid losing your local changes in the process. You’re “stashing” your local work temporarily in order to update a previous commit and later on retrieve your work.

While working on a file, you find a small bug in a separate file from a previous commit that needs to be fixed before you continue.

$ git stash

Running the command above will store your work temporarily for later use in a hidden directory.

At this point, you can switch branches and do work elsewhere.

Once the bug is fixed, you want to retrieve the code you were working on previously, you can “pop” the work that was stored when you used git stash.

$ git stash pop

From here, you can continue your work and commit it when ready.

*/

// No.7 Git log

/*

    -- git log --oneline shows the list of commits in one line format.
    -- git log -S "keyword" displays a list of commits where the number of occurrences of the keyword changes within at least one file via addition, deletion, or modification. In the screenshot below, we use git log -S "Add" to find any commits where the number of occurrences of “Add” within a file changes.
    -- git log --oneline --graph - --graph Displays a visual representation of how the branches and commits were created in order to help you make sense of your repository history. When used alone, the description can be very lengthy, so you can combine the command with --oneline in order to shorten the description.

*/

// No.8 Git commit amend

/*

Git’s --amend flag is extremely useful when updating a commit, it allows you to correct mistakes and edit commits easily instead of creating a completely new one.

Let’s say you finish working on a lengthy feature and everything seems to be working fine so you commit your work. Shortly after, you realize you missed a few semicolons in one of your functions. You could technically create a new commit, but ideally, you want to keep all commits specific, clean, and succinct. To avoid creating a new one, you could create your changes, stage them with git add and then type the command git commit --amend to update your previous commit.

It’s important to note that although it seems like --amend is simply updating the commit, what Git actually does is replace the whole previous commit. For this reason, when you execute the command git commit --amend, your terminal editor asks you to update your commit message.

However, if you want to keep the same commit message, you can simply add the flag --no-edit:

    -- $ git commit --amend --no-edit
*/

// No.9 Git alias commands

/*

When grouping commands together, you can end up writing very long lines of Git commands in the terminal such as:

    -- $ git log --pretty=format:"%h %s" --graph

Fortunately, Git offers a helpful feature that can make your Git experience simpler, easier, and more familiar: aliases.

If you have a set of commands that you use regularly and want to save some time from typing them, you can easily set up an alias for each command using Git config.

Below are a couple of examples:

    -- $ git config --global alias.co "checkout"
    -- $ git config --global alias.br "branch"
    -- $ git config --global alias.glop "log --pretty=format:"%h %s" --graph"

Once the aliases are configured, next time you want to check out to another branch you could type the command:

    -- $ git co example_branch

Instead of:

    -- $ git checkout example_branch

Using Git aliases can create a much more fluid and efficient workflow experience when using Git. By getting creative with your aliases, you’re able to wrap a sequence of Git commands into one in order to save time and effort.

*/