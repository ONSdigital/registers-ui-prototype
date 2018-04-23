# Useful Git Commands

## Cloning a repository

Clone the repo and enter the directory:

```shell
git clone https://github.com/ONSdigital/registers-ui-prototype.git
cd registers-ui-prototype
```

## Update your local repository

```shell
git pull
```

## Branches

After cloning, you will be on the default branch (master). Change to an existing branch using the following command:

```shell
git checkout branchname
```

You can create a new branch and change to it using the following command:

```shell
git checkout -b feature/new-feature
```

## Adding changes

Once you have some work to commit, you can stage it so it is ready to be commited.

```shell
git add . # This will add all your changes
git add --all # This will add all your changes, including new files
git add path/to/file # This will add a specific file, you can add multiple files at once
```

## Committing changes 

Now you can commit the work you have done.

```shell
git commit -m "Commit message goes here"
git commit # A VIM editor will open up, allowing you to write a more detailed commit message
```

## Pushing changes

At this stage, your changes are still on your local machine, to push them up to Github, use the following:

```shell
git push # This will work if the branch you are working on is present in Github
git push --set-upstream origin branchname # Use this if the branch is not yet on Github
```

## Undo local changes

```shell
git checkout . # Undo all local changes, be careful using this
git checkout path/to/file # Undo changes for a specific file
```
