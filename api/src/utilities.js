const color = require('node-colorify');

const svc = {};

/**
 * An object of constants that represents message types.
 */
svc.TYPES = {
  'SUCCESS': 'green',
  'INFO': 'white',
  'ERROR': 'red',
  'WARNING': 'yellow'
};

/**
 * Paints the text with a specific color based on the type, such as "SUCCESS" or "ERROR", etc.
 * @param {string} message The message you wish to paint on the console.
 * @param {string} [type] OPTIONAL: Specifies the color of the font to paint on the console.  Defaults to "INFO".
 */
svc.log = (message, type = svc.TYPES.INFO) => {
  console.log(color.colorItSync(message, { 'fColor': type }));
};

module.exports = svc;
