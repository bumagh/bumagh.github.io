import{_ as t,o,c as e,Q as a}from"./chunks/framework.bf7c2cc3.js";const _=JSON.parse('{"title":"备份文件到指定目录","description":"","frontmatter":{},"headers":[],"relativePath":"vpn/glinet.md","filePath":"vpn/glinet.md"}'),n={name:"vpn/glinet.md"},s=a('<p>谢谢博主，实测在4.5.16版本固件上显示隐藏菜单成功，具体步骤,</p><p>按照帖子要求先进行分区解锁 echo &quot;US&quot; | dd of=/dev/mtdblock3 bs=1 seek=136 sync 覆盖中文语言选项（可选） cd /www/i18n</p><h1 id="备份文件到指定目录" tabindex="-1">备份文件到指定目录 <a class="header-anchor" href="#备份文件到指定目录" aria-label="Permalink to &quot;备份文件到指定目录&quot;">​</a></h1><p>mkdir zh-cn-bak find ./ -maxdepth 1 -type f -name &quot;*zh-cn.json&quot; -exec cp {} ./zh-cn-bak ;</p><h1 id="批量改名" tabindex="-1">批量改名 <a class="header-anchor" href="#批量改名" aria-label="Permalink to &quot;批量改名&quot;">​</a></h1><p>ls -1 | grep &quot;zh-cn.json&quot; | awk -F &#39;.zh-cn.json&#39; &#39;{print &quot;mv&quot;,$0,$1&quot;.zh-cn.json-bak&quot;}&#39; | bash ls -1 | grep &quot;zh-tw.json&quot; | awk -F &#39;.zh-tw.json&#39; &#39;{print &quot;cp&quot;,$0,$1&quot;.zh-cn.json&quot;}&#39; | bash</p><h1 id="恢复方法" tabindex="-1">恢复方法 <a class="header-anchor" href="#恢复方法" aria-label="Permalink to &quot;恢复方法&quot;">​</a></h1><p>find ./ -maxdepth 1 -type f -name &quot;*.zh-cn.json&quot; -exec mv {} /tmp ; ls -1 | grep &quot;zh-cn.json-bak&quot; | awk -F &#39;.zh-cn.json-bak&#39; &#39;{print &quot;mv&quot;,$0,$1&quot;.zh-cn.json&quot;}&#39; | bash 重启设备后设置语言为繁体中文（不重置也行，重启后切换繁体就出现隐藏的菜单了）</p>',8),c=[s];function r(h,p,i,u,d,q){return o(),e("div",null,c)}const m=t(n,[["render",r]]);export{_ as __pageData,m as default};