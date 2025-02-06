/**
 * The command schemas:
 *
 * name: name of the command. (required)
 * execute: how the command be executed with the given parameters ...args. (required)
 * cooldown: time cooldown between each use (seconds). (required)
 * aliases: an alternate name of the command.
 * **/

const box = {
  name: 'boxrelease',
  aliases: 'brl',
  cooldown: 3 ,
  execute: async (message, args) => {
    /**
     * message.channel.sendSlash(name, ...args)
     * -> Takes 2 required parameter: the main commands and the arguments.
     * -> Each command choices are seperated with commas.
     * **/
    let box_num, release;
    // Regular expression to match the pattern a1, a2... e6
    const positionRegex = /^[a-e][1-6]$/;
    if (positionRegex.test(args[1]) || args[1] === 'all') {
      release = args[1];
      box_num = args[2] || '1';
    } else {
      box_num = args[1] || '1';
      release = args[2];
    }
    if (release === 'all') {
      release = generatePositions().join(' '); // Use the function from previous examples
    } else {
      release = generatePositions(release).join(' ');
    }
    try {
      await message.channel.sendSlash(process.env.MYUU_ID, 'box release', release, box_num);
    } catch (error) {
      console.error(`Error [box]: ${error}`); // Correct the template literal syntax
    }
  },
};

module.exports = box;

function generatePositions(stopPosition = 'e6') {
  const positions = [];
  const rows = ['a', 'b', 'c', 'd', 'e'];
  const cols = 6;

  for (let row = 0; row < rows.length; row++) {
    for (let col = 1; col <= cols; col++) {
      const position = `${rows[row]}${col}`;
      positions.push(position);

      // Check if we've reached the stopPosition
      if (position === stopPosition) {
        return positions;
      }
    }
  }

  return positions;
}
