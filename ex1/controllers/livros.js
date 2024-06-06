const livros = require('../models/livros');

module.exports.listarTudo = () => {
    const res = livros.find({}).exec();
    return res;
}

module.exports.findById = (id) => {
    const res = livros.findOne({ _id: id }).exec();
    return res;
}

module.exports.findByCharacter = (character) => {
    const res = livros.find({ characters: { $regex: new RegExp(character, 'i') } }).exec();
    return res;
};

module.exports.findByGenre = (genre) => {
    const res = livros.find({ genres: genre }).exec();
    return res;
};

module.exports.listarGenres = () => {
    const res = livros.distinct("genres").sort().exec();
    return res;
}

module.exports.listarCharacters = () => {
    const res = plantas.distinct("characters").sort().exec();
    return res;
}

module.exports.addLivro = (livro) => {
    return livros.create(livro);
}

module.exports.apagaLivro = (id) => {
    return livros.deleteOne({ _id: id });
}

module.exports.updateLivro = (id, novosDados) => {
    return livros.findByIdAndUpdate(id, novosDados, { new: true }).exec();
};