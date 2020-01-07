![](/ga_cog.png)

# Getting Started with Git 

For this lab, we'll get you guys even more comfortable with the basic GitHub commands and functionality. 

**Learning Objectives**
- Git and Github

**Prerequisites**
- GitHub Account 
- Command Line

---

## Getting Started 

There are two different ways to make a GitHub repo, so let's practice both ways! 

### 1: Making a repo on GitHub first and then cloning it locally 

1. Go to github enterprise: https://git.generalassemb.ly

1. If you're logged, in you should see a sidebar on the left like so: 
   - <details><summary>Example:</summary><p>
   
      ![](https://i.imgur.com/C6HWvrF.png)
      
      </p></details>
      
1. Click on the 'New' button and create a new repo by entering a name in the Repository Name field. Note that this name has to be unique to your repository. For this lab, let's just use: git-practice-one
   - <details><summary>Example:</summary><p>
   
      ![](https://i.imgur.com/PNtYzxv.png)
      
      </p></details>
  - Feel free to make it either private or public for this lab
  
1. Click on the "Initialize this repository with a README". A README file is just a blank document that is the default page that your repository displays. It is a markdown file and normally includes information that you provide about your application.
   - <details><summary>Example:</summary><p>
   
      ![](https://i.imgur.com/TFI1s0l.png)
      
      </p></details>
      
1. Click `Create repository`. You should be redirected to the newly made repo.

1. Click on the `Clone or download` button.

   - <details><summary>Example:</summary><p>
   
      ![](https://i.imgur.com/1tgwW3D.png)
      
      </p></details>
      
1. Copy the link

1. Open your terminal / Git Bash so that we can make a local copy of the Github repo!

1. In your terminal / Git Bash, navigate to the folder where you would like to keep the folder for this repo. For now, let's create a folder on the Desktop called `git-lab`

1. `cd` into `git-lab` then DO NOT create a new folder for our repo, when we use `git clone` it will create a new folder for us

1. Type the git command `git clone` then paste in the link to your repo that we just copied.
   - <details><summary>Example:</summary><p>
   
      ![](https://i.imgur.com/LMLInUS.png)
      
      </p></details>

1. Then that's it! Type `ls` to see your folder's contents. Your new repo should be there. Navigate inside the repo then type `ls` and confirm that you have a README.md file.

1. Go ahead and open the `README.md` in your text editor (Bonus! Do it from the command line!). You can write plain text in a markdown file. So you can send yourself a message! If you don't know what to write, go with a classic `Hello World!`, save this file.

1. In terminal type `git status`. It should say you have some files to track, so let's do that

1. `git add .` to add your file to be staged - this will tell git that you'd like to track this file's changes

   - <details><summary><strong>Note!</strong></summary><p>
   
      `git add .` adds everything in the _current directory_, including directories inside this directory. It's like a waterfall. It will never add files _above_ where you are in terminal.
        
       ![](https://imgur.com/m1JJUTP.png)

1. `git commit -m 'my first commit'` - this will take a 'snapshot of your file' and have a message attatched to it

1. `git push origin master` - this should send your changes to your github repo

1. Go back to the browser, refresh, you should see your updated readme!

1. Back in terminal type `git status` - it should now say there is nothing to commit

1. We can remind ourselves where we sent our work, type `git remote -v`

This will show you the name of the remote, by default it is called `origin`. Rather than typing `https://github.com/stuff/morestuff/blahblablah` every single time you want to connect with your repo, you just type `origin` instead - less typing = working smarter, not harder!

You'll also see the branch name, by default `master`, you can have many branches and their utility is amazing! In fact it is the branching of git that makes it a top choice. But for today, we'll just work with our master branch.

Now that we've done the first way, let's make another repo using the second method!

###  2: Making a local folder, turning it into a git repo, pushing it up to Github

1. Navigate to the folder where you're keeping the files for this lesson. Likely, you just need to `cd ..` back to the `git-lab` folder's root.

   - **IMPORTANT NOTE:** Do not initialize a git repository inside of another git repository, do not make your root directory of your computer a git repository - this will confuse git and you won't be able to track or even open your files on github. Additionally, making  your entire computer a git repository can siginficantly slow down your entire computer.

   ![](https://imgur.com/Jrkqi69.png)
   
1. Create a new folder called `git-practice-two` inside `git-lab` - again, make sure you are NOT inside the git repo you created earlier (`git-practice-one`) 

1. Navigate inside the new folder we just made `git-practice-two` and type `git status` (you should get an error). We need to ask git to track this folder, so let's tell it to do so.

   - <details><summary><strong>Error example</strong></summary><p>
        
       ![](https://i.imgur.com/VVcpaLL.png)

     </p></details>

1. Inside this folder, run the command `git init` (this tells git to make this folder a git repo). Type `git status` to see that there is no longer that original error. You should get a message that says you have nothing to commit 
   - <details><summary><strong>Example</strong></summary><p>
        
       ![](https://i.imgur.com/XzGvkYU.png)

     </p></details>

1. `touch README.md`

1. Open up the repo inside your text editor then type some text into the README and save the file

1. In terminal, `git add README.md`, `git commit -m 'first commit'`

1. We now have a local git repo, but we have to create a repo on Github and connect it. Go to https://github.com/ and log in if you're not logged in already.

1. Create a new Github repo. Let's give it the name `git-practice-two` (note that this is the same as our local file, but it does not have to be for it to work).

1. **Do not** initialize a README (we already made it on our own in our local repo!). Then create the repo

1. A new page in github will appear with instructions. We'll follow them. Note - with bash commands you have to enter them one at a time.
   - <details><summary><strong>Example</strong></summary><p>
        
       ![](https://i.imgur.com/fm2qCJI.png)

     </p></details>

1. Copy the first line

    ![](https://i.imgur.com/2u2yJ7A.png)

1. Back in the command line, type in `git remote add origin` and then paste the git repo link you just copied

1. Confirm that you have the remote created by running the command `git remote -v`, you should see the URL you added. If you see nothing, then something went wrong.

1. Grab the second bash command from github, it should be something like `git push -u origin master`

1. Go back to Github and refresh your page. Your README file should now be pushed up from your local repo to your Github repo!

## Making Changes

Now that we've made github repos, let's go ahead and make some changes to them! For now, let's just work inside the second repo we created, `git-practice-two`. 

Similar to how there are two different ways to create repos, there are also two different ways you can make changes to your github repo. 

   - You can make changes directly on GitHub itself in the browser
   - You can make changes locally on your computer 

So let's cover both! 

### 1: Making changes on Github itself 

1. Let's just keep editing our `README.md`, click on the file so that it opens up 

![](https://i.imgur.com/u0imIaY.png)

1. To edit the file directly on GitHub, click on the pencil button to edit the file 

![](https://i.imgur.com/MuhGZpi.png)

1. Edit the file, add whatever text you want and then click the `Commit changes` button at the bottom 

![](https://i.imgur.com/Mlg6H2T.png) 

1. Cool! You made a change on GitHub, but now that change isn't on your local version of the repo. Let's fix that 

1. Back in the command line, make sure you're still inside the `git-practice-two` repo, then type in `git pull origin master` so that we can pull our changes down 

1. Check you `README.md` file in atom, you should see the changes that you made there! 

Now, let's go ahead and try the second way 

### 2: Making changes locally 

This is the way you'll mostly be making changes to your repo, on your computer first, then pushing the changes up to the browser version of the repo. 

1. You should already have the `git-practice-two README.md` file open in atom, so let's just keep making changes to this file 

1. Type in whatever you want inside the README and save it 

1. In the command line, type in `git status`, it should tell you that you have untracked files

1. To track the files, do a `git add .` and a `git commit -m "updating read me"` 

1. Now that our files are tracked, we can push our changes up to the browser version of the repo by typing `git push origin master` 

1. Check the browser version of the repo, and you should be able to see your changes in the README! :tada:
