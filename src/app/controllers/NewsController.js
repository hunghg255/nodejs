class NewsController {
  // TODO [GET] /news
  index(req, res) {
    res.render('news');
  }

  // TODO [GET] /news/:slug
  show(req, res) {
    res.send('NEW DETAILTS');
  }
}

module.exports = new NewsController();
