import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.1c8de9a3.js";const h=JSON.parse('{"title":"coc.nvim","description":"","frontmatter":{},"headers":[],"relativePath":"tty-work/c-dev-shortcuts.md","filePath":"tty-work/c-dev-shortcuts.md"}'),p={name:"tty-work/c-dev-shortcuts.md"},o=l(`<h1 id="coc-nvim" tabindex="-1">coc.nvim <a class="header-anchor" href="#coc-nvim" aria-label="Permalink to &quot;coc.nvim&quot;">​</a></h1><h2 id="go-definition-and-go-back" tabindex="-1">go definition and go back <a class="header-anchor" href="#go-definition-and-go-back" aria-label="Permalink to &quot;go definition and go back&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">gd</span></span>
<span class="line"><span style="color:#B392F0;">ctrl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">o</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">gd</span></span>
<span class="line"><span style="color:#6F42C1;">ctrl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">o</span></span></code></pre></div><h1 id="nerd-commenter" tabindex="-1">nerd commenter <a class="header-anchor" href="#nerd-commenter" aria-label="Permalink to &quot;nerd commenter&quot;">​</a></h1><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//cc</span></span>
<span class="line"><span style="color:#6A737D;">    /*int a = 0;*/</span></span>
<span class="line"><span style="color:#6A737D;">    /*int a = 0;*/</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//cn</span></span>
<span class="line"><span style="color:#6A737D;">    /*int a = 0;*/</span></span>
<span class="line"><span style="color:#6A737D;">    /*int a = 0;*/</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//c&lt;space&gt;  //toggle</span></span>
<span class="line"><span style="color:#6A737D;">    /*int a = 0;*/</span></span>
<span class="line"><span style="color:#6A737D;">    /*int a = 0;*/</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//cm</span></span>
<span class="line"><span style="color:#6A737D;">    /*int a = 0;</span></span>
<span class="line"><span style="color:#6A737D;">    int a = 0;*/</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">(){</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//cc</span></span>
<span class="line"><span style="color:#6A737D;">    /*int a = 0;*/</span></span>
<span class="line"><span style="color:#6A737D;">    /*int a = 0;*/</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//cn</span></span>
<span class="line"><span style="color:#6A737D;">    /*int a = 0;*/</span></span>
<span class="line"><span style="color:#6A737D;">    /*int a = 0;*/</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//c&lt;space&gt;  //toggle</span></span>
<span class="line"><span style="color:#6A737D;">    /*int a = 0;*/</span></span>
<span class="line"><span style="color:#6A737D;">    /*int a = 0;*/</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//cm</span></span>
<span class="line"><span style="color:#6A737D;">    /*int a = 0;</span></span>
<span class="line"><span style="color:#6A737D;">    int a = 0;*/</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="uncomment" tabindex="-1">uncomment <a class="header-anchor" href="#uncomment" aria-label="Permalink to &quot;uncomment&quot;">​</a></h2><p>leader cu</p><h2 id="commenct-every-line" tabindex="-1">commenct every line <a class="header-anchor" href="#commenct-every-line" aria-label="Permalink to &quot;commenct every line&quot;">​</a></h2><p>leader cc /**** abc <em>/ /</em> def */</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2>`,10),e=[o];function c(t,r,y,E,i,d){return n(),a("div",null,e)}const m=s(p,[["render",c]]);export{h as __pageData,m as default};