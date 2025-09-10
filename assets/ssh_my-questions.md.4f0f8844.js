import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.1c8de9a3.js";const u=JSON.parse('{"title":"port 22: Connection refused","description":"","frontmatter":{},"headers":[],"relativePath":"ssh/my-questions.md","filePath":"ssh/my-questions.md"}'),e={name:"ssh/my-questions.md"},p=l(`<h1 id="port-22-connection-refused" tabindex="-1">port 22: Connection refused <a class="header-anchor" href="#port-22-connection-refused" aria-label="Permalink to &quot;port 22: Connection refused&quot;">​</a></h1><p>ssh文件夹下没有sshd_config,只安装了客户端，没有安装服务端</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">openssh-server</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#032F62;">openssh-server</span></span></code></pre></div><h1 id="raw-githubusercontent-com-connection-refused" tabindex="-1">raw.githubusercontent.com connection refused <a class="header-anchor" href="#raw-githubusercontent-com-connection-refused" aria-label="Permalink to &quot;raw.githubusercontent.com connection refused&quot;">​</a></h1><p><a href="https://www.ipaddress.com/" target="_blank" rel="noreferrer">https://www.ipaddress.com/</a> 查询raw.githubusercontent.com的ip地址 编辑hosts</p><h1 id="git-22-port-timeout" tabindex="-1">git 22 port timeout <a class="header-anchor" href="#git-22-port-timeout" aria-label="Permalink to &quot;git 22 port timeout&quot;">​</a></h1><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ssh-ed25519</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">AAAAC3NzaC1lZDI1NTE5AAAAIMTkjvczUYViarteT2nDHEWJixTkBwVYFGAFpSKCImqk</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">g@g-Aspire-One-522</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ssh-ed25519</span><span style="color:#24292E;"> </span><span style="color:#032F62;">AAAAC3NzaC1lZDI1NTE5AAAAIMTkjvczUYViarteT2nDHEWJixTkBwVYFGAFpSKCImqk</span><span style="color:#24292E;"> </span><span style="color:#032F62;">g@g-Aspire-One-522</span></span></code></pre></div><p>$ vim ~/.ssh/config</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># Add section below to it</span></span>
<span class="line"><span style="color:#e1e4e8;">Host github.com</span></span>
<span class="line"><span style="color:#e1e4e8;">  Hostname ssh.github.com</span></span>
<span class="line"><span style="color:#e1e4e8;">  Port 443</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># Add section below to it</span></span>
<span class="line"><span style="color:#24292e;">Host github.com</span></span>
<span class="line"><span style="color:#24292e;">  Hostname ssh.github.com</span></span>
<span class="line"><span style="color:#24292e;">  Port 443</span></span></code></pre></div><h1 id="密钥不生效" tabindex="-1">密钥不生效 <a class="header-anchor" href="#密钥不生效" aria-label="Permalink to &quot;密钥不生效&quot;">​</a></h1><p>关闭PAM</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">UsePAM</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">no</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">UsePAM</span><span style="color:#24292E;"> </span><span style="color:#032F62;">no</span></span></code></pre></div><p>下面是完整的参考配置 修改完以后</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sshd</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restart</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sshd</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#Port 22</span></span>
<span class="line"><span style="color:#6A737D;">#AddressFamily any</span></span>
<span class="line"><span style="color:#6A737D;">#ListenAddress 0.0.0.0</span></span>
<span class="line"><span style="color:#6A737D;">#ListenAddress ::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#HostKey /etc/ssh/ssh_host_rsa_key</span></span>
<span class="line"><span style="color:#6A737D;">#HostKey /etc/ssh/ssh_host_ecdsa_key</span></span>
<span class="line"><span style="color:#6A737D;">#HostKey /etc/ssh/ssh_host_ed25519_key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Ciphers and keying</span></span>
<span class="line"><span style="color:#6A737D;">#RekeyLimit default none</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Logging</span></span>
<span class="line"><span style="color:#6A737D;">#SyslogFacility AUTH</span></span>
<span class="line"><span style="color:#6A737D;">#LogLevel INFO</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Authentication:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#LoginGraceTime 2m</span></span>
<span class="line"><span style="color:#B392F0;">PermitRootLogin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yes</span></span>
<span class="line"><span style="color:#6A737D;">#StrictModes yes</span></span>
<span class="line"><span style="color:#6A737D;">#MaxAuthTries 6</span></span>
<span class="line"><span style="color:#6A737D;">#MaxSessions 10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">PubkeyAuthentication</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Expect .ssh/authorized_keys2 to be disregarded by default in future.</span></span>
<span class="line"><span style="color:#B392F0;">AuthorizedKeysFile</span><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">.ssh/authorized_keys</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#AuthorizedPrincipalsFile none</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#AuthorizedKeysCommand none</span></span>
<span class="line"><span style="color:#6A737D;">#AuthorizedKeysCommandUser nobody</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># For this to work you will also need host keys in /etc/ssh/ssh_known_hosts</span></span>
<span class="line"><span style="color:#6A737D;">#HostbasedAuthentication no</span></span>
<span class="line"><span style="color:#6A737D;"># Change to yes if you don&#39;t trust ~/.ssh/known_hosts for</span></span>
<span class="line"><span style="color:#6A737D;"># HostbasedAuthentication</span></span>
<span class="line"><span style="color:#6A737D;">#IgnoreUserKnownHosts no</span></span>
<span class="line"><span style="color:#6A737D;"># Don&#39;t read the user&#39;s ~/.rhosts and ~/.shosts files</span></span>
<span class="line"><span style="color:#6A737D;">#IgnoreRhosts yes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># To disable tunneled clear text passwords, change to no here!</span></span>
<span class="line"><span style="color:#6A737D;">#PasswordAuthentication yes</span></span>
<span class="line"><span style="color:#6A737D;">#PermitEmptyPasswords no</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Change to yes to enable challenge-response passwords (beware issues with</span></span>
<span class="line"><span style="color:#6A737D;"># some PAM modules and threads)</span></span>
<span class="line"><span style="color:#B392F0;">KbdInteractiveAuthentication</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">no</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Kerberos options</span></span>
<span class="line"><span style="color:#6A737D;">#KerberosAuthentication no</span></span>
<span class="line"><span style="color:#6A737D;">#KerberosOrLocalPasswd yes</span></span>
<span class="line"><span style="color:#6A737D;">#KerberosTicketCleanup yes</span></span>
<span class="line"><span style="color:#6A737D;">#KerberosGetAFSToken no</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># GSSAPI options</span></span>
<span class="line"><span style="color:#6A737D;">#GSSAPIAuthentication no</span></span>
<span class="line"><span style="color:#6A737D;">#GSSAPICleanupCredentials yes</span></span>
<span class="line"><span style="color:#6A737D;">#GSSAPIStrictAcceptorCheck yes</span></span>
<span class="line"><span style="color:#6A737D;">#GSSAPIKeyExchange no</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Set this to &#39;yes&#39; to enable PAM authentication, account processing,</span></span>
<span class="line"><span style="color:#6A737D;"># and session processing. If this is enabled, PAM authentication will</span></span>
<span class="line"><span style="color:#6A737D;"># be allowed through the KbdInteractiveAuthentication and</span></span>
<span class="line"><span style="color:#6A737D;"># PasswordAuthentication.  Depending on your PAM configuration,</span></span>
<span class="line"><span style="color:#6A737D;"># PAM authentication via KbdInteractiveAuthentication may bypass</span></span>
<span class="line"><span style="color:#6A737D;"># the setting of &quot;PermitRootLogin prohibit-password&quot;.</span></span>
<span class="line"><span style="color:#6A737D;"># If you just want the PAM account and session checks to run without</span></span>
<span class="line"><span style="color:#6A737D;"># PAM authentication, then enable this but set PasswordAuthentication</span></span>
<span class="line"><span style="color:#6A737D;"># and KbdInteractiveAuthentication to &#39;no&#39;.</span></span>
<span class="line"><span style="color:#B392F0;">UsePAM</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">no</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#AllowAgentForwarding yes</span></span>
<span class="line"><span style="color:#6A737D;">#AllowTcpForwarding yes</span></span>
<span class="line"><span style="color:#6A737D;">#GatewayPorts no</span></span>
<span class="line"><span style="color:#B392F0;">X11Forwarding</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yes</span></span>
<span class="line"><span style="color:#6A737D;">#X11DisplayOffset 10</span></span>
<span class="line"><span style="color:#6A737D;">#X11UseLocalhost yes</span></span>
<span class="line"><span style="color:#6A737D;">#PermitTTY yes</span></span>
<span class="line"><span style="color:#B392F0;">PrintMotd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">no</span></span>
<span class="line"><span style="color:#6A737D;">#PrintLastLog yes</span></span>
<span class="line"><span style="color:#6A737D;">#TCPKeepAlive yes</span></span>
<span class="line"><span style="color:#6A737D;">#PermitUserEnvironment no</span></span>
<span class="line"><span style="color:#6A737D;">#Compression delayed</span></span>
<span class="line"><span style="color:#6A737D;">#ClientAliveInterval 0</span></span>
<span class="line"><span style="color:#6A737D;">#ClientAliveCountMax 3</span></span>
<span class="line"><span style="color:#6A737D;">#UseDNS no</span></span>
<span class="line"><span style="color:#6A737D;">#PidFile /run/sshd.pid</span></span>
<span class="line"><span style="color:#6A737D;">#MaxStartups 10:30:100</span></span>
<span class="line"><span style="color:#6A737D;">#PermitTunnel no</span></span>
<span class="line"><span style="color:#6A737D;">#ChrootDirectory none</span></span>
<span class="line"><span style="color:#6A737D;">#VersionAddendum none</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># no default banner path</span></span>
<span class="line"><span style="color:#6A737D;">#Banner none</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Allow client to pass locale environment variables</span></span>
<span class="line"><span style="color:#B392F0;">AcceptEnv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">LANG</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">LC_</span><span style="color:#79B8FF;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># override default of no subsystems</span></span>
<span class="line"><span style="color:#B392F0;">Subsystem</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sftp</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">/usr/lib/openssh/sftp-server</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Example of overriding settings on a per-user basis</span></span>
<span class="line"><span style="color:#6A737D;">#Match User anoncvs</span></span>
<span class="line"><span style="color:#6A737D;">#       X11Forwarding no</span></span>
<span class="line"><span style="color:#6A737D;">#       AllowTcpForwarding no</span></span>
<span class="line"><span style="color:#6A737D;">#       PermitTTY no</span></span>
<span class="line"><span style="color:#6A737D;">#       ForceCommand cvs server</span></span>
<span class="line"><span style="color:#B392F0;">PasswordAuthentication</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yes</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#Port 22</span></span>
<span class="line"><span style="color:#6A737D;">#AddressFamily any</span></span>
<span class="line"><span style="color:#6A737D;">#ListenAddress 0.0.0.0</span></span>
<span class="line"><span style="color:#6A737D;">#ListenAddress ::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#HostKey /etc/ssh/ssh_host_rsa_key</span></span>
<span class="line"><span style="color:#6A737D;">#HostKey /etc/ssh/ssh_host_ecdsa_key</span></span>
<span class="line"><span style="color:#6A737D;">#HostKey /etc/ssh/ssh_host_ed25519_key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Ciphers and keying</span></span>
<span class="line"><span style="color:#6A737D;">#RekeyLimit default none</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Logging</span></span>
<span class="line"><span style="color:#6A737D;">#SyslogFacility AUTH</span></span>
<span class="line"><span style="color:#6A737D;">#LogLevel INFO</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Authentication:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#LoginGraceTime 2m</span></span>
<span class="line"><span style="color:#6F42C1;">PermitRootLogin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yes</span></span>
<span class="line"><span style="color:#6A737D;">#StrictModes yes</span></span>
<span class="line"><span style="color:#6A737D;">#MaxAuthTries 6</span></span>
<span class="line"><span style="color:#6A737D;">#MaxSessions 10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">PubkeyAuthentication</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Expect .ssh/authorized_keys2 to be disregarded by default in future.</span></span>
<span class="line"><span style="color:#6F42C1;">AuthorizedKeysFile</span><span style="color:#24292E;">      </span><span style="color:#032F62;">.ssh/authorized_keys</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#AuthorizedPrincipalsFile none</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#AuthorizedKeysCommand none</span></span>
<span class="line"><span style="color:#6A737D;">#AuthorizedKeysCommandUser nobody</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># For this to work you will also need host keys in /etc/ssh/ssh_known_hosts</span></span>
<span class="line"><span style="color:#6A737D;">#HostbasedAuthentication no</span></span>
<span class="line"><span style="color:#6A737D;"># Change to yes if you don&#39;t trust ~/.ssh/known_hosts for</span></span>
<span class="line"><span style="color:#6A737D;"># HostbasedAuthentication</span></span>
<span class="line"><span style="color:#6A737D;">#IgnoreUserKnownHosts no</span></span>
<span class="line"><span style="color:#6A737D;"># Don&#39;t read the user&#39;s ~/.rhosts and ~/.shosts files</span></span>
<span class="line"><span style="color:#6A737D;">#IgnoreRhosts yes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># To disable tunneled clear text passwords, change to no here!</span></span>
<span class="line"><span style="color:#6A737D;">#PasswordAuthentication yes</span></span>
<span class="line"><span style="color:#6A737D;">#PermitEmptyPasswords no</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Change to yes to enable challenge-response passwords (beware issues with</span></span>
<span class="line"><span style="color:#6A737D;"># some PAM modules and threads)</span></span>
<span class="line"><span style="color:#6F42C1;">KbdInteractiveAuthentication</span><span style="color:#24292E;"> </span><span style="color:#032F62;">no</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Kerberos options</span></span>
<span class="line"><span style="color:#6A737D;">#KerberosAuthentication no</span></span>
<span class="line"><span style="color:#6A737D;">#KerberosOrLocalPasswd yes</span></span>
<span class="line"><span style="color:#6A737D;">#KerberosTicketCleanup yes</span></span>
<span class="line"><span style="color:#6A737D;">#KerberosGetAFSToken no</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># GSSAPI options</span></span>
<span class="line"><span style="color:#6A737D;">#GSSAPIAuthentication no</span></span>
<span class="line"><span style="color:#6A737D;">#GSSAPICleanupCredentials yes</span></span>
<span class="line"><span style="color:#6A737D;">#GSSAPIStrictAcceptorCheck yes</span></span>
<span class="line"><span style="color:#6A737D;">#GSSAPIKeyExchange no</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Set this to &#39;yes&#39; to enable PAM authentication, account processing,</span></span>
<span class="line"><span style="color:#6A737D;"># and session processing. If this is enabled, PAM authentication will</span></span>
<span class="line"><span style="color:#6A737D;"># be allowed through the KbdInteractiveAuthentication and</span></span>
<span class="line"><span style="color:#6A737D;"># PasswordAuthentication.  Depending on your PAM configuration,</span></span>
<span class="line"><span style="color:#6A737D;"># PAM authentication via KbdInteractiveAuthentication may bypass</span></span>
<span class="line"><span style="color:#6A737D;"># the setting of &quot;PermitRootLogin prohibit-password&quot;.</span></span>
<span class="line"><span style="color:#6A737D;"># If you just want the PAM account and session checks to run without</span></span>
<span class="line"><span style="color:#6A737D;"># PAM authentication, then enable this but set PasswordAuthentication</span></span>
<span class="line"><span style="color:#6A737D;"># and KbdInteractiveAuthentication to &#39;no&#39;.</span></span>
<span class="line"><span style="color:#6F42C1;">UsePAM</span><span style="color:#24292E;"> </span><span style="color:#032F62;">no</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#AllowAgentForwarding yes</span></span>
<span class="line"><span style="color:#6A737D;">#AllowTcpForwarding yes</span></span>
<span class="line"><span style="color:#6A737D;">#GatewayPorts no</span></span>
<span class="line"><span style="color:#6F42C1;">X11Forwarding</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yes</span></span>
<span class="line"><span style="color:#6A737D;">#X11DisplayOffset 10</span></span>
<span class="line"><span style="color:#6A737D;">#X11UseLocalhost yes</span></span>
<span class="line"><span style="color:#6A737D;">#PermitTTY yes</span></span>
<span class="line"><span style="color:#6F42C1;">PrintMotd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">no</span></span>
<span class="line"><span style="color:#6A737D;">#PrintLastLog yes</span></span>
<span class="line"><span style="color:#6A737D;">#TCPKeepAlive yes</span></span>
<span class="line"><span style="color:#6A737D;">#PermitUserEnvironment no</span></span>
<span class="line"><span style="color:#6A737D;">#Compression delayed</span></span>
<span class="line"><span style="color:#6A737D;">#ClientAliveInterval 0</span></span>
<span class="line"><span style="color:#6A737D;">#ClientAliveCountMax 3</span></span>
<span class="line"><span style="color:#6A737D;">#UseDNS no</span></span>
<span class="line"><span style="color:#6A737D;">#PidFile /run/sshd.pid</span></span>
<span class="line"><span style="color:#6A737D;">#MaxStartups 10:30:100</span></span>
<span class="line"><span style="color:#6A737D;">#PermitTunnel no</span></span>
<span class="line"><span style="color:#6A737D;">#ChrootDirectory none</span></span>
<span class="line"><span style="color:#6A737D;">#VersionAddendum none</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># no default banner path</span></span>
<span class="line"><span style="color:#6A737D;">#Banner none</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Allow client to pass locale environment variables</span></span>
<span class="line"><span style="color:#6F42C1;">AcceptEnv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">LANG</span><span style="color:#24292E;"> </span><span style="color:#032F62;">LC_</span><span style="color:#005CC5;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># override default of no subsystems</span></span>
<span class="line"><span style="color:#6F42C1;">Subsystem</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sftp</span><span style="color:#24292E;">  </span><span style="color:#032F62;">/usr/lib/openssh/sftp-server</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Example of overriding settings on a per-user basis</span></span>
<span class="line"><span style="color:#6A737D;">#Match User anoncvs</span></span>
<span class="line"><span style="color:#6A737D;">#       X11Forwarding no</span></span>
<span class="line"><span style="color:#6A737D;">#       AllowTcpForwarding no</span></span>
<span class="line"><span style="color:#6A737D;">#       PermitTTY no</span></span>
<span class="line"><span style="color:#6A737D;">#       ForceCommand cvs server</span></span>
<span class="line"><span style="color:#6F42C1;">PasswordAuthentication</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yes</span></span></code></pre></div>`,15),o=[p];function t(c,i,r,y,A,d){return n(),a("div",null,o)}const D=s(e,[["render",t]]);export{u as __pageData,D as default};
