const hasSpecialRole = (msg) => {
  const member = msg.guild.members.cache.get(msg.author.id);
  if (member) {
    const roles = member.roles.cache.map((role) => role.name);
    return roles.includes('👨‍🦽 Los Mas Letales');
  }
  return false;
};

module.exports = hasSpecialRole;