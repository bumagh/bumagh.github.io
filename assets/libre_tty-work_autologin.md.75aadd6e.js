import{_ as s,o as a,c as t,Q as e}from"./chunks/framework.1c8de9a3.js";const E=JSON.parse('{"title":"bash_profile","description":"","frontmatter":{},"headers":[],"relativePath":"libre/tty-work/autologin.md","filePath":"libre/tty-work/autologin.md"}'),l={name:"libre/tty-work/autologin.md"},o=e(`<h1 id="bash-profile" tabindex="-1">bash_profile <a class="header-anchor" href="#bash-profile" aria-label="Permalink to &quot;bash_profile&quot;">​</a></h1><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># automatically login into sway</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> [ </span><span style="color:#F97583;">-z</span><span style="color:#E1E4E8;"> $DISPLAY ] &amp;&amp; [ </span><span style="color:#9ECBFF;">&quot;$(</span><span style="color:#B392F0;">tty</span><span style="color:#9ECBFF;">)&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;/dev/tty1&quot;</span><span style="color:#E1E4E8;"> ]; </span><span style="color:#F97583;">then</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">exec</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sway</span></span>
<span class="line"><span style="color:#F97583;">fi</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># automatically login into sway</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> [ </span><span style="color:#D73A49;">-z</span><span style="color:#24292E;"> $DISPLAY ] &amp;&amp; [ </span><span style="color:#032F62;">&quot;$(</span><span style="color:#6F42C1;">tty</span><span style="color:#032F62;">)&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;/dev/tty1&quot;</span><span style="color:#24292E;"> ]; </span><span style="color:#D73A49;">then</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">exec</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sway</span></span>
<span class="line"><span style="color:#D73A49;">fi</span></span></code></pre></div><h1 id="systemctl-edit-getty-tty1" tabindex="-1">systemctl edit getty@tty1 <a class="header-anchor" href="#systemctl-edit-getty-tty1" aria-label="Permalink to &quot;systemctl edit getty@tty1&quot;">​</a></h1><p>[Service] ExecStart= ExecStart=-/sbin/agetty --autologin $username --noclear %I $TERM</p><h1 id="systemctl-set-default-multi-user-target" tabindex="-1">systemctl set-default multi-user.target <a class="header-anchor" href="#systemctl-set-default-multi-user-target" aria-label="Permalink to &quot;systemctl set-default multi-user.target&quot;">​</a></h1><h1 id="systemctl-set-default-graphical-target" tabindex="-1">systemctl set-default graphical.target <a class="header-anchor" href="#systemctl-set-default-graphical-target" aria-label="Permalink to &quot;systemctl set-default graphical.target&quot;">​</a></h1><p>此步骤是可选 的。如果您不想看到 GRUB 引导 每次计算机启动时的屏幕，请打开 /etc/default/grub 作为 root，然后更改 GRUB_TIMEOUT 到小于 5 的东西。我将其设置为 1。</p><p>... GRUB_TIMEOUT=1 ...</p><p>然后继续应用更改</p><p>sudo update-grub</p><p>重启并享受！如果你把 0 对于超时，按 这 Shift 键（用于 BIOS）或 Esc 键（用于 UEFI） 当系统启动时，将调出 GRUB 菜单。</p><p>快乐黑客，祝你有美好的一天！</p>`,12),n=[o];function p(r,c,i,y,u,d){return a(),t("div",null,n)}const m=s(l,[["render",p]]);export{E as __pageData,m as default};