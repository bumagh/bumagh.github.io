import{_ as s,o as a,c as e,Q as o}from"./chunks/framework.bf7c2cc3.js";const u=JSON.parse('{"title":"git rep","description":"","frontmatter":{},"headers":[],"relativePath":"tty-work/sway.md","filePath":"tty-work/sway.md"}'),p={name:"tty-work/sway.md"},t=o('<h1 id="git-rep" tabindex="-1">git rep <a class="header-anchor" href="#git-rep" aria-label="Permalink to &quot;git rep&quot;">​</a></h1><p><a href="mailto:git@github.com" target="_blank" rel="noreferrer">git@github.com</a>:bumagh/bumagh.github.io.git</p><h1 id="installing-packages" tabindex="-1">Installing packages <a class="header-anchor" href="#installing-packages" aria-label="Permalink to &quot;Installing packages&quot;">​</a></h1><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">alacritty</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">light</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sway</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">swaybg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">swayidle</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">swayimg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">swaylock</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">waybar</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">wofi</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fonts-font-awesome</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">alacritty</span><span style="color:#24292E;"> </span><span style="color:#032F62;">light</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sway</span><span style="color:#24292E;"> </span><span style="color:#032F62;">swaybg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">swayidle</span><span style="color:#24292E;"> </span><span style="color:#032F62;">swayimg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">swaylock</span><span style="color:#24292E;"> </span><span style="color:#032F62;">waybar</span><span style="color:#24292E;"> </span><span style="color:#032F62;">wofi</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fonts-font-awesome</span></span></code></pre></div><h1 id="required-directories" tabindex="-1">Required Directories <a class="header-anchor" href="#required-directories" aria-label="Permalink to &quot;Required Directories&quot;">​</a></h1><p>mkdir -p ~/.config/sway ~/.config/waybar ~/.config/wofi</p><h1 id="ensure-the-scripts-are-all-executable" tabindex="-1">Ensure the scripts are all executable: <a class="header-anchor" href="#ensure-the-scripts-are-all-executable" aria-label="Permalink to &quot;Ensure the scripts are all executable:&quot;">​</a></h1><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">chmod</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.config/sway/</span><span style="color:#79B8FF;">*</span><span style="color:#9ECBFF;">.sh</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">chmod</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.config/sway/</span><span style="color:#005CC5;">*</span><span style="color:#032F62;">.sh</span></span></code></pre></div><h1 id="keyboard-shortcuts" tabindex="-1">keyboard shortcuts <a class="header-anchor" href="#keyboard-shortcuts" aria-label="Permalink to &quot;keyboard shortcuts&quot;">​</a></h1><p>(Shift, Super) q: Quit active app</p><p>(Shift, Super) e: Exit sway itself</p><p>(Super) t: Open a terminal</p><p>(Super) space: Application launcher</p><p>(Super) escape: Lock the screen</p><p>(Super) any arrow key: Move focus to another app/quadrant</p><p>(Shift, Super) any arrow key: Move the active window in the direction of the arrow you pressed</p><p>(Super) r: Resize the active window</p><p>(Super) any number: Switch to that numbered workspace</p><p>(Shift, Super) f: Toggle floating mode</p><p>(Super) s: Create a stack</p>',20),n=[t];function l(r,c,i,y,h,d){return a(),e("div",null,n)}const g=s(p,[["render",l]]);export{u as __pageData,g as default};