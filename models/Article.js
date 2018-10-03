import mongoose from 'mongoose';

const schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "Title is Required"
    },
    date: {
        type: Date,
        default: Date.now,
        required: "Date is Required"
    },
    url: {
        type: String,
        required: true,
        required: "URL is Required",
        unique: true
    }
});

const Article = mongoose.nodel('Article', ArticleSchema);

export default Article;