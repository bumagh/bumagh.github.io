import{_ as a,o as e,c as s,k as o,a as t,Q as n}from"./chunks/framework.bf7c2cc3.js";const q=JSON.parse('{"title":"如何显示电池电量百分比","description":"","frontmatter":{},"headers":[],"relativePath":"akgstudio/akgphone/pmos/sxmo/basic_config.md","filePath":"akgstudio/akgphone/pmos/sxmo/basic_config.md"}'),r={name:"akgstudio/akgphone/pmos/sxmo/basic_config.md"},i=o("h1",{id:"如何显示电池电量百分比",tabindex:"-1"},[t("如何显示电池电量百分比 "),o("a",{class:"header-anchor",href:"#如何显示电池电量百分比","aria-label":'Permalink to "如何显示电池电量百分比"'},"​")],-1),c=o("p",null,"export SXMO_BAR_SHOW_BAT_PER=1 在~/.config/sxmo/profile ${alignc}${font goto:size=22:style=Bold}${exec echo \"功率： \"}${exec upower -d | grep -m1 '百分比：' | awk '{print $2}'} 在~/.config/sxmo/conky.conf",-1),p=o("h1",{id:"将-sxmo-的栏移到手机的凹槽下方",tabindex:"-1"},[t("将 sxmo 的栏移到手机的凹槽下方 "),o("a",{class:"header-anchor",href:"#将-sxmo-的栏移到手机的凹槽下方","aria-label":'Permalink to "将 sxmo 的栏移到手机的凹槽下方"'},"​")],-1),h=o("p",null,"找到栏目入口，~/.config/sxmo/sway并添加间隙配置。",-1),_=o("p",{gaps:"",42:"",0:""},"bar",-1),l=n("",11),m=[i,c,p,h,_,l];function d(f,u,g,x,b,k){return e(),s("div",null,m)}const y=a(r,[["render",d]]);export{q as __pageData,y as default};