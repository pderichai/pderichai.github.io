---
title: Keeping Your Dotfiles Under Version Control
date: 2020-05-26
layout: blog
---

Your dotfiles are probably going to be the longest continuous project you work
on as a software engineer, and you'll want to keep them under version control.
There are a number of tools that exist for this exact purpose, but I've found
that using Git + Make is more than enough. Being able to push your dotfiles to
GitHub also means that you can get set up on a new machine extremely quickly.

Let's start by tracking your `.bashrc`:

1. Set up a git repository for your dotfiles:
```shell
$ mkdir ~/dotfiles
$ cd ~/dotfiles && git init
```
2. Move your `.bashrc` to `~/dotfiles/`. Make sure to omit the `.` so git can
   track it:
```shell
$ mv ~/.bashrc ~/dotfiles/bashrc
```
3. Create a Makefile.
```shell
$ touch ~/dotfiles/Makefile
```
4. Put this inside `~/dotfiles/Makefile`:
```make
pwd := $(shell pwd -LP)
.PHONY: bash
all: bash
bash:
        @ln -nfs "${pwd}/bashrc" ~/.bashrc
```
4. Install your dotfiles:
```shell
$ make all
```

Now, all changes to your dotfiles are tracked, and you can easily install your
dotfiles on a new machine by cloning your dotfiles repo and running `make all`.

If you want to add another dotfile, it's super easy. Let's add your Tmux config:

1. Move your `.tmux.conf` to `~/dotfiles/`. Again, make sure to omit the `.` so
   git can track it:
```shell
$ mv ~/.tmux.conf ~dotfiles/tmux.conf
```
2. Update `~/dotfiles/Makefile` to be:
```make
pwd := $(shell pwd -LP)
.PHONY: bash tmux
all: bash tmux
bash:
        @ln -nfs "${pwd}/bashrc" ~/.bashrc
tmux:
        @ln -nfs "${pwd}/tmux.conf" ~/.tmux.conf
```
3. Install your dotfiles:
```shell
$ make all
```

You should follow similar steps for any dotfiles you want tracked. For a
working example, you can check out my
[dotfiles](https://github.com/pderichai/dotfiles).
