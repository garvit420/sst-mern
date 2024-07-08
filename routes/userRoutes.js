const router = require("express").Router();
const userControllers = require("../controllers/userControllers");


router.post("/", userControllers.createUser);

// get route

router.get("/", userControllers.getallUsers);

// Get user by id

router.get("/:id", userControllers.getById);

// Update user

router.put("/:id", userControllers.updateUser);

/// Delete a Resource

router.delete("/:id", userControllers.deleteUser);


module.exports = router