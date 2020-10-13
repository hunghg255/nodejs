const mongose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");
const Schema = mongose.Schema;

const Course = new Schema(
  {
    name: { type: String, maxlength: 255, required: true },
    description: { type: String, maxlength: 600 },
    image: { type: String, maxlength: 255 },
    videoId: { type: String, maxlength: 600 },
    level: { type: String, maxlength: 255 },
    slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true }
);

// add plugin
mongose.plugin(slug);
Course.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true, });

module.exports = mongose.model("Course", Course);
