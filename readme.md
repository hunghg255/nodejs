- Lan dau GET 200
- lan 2 reload ma k co thay doi se la 304


- parameters: /search?q="test"&q1="test2"
- params = q, dat nhu nao cung duoc
- req.query
- FormData => req.body => dung middlerware de doc dc body => cai bodyParse => nhung express 4.16 da tich hop
- /:slug => req.params.slug
- ?q=2&q1=3 => req.query => GET
    => req.body => POST


* GET: server => client
* POST: client => server
- neu tao router POST search thi khi form POST thi reload lai trang van la POST

* Mo hinh MVC - Model, View, Control
* Routes, Controllers
* action => dispatch => function handler
* app.get('/', (req, res) => {})



# Install mongdodb ubuntu

install mongodb compass
install MongoDB Community Server

tao /data/db
chay sudo chmod 777 /data/d
chay mongod de start server
vao mongodb commpass connect: mongodb://127.0.0.1:27017

muon doi noi luu tru data
chay sudo chmod 777 ~/Documents/NameFolder

// Code formatter
prettier:
lint-staged: chay command chua add vao git => chay cai nay => chay prettier cmd line
husky: cung cap git hook => trc khi add or push or commit => chay lint-staged

// ki thuat delete
- soft delete: xoa mem
- resotre delete: khoi phuc
- force delete: xoa tren database

Khi làm sản phẩm thì không nên mang ngôn ngữ kĩ thuật viết cho người dùng => ng dùng không hiểu


