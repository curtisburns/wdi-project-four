const Page = require('../models/page');
const Course = require('../models/course');

function pagesIndex(req, res, next) {
  // Page.find()
  //   .then(pages => res.json(pages))
  //   .catch(next);
  // Will only need to find the pages that relate to a particular course,
  // never all of them.
  Course.findById(req.params.courseId)
    .populate('pages')
    .then(course => res.json(course.pages))
    .catch(next);
}

function pagesShow(req, res, next) {
  Page.findById(req.params.pageId)
    .then(page => res.json(page))
    .catch(next);
}

// Need to determine exactly what data to send back.
function pagesCreate(req, res, next) {
  let pageId;
  Page.create(req.body)
    .then(page => {
      pageId = page._id;
      return Course.findById(req.params.courseId);
    })
    .then(course => {
      course.pages.push(pageId);
      return course.save();
    })
    .then(() => Page.findById(pageId))
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
  let pageId;
  Page.findById(req.params.pageId)
    .then(page => page.remove())
    .then(() => Course.findById(req.params.courseId))
    .then((course) => {
      course.pages = course.pages.filter(page => page.toString() !== pageId);
      return course.save();
    })
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
