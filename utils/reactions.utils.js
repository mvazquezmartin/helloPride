const reactions = () => {
  const reactionsEmoji = ['🌈', '🏳️‍🌈', '👬', '💅', '🍌', '👨‍❤️‍💋‍👨'];
  const shuffledReactions = reactionsEmoji.sort(() => Math.random() - 0.5);

  return shuffledReactions;
};

module.exports = reactions;
