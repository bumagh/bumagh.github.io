import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.1c8de9a3.js";const C=JSON.parse('{"title":"bash","description":"","frontmatter":{},"headers":[],"relativePath":"ubuntu/https-local.md","filePath":"ubuntu/https-local.md"}'),e={name:"ubuntu/https-local.md"},p=l(`<h1 id="bash" tabindex="-1">bash <a class="header-anchor" href="#bash" aria-label="Permalink to &quot;bash&quot;">​</a></h1><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">openssl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">genrsa</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-out</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">server.key</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2048</span></span>
<span class="line"><span style="color:#B392F0;">openssl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">req</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-key</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">server.key</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-out</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">server.csr</span></span>
<span class="line"><span style="color:#B392F0;">openssl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">x509</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-req</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-days</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3650</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-in</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">server.csr</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-signkey</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">server.key</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-out</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">server.crt</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">openssl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">genrsa</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-out</span><span style="color:#24292E;"> </span><span style="color:#032F62;">server.key</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2048</span></span>
<span class="line"><span style="color:#6F42C1;">openssl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">req</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-key</span><span style="color:#24292E;"> </span><span style="color:#032F62;">server.key</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-out</span><span style="color:#24292E;"> </span><span style="color:#032F62;">server.csr</span></span>
<span class="line"><span style="color:#6F42C1;">openssl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">x509</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-req</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-days</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3650</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-in</span><span style="color:#24292E;"> </span><span style="color:#032F62;">server.csr</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-signkey</span><span style="color:#24292E;"> </span><span style="color:#032F62;">server.key</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-out</span><span style="color:#24292E;"> </span><span style="color:#032F62;">server.crt</span></span></code></pre></div><div class="language-conf vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">listen 443 ssl;</span></span>
<span class="line"><span style="color:#e1e4e8;">    ssl_certificate /etc/nginx/server.crt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    ssl_certificate_key /etc/nginx/server.key;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">listen 443 ssl;</span></span>
<span class="line"><span style="color:#24292e;">    ssl_certificate /etc/nginx/server.crt;</span></span>
<span class="line"><span style="color:#24292e;">    ssl_certificate_key /etc/nginx/server.key;</span></span></code></pre></div>`,3),o=[p];function t(r,c,y,E,i,F){return a(),n("div",null,o)}const h=s(e,[["render",t]]);export{C as __pageData,h as default};