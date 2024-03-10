# Rule Template (Rt) Demo

For quick start of rule template visit [https://rt.qiangc.net/help](https://rt.qiangc.net/help)

### What is Rule Template (Rt)?

It is way to separate application logic out from application code.

### What is in the repo?

Demo various usages of rule template.

### Structure

Branches are independent from each other.  Main branch has general instructions.  Feature branch covers a specific usage of Rt.

e.g. react/tic-tac-toe

This branch shows how to intergrate rule template to React Tic-Tac-Toe tutorial to allow user play with the program running rule template configured externally.

### Branch history

Each branch has its own history, contains only a few commits.

- The first commit shows where the source code comes from in its original form.
- The next commit can be unzipped orginal source code files.
- The last commit is change made for integration.  Change kept at minimum.

Run git log to check branch history.

```
git log --oneline
```

Case in point, compare last commit to its orginal source code.  Check what was changed and how much the change was.

There is NOTE.md for each branch.  It is a note I took when I got the original program running to ensure original code works before any change.

### Reversion

The goal of the repo is to show what is need to change to utilize rule template.  When there is change in the orginal code from its source.  The branch will be deleted and recreated.

What that means to you?  If you find conflict when you pull, clean your local branch and pull it again.

### List of branches

```
git branch -a
```

- main
- [angular/heroes](https://rt.qiangc.net/help/demo/angular-tour-of-heroes)
- [react/tic-tac-toe](https://rt.qiangc.net/help/demo/react-tic-tac-toe)

### Switch local branch

```
git checkout <branch>
```

### Switch branch from remote

```
git checkout -t origin/<branch>
```

_Assuming origin is remote repo._