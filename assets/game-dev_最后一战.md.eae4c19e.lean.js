import{_ as s,o as t,c as r,k as e}from"./chunks/framework.981c3621.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"game-dev/最后一战.md","filePath":"game-dev/最后一战.md"}'),n={name:"game-dev/最后一战.md"},o=e("p",null,"服务端 vs2010+mysql 步骤 1",-1),a=e("p",null,"在进行配置前先编下 Server\\UCore\\project\\win Ucodebase（编译release版本） (1) 数据库部署mysql Server\\Bin\\x64\\Release\\dbsql: 修改Rebuild.bat里的mysql 权限密码 修改 dbsql/grantuser.sql 授权密码 (将-uroot -p123321，改成你自己的数据库名称和密码) 运行sql文件 导入dbsql/createdb.sql (创建database) 导入dbsql/Rebuild.bat (数据表格导入到创建的数据库中)",-1),l=e("p",null,"(2) 修改Server\\Bin\\x64\\Release数据库配置 修改CSConfig/DBConfig.xml 内DB ip/user/password (测试127.0.0.1成功) 修改LGCfg/DBConfig.xml 内DB ip/user/password (测试127.0.0.1成功)",-1),i=e("p",null,"(3)启动服务器(Server\\Bin\\x64\\Release) 配置服务器列表 LSConfig/Serverlist.ini 运行\\Bin\\x64\\Release\\start.bat",-1),d=e("p",null,'客户端 u3d(4.0+) (3) 配置连接服务器地址(此处需要改动为服务器所在IP/PORT) Client\\Assets\\Scripts: JxBlGame.cs |-->public string LoginServerAdress = "192.168.1.54"; |-->public int LoginServerPort = 49996;',-1),c=e("p",null,"(4) 指定了服务器列表里选择的服务器(此处不需要改动) Client\\Assets\\Scripts\\GameCtrl LoginCtrl.cs |->NetworkManager.Instance.Init(JxBlGame.Instance.LoginServerAdress,49996,NetworkManager.ServerType.LoginServer);",-1),_=e("p",null,"此外:修改",-1),p=[o,a,l,i,d,c,_];function u(m,g,v,S,b,f){return t(),r("div",null,p)}const x=s(n,[["render",u]]);export{h as __pageData,x as default};
