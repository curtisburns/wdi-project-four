const Page = require('../models/page');

function pagesIndex(req, res, next) {
  Page.find()
    .then(pages => res.send(pages))
    .catch(next);
}

function pagesShow(req, res, next) {
  Page.findById(req.params.pageId)
    .then(page => res.send(page))
    .catch(next);
}

function pagesCreate(req, res, next) {
  Page.create(req.body)
    .then(page => res.json(page))
    .catch(next);
}

function pagesUpdate(req, res, next) {
  Page.findById(req.params.pageId)
    .then(page => page.set(req.body))
    .then(page => page.save())
    .then(page => res.json(page))
    .catch(next);
}

function pagesDelete(req, res, next) {
  Page.findById(req.params.pageId)
    .then(page => page.remove())
    .then(() => res.sendStatus(204)) // No content
    .catch(next);
}


module.exports = {
  index: pagesIndex,
  show: pagesShow,
  create: pagesCreate,
  update: pagesUpdate,
  delete: pagesDelete
};
