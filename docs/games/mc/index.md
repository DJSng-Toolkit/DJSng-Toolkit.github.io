---
title: Minecraft
---

# Minecraft

A maximalist approach on [TheUsefulLists](https://github.com/TheUsefulLists/UsefulMods) with a bunch of tools, mods, websites and other utilities, all personally curated with better compatibility notes, and specific sub-version mod configs. **This is not a replacement for existing lists**, you should still turn to other lists to back up sources.  

Toolkit is mainly based on personal experience.

::: warning
Toolkit is constantly being updated and may contain documentation that is inaccurate, untested, or otherwise irrelevant. YMMV.  
I have attempted to label mods that may do nothing for users best I can. You should still benchmark your shit in between changes.
:::

# Disclaimer
Mods are tested to the best of my ability to ensure that they are not malicious or infected, I try my best to check mods myself before adding them to this repo. I cannot be held responsibile if you are infected with anything on this list, I cannot check every single update manually. You should check mods on your own time using provided file hashes, extracting the file contents, or whatever means you see fit.  

## Modding resources
Note that these are all per game version, as each version has its own preferences.  
**All entries here are styled in tables** like TheUsefulLists, even though the rest of the page uses a FMHY style. This is intentional.

| Version | Page |
| --- | --- |
|  | *Links to page* |
| 1.21.x | [🔃 Actively maintained, one version incomplete](versions/21/index.md) |
| 1.20.x | [⚠ Work in Progress](versions/20/index.md) |
| 1.19.x | [🚧 Work in Progress](versions/19/index.md) |
| 1.18.2 | [🚧 Work in Progress](versions/18/2/index.md) |
| 1.17.1 | [🚧 Work in Progress](versions/17/1/index.md) |
| 1.16.5 | [🚧 Work in Progress](versions/16/5/index.md) |
| 1.12.2 | [⚠ Work in Progress](versions/12/2/index.md) |
| 1.8.9 | [✅ Forge only](versions/8/9/index.md) |
| 1.7.10 | [✅ Forge only](versions/7/10/index.md) |
| 1.6.4 | [✅ Available](versions/6/4/index.md) |
| 1.5.2 | [✅ Available](versions/5/2/index.md) |

## Mod 'Avoid' list
### Config specific cases
(e.g. Safe in most cases)  

| Name | Incompatibilities | Version | Client / Server | Notes |
| --- | :---: | :---: | :---: | :---: |
| [Reese's Sodium Options](https://modrinth.com/mod/reeses-sodium-options) | Non-sodium rendering engines | 1.16.5+ | Client | **For 90% of configs, it's safe to install this mod**, but it should be noticed that I've experienced crashes on a couple of configs, most noticably 1.20.1 on Fabric. Be careful! |


### Actually avoid these
| Name | Incompatibilities | Version | Client / Server | Notes |
| --- | :---: | :---: | :---: | :---: |
| [OptiFine](https://optifine.net) | Several mods | b1.7.3+ (except 1.21.5) | Client | Poor mod compatibility, weak optimizations, closed source, among many other reasons. **Only recommended for non-1.7 and non-1.15+ uses.** |
| [Fastload](https://modrinth.com/mod/fastload) | Unknown | 1.18.x - 1.20.1 | Both | It's safer than Kyxsis at the cost of being unstable. I've had poor experiences with this mod. Also, since 25w31a, you no longer need this mod because of changes to chunk loading. |
| [FPS to the Trash](https://modrinth.com/mod/fps-to-the-trash) | VulkanMod | 1.15+ | Client | Doesn't actually optimize the game, just tosses frames the monitor can't see. |

## Version unspecific resources
### Launchers
#### Modding Launchers
(a.k.a. "modded launchers", "modpack launchers", "what you probably want")  

| Name | Description | Author | Notes |
| --- | :---: | :---: | :---: |
| [🏆 Prism Launcher](https://prismlauncher.org/) | An open source Minecraft launcher with the ability to manage multiple instances, accounts and mods. Focused on user freedom and free redistributability. | Prism Launcher team (& contributors) | This is my personal favorite launcher, it might be a bit much to look at for beginners, [Prism themselves have a guide](https://prismlauncher.org/wiki/getting-started/) you could try looking at. Great for people who liked MultiMC but want more management *on top* of MultiMC's wonders. |
| [⭐ Modrinth App](https://modrinth.com/app) | The Modrinth App is a unique, open source launcher that allows you to play your favorite mods, and keep them up to date, all in one neat little package. | Modrinth | I've not used it myself, but I've heard from many people that Modrinth's own launcher (called Modrinth App) is considered an amazing option for beginners. |
| [⭐ ATLauncher](https://atlauncher.com) | ATLauncher is a simple and easy to use Minecraft Launcher which contains 154 modpacks for you to choose from, as well as the ability to browse and install packs from other platforms including CurseForge, Modrinth and Technic. | RyanTheAlmighty | ATLauncher is a solid mod management launcher with minimal issues in most cases. It swaps out the MultiMC based UI and some fancy stuff for Server management and creation. |
| [GDLauncher](https://gdlauncher.com/) | GDLauncher Carbon is a simple, yet powerful Minecraft custom launcher with a strong focus on the user experience  | Gorilla Devs | Legacy branch is deprecated. Carbon is their new launcher, but it has ads and you have to pay to remove them. You could try [this fork](https://github.com/Official-Husko/GDLauncher-Carbon-adless) which doesn't have them (at your own risk, of course). |
| [MultiMC](https://multimc.org/) | MultiMC is an alternative launcher for Minecraft. It allows you to have multiple, cleanly separated instances of Minecraft (each with their own mods, resource packs, saves, etc) and helps you manage them and their associated options with a simple and powerful interface. | MultiMC team | Originally a GOAT of the Minecraft launcher space, but Prism outdoes MultIMC nowadays as Prism manages more instance stuff that MultiMC makes you do manually. |

#### Clients and Client Launchers
(a.k.a. "strictpacks" (as described in [my old client rant](https://rentry.co/mclients)))    
You should still use alternative mods for [Lunar](https://microcontrollersdev.github.io/Alternatives/latest/lunar/) and [Feather](https://microcontrollersdev.github.io/Alternatives/latest/feather/)'s features where possible.  

| Name | Description | Author | Notes |
| --- | :---: | :---: | :---: |
| [⭐ SkyClient](https://skyclient.co/) | An open installer to help you get all of the assets you need for Hypixel. | SkyClient team | 1.8.9 client based on Forge that's mainly intended for Hypixel users, however if all you play is 1.8 and you don't need anything else, Skyclient might be worth a look. |
| [✨LabyMod](https://www.labymod.net/en) | Upgrade your Minecraft client experience to the next level. | LabyMod team | Labymod is a cool alternative to Lunar. It has a launcher for those who want something to be "launched" like Lunar but also has options for Prism users like myself, and can be installed as a mod in most cases. |
| [Axolotl Client](https://modrinth.com/mod/axolotlclient) | The most configurable HUD mod combined with everything else you might need to play - Your mod for the optimal PvP experience. | AxolotlClient team | AxolotlClient is a cool client mod for mod users. It might be too barebones for some, but it's a really cool alternative. |
| [Lunar Client](https://www.lunarclient.com/) | A modpack for all modern versions of Minecraft! | Lunar Team | Really ironic I put this here. It's an okay choice if you don't care about any capacity about modding or anything, but it's listed on Sodium's Supported Launcher list of "Launchers with known issues" list, so you should probably look for something else. | 

### Modpacks
#### Vanilla compatible
| Name | Description | Author | Notes |
| --- | :---: | :---: | :---: |
| [🏆 Simply Optimized](https://modrinth.com/modpack/sop) | The leading, well-researched optimization modpack with a focus on pure performance. | HyperSoup | Community favorite, I think. They bundle their own fork of ModernFix with every version! |
| [⭐ Adrenaline](https://modrinth.com/modpack/adrenaline) | Leading, lightweight, and unbiased performance modpack with no QoL features  | SkywardMC | Good alternative to Simply Optimized that I prefer over Simply Optimized |

#### Vanilla+
(not Vanilla compatible)   

    
| Name | Description | Author | Notes |
| --- | :---: | :---: | :---: |

#### Modded
| Name | Description | Author | Notes |
| --- | :---: | :---: | :---: |

### websites
This has been moved to [DJSng's Resources](/library.md).


<!-- TODO secret page
so these mods are compatible with these versions and need to be added


*** FORGE ***
https://modrinth.com/mod/starlight-forge - 1.17.1, 1.18.2, 1.19.x (except 1.19.4), 1.20-1.20.2

-->
