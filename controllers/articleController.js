const sendEmail = require("../email");
const { Article } = require("../models");
const { Comment } = require("../models");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {
  const options = { baseUrl: req.baseUrl };

  const article = await Article.findByPk(req.params.id);
  const comments = await Comment.findAll({ where: { articleId: req.params.id } });
  res.render("article", { article, comments, options });
}

async function postComment(req, res) {
  console.log(req.body);
  const newComment = await Comment.create({
    content: req.body.contentComment,
    articleId: req.params.id,
    creationDate: Date.now(),
  });
  res.redirect("/article/" + req.params.id);
}

// Show the form for creating a new resource
async function create(req, res) {
  sendEmail();
}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  postComment,
  create,
  store,
  edit,
  update,
  destroy,
};
