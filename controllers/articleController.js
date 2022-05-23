const sendEmail = require("../email");
const { Article } = require("../models");
const { Comment, User, Role } = require("../models");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function showArticle(req, res) {
  const options = { baseUrl: req.baseUrl };

  const article = await Article.findByPk(req.params.id, {
    include: { model: User, include: { model: Role } },
  });
  const comments = await Comment.findAll({
    where: { articleId: req.params.id },
    include: {
      model: User,
      include: {
        model: Role,
      },
    },
  });

  // let canEdit = false;
  // if (req.isAuthenticated()) {
  //   const userRole = await User.findOne({
  //     where: { id: req.user.id },
  //     include: { model: Role },
  //   }).role.role;
  //   if (
  //     userRole === "Administrador" ||
  //     userRole === "Editor" ||
  //     (userRole === "Escritor" && article.user.id === req.user.id)
  //   ) {
  //     let canEdit = true;
  //   }
  //   console.log(1, userRole);
  //   console.log(3, req.user.id);
  // }
  // options["canEdit"] = canEdit;
  // console.log(4, options);
  // console.log(req.isAuthenticated());
  res.render("article", { article, comments, options });
}

async function postComment(req, res) {
  const newComment = await Comment.create({
    content: req.body.contentComment,
    articleId: req.params.id,
    creationDate: Date.now(),
    userId: req.user.id,
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
  showArticle,
  postComment,
  create,
  store,
  edit,
  update,
  destroy,
};
