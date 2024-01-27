const reactions = (returnSlice) => {
  const reactionsEmoji = ['🌈', '🏳️‍🌈', '👬', '💅', '🍌', '👨‍❤️‍💋‍👨'];
  const shuffledReactions = reactionsEmoji.sort(() => Math.random() - 0.5);

  if (returnSlice) {
    const numberSlice = Math.floor(Math.random() * reactionsEmoji.length) + 1;
    return shuffledReactions.slice(0, numberSlice);
  }
  return shuffledReactions;
};

module.exports = reactions;
