const smallBlock = () => {
  const smallBlocks = document.querySelectorAll("small");

  const getSmallBlock = () => {
    smallBlocks.forEach((item, index) => {
      if (index === 2) {
        smallBlocks[index].remove();
      }
    });
  };

  setInterval(() => {
    getSmallBlock();
  }, 5000);
};
export default smallBlock;
