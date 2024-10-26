// GIT

/*

Git is a command line software that keeps track of changes made to a project over time. Git works by recording the changes made to a project, storing those changes, then allowing a programmer to reference them as needed.

All Git commands follow the pattern git <action> and, in order to use Git for a project, a project must first be initialized using the git init command in the project’s root directory.

*/

// GIT INIT

// The word init means initialize. The command sets up all the tools Git needs to begin tracking changes made to the project

// GIT WORKFLOW

/*

A Git project can be thought of as having three parts:

 1. A Working Directory: where you’ll be doing all the work: creating, editing, deleting and organizing files
 2. A Staging Area: where you’ll list changes you make to the working directory
 3. A Repository: where Git permanently stores those changes as different versions of the project

The Git workflow consists of editing files in the working directory, adding files to the staging area, and saving changes to a Git repository. In Git, we save changes with a commit, which we will learn more about in this lesson.

*/

// GIT STATUS

/*

As you write the screenplay, you will be changing the contents of the working directory. You can check the status of those changes with:

git status

*/

// GIT ADD

/*

In order for Git to start tracking scene-1.txt, the file needs to be added to the staging area.

We can add a file to the staging area with:

git add filename

The word filename here refers to the name of the file you are editing, such as scene-1.txt.

*/

// GIT DIFF

/*

Imagine that we type another line in scene-1.txt. Since the file is tracked, we can check the differences between the working directory and the staging area with:

git diff filename

Here, filename is the actual name of the file. If the name of my file was changes.txt the command would be

git diff changes.txt

*/

// GIT COMMIT

/*

A commit is the last step in our Git workflow. A commit permanently stores changes from the staging area inside the repository.

git commit is the command we’ll do next. However, one more bit of code is needed for a commit: the option -m followed by a message. Here’s an example:

git commit -m "Complete first line of dialogue"

Standard Conventions for Commit Messages:

Must be in quotation marks
Written in the present tense
Should be brief (50 characters or less) when using -m

*/

// GIT LOG

/*

Often with Git, you’ll need to refer back to an earlier version of a project. Commits are stored chronologically in the repository and can be viewed with:

git log

*/

// Generalizations

/*

    -- Git is the industry-standard version control system for web developers
    -- Use Git commands to help keep track of changes made to a project:
        -- 'git init' creates a new Git repository
        -- 'git status' inspects the contents of the working directory and staging area
        -- 'git add' adds files from the working directory to the staging area
        -- 'git diff' shows the difference between the working directory and the staging area
        -- 'git commit' permanently stores file changes from the staging area in the repository
        -- 'git log' shows a list of all previous commits

*/