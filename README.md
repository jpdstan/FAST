FAST
===
Install with `npm install`. Run `gulp` to compile SASS and host with livereloading.

Put html files in `html/` and stylesheets in `css/`

### How to keep your fork up to date
 - Add this repo as a remote, pick a name like `upstream`: `git remote add upstream https://github.com/InnoDWebDevTier/FAST`
 - Type `git fetch upstream`
 - `git checkout master`
 - `git merge upstream/master`

### Protip: git lg

Add this to your `~/.gitconfig`:

```
[alias]                                                                            
  lg1 = log --graph --abbrev-commit --decorate --date=relative --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all
  lg2 = log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n''          %C(white)%s%C(reset) %C(dim white)- %an%C(reset)' --all
  lg = !"git lg1"
```

And then type `git lg`
