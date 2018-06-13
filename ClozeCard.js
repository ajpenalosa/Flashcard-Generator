function ClozeCard( text, cloze ) {
    this.fullText = text;
    this.cloze = cloze;
    this.partial = text - cloze; //??????
}

module.exports = ClozeCard;