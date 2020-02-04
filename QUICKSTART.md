
# University of Arizona (UArizona) Coding Boot Camp

#### February 2020 Cohort 

-----------------------------------------

# Quickstart Guide

- Collaborative effort by many instructional staff.

## Windows

### Google Chrome

Google Chrome is the recommended web browser for the class, and in-general development. It can be downloaded [here.](https://www.google.com/chrome/)

### Git 

Git is the most common source control in the industry, and a fundamental skill. It can be installed [here.](https://git-scm.com/) 

The important check boxes are: 

![Git Settings](/docs/images/git.png)

The important part is the Windows Explorer integration! This will allow for you to open up Git Bash in Explorer, which is very important. 

### IDE

The class uses and recommends using Visual Studio Code, downloadable [here.](https://code.visualstudio.com/download)

Should you wish to, you are free to use other editors such as IDEA or Sublime. However, the class will be delivered in VS Code, so as such, it's highly recommended. 

You will want to set your settings up as such: 

![VS Code Settings](/docs/images/vscode.png)

### Node.js

Next, you will want to install Node.js. The 'recommended for most users', as seen here, is the option you want to install. 

![Node Buttons](/docs/images/nodeinstall.png)

Next, go through the installation steps, accepting the license and default location, unless you wish to change it. However, the next step is very important. 

![Node Settings](/docs/images/nodesettings.png)

Make sure that the 'Add to Path' is enabled. It should be the same icon as the above three settings; however, if you don't do this, we will have to do some environmental configuration which isn't fun. 

Next, select automatically install necessary tools on the next screen. Then install Node.js!

### MongoDB

### MySQL 

### Heroku


### Final Configuration

##### Integrating Git Bash for VS Code

This is very important! Powershell, the default console on Windows 10 devices, is not ideal for development. The vast majority of jobs and such will use linux-style commands, such as Git Bash. Thus, we want VS Code to use Git Bash!

Open up VS Code's Settings by clicking on the gear icon in the lower left corner of the screen, and then selecting settings. 

![VS Code Settings](/docs/images/settingssteps.png)

This will open up the following screen: 

![VS Code Settings](/docs/images/settingsscreen.png)

Into that search bar, type in: 'windows exec' as shown below

![VS Code Settings](/docs/images/vscodesearchsettings.png)

The 2 there highlights the field we need to change, the 'Terminal > External: Windows Exec' setting. We need to change that default terminal to the Git Bash .exe location, usually: 

C:\Program Files\Git\bin\bash.exe

![VS Code Settings](/docs/images/finalsettings.png)

Test this by opening the Terminal, it should look like the Git Bash window. If you got command prompt, restart VS Code and try again.


