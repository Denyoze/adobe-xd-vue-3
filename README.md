![adobe-xd-vue-3](https://raw.githubusercontent.com/Denyoze/adobe-xd-vue-3/master/readme/vue-adobe-xd.png)
# Adobe XD plugin starter template (Vue 3)

## Directories
* ```src``` - source code with the main.js file + Vue files
* ```readme``` - readme miscellaneous files
* ```public``` - ```index.html``` lives here
* ```plugin``` - UXP manifest file and icons here

## How to start
1. ```yarn``` - install all packages
2. ```yarn build``` - build 
3. Add ```manifest.json``` from the ```dist``` folder to Adobe UXP Developer Tool (Add Plugin -> Select manifest.json)
4. Open Adobe XD
5. Load plugin (from Adobe UXP Developer Tool)
6. Write your plugin code

## Before the release
1. Check dependencies (maybe you can reduce their count)
2. Put your ```id``` of the plugin into ```manifest.json``` (plugin/manifest.json)
3. Change icons (plugin/icons)

### Misc info
> **Logotypes copyrights**
> The rights to the original Adobe XD and Vue logos belong to their owners