const {
  override,
  useBabelRc
} = require("customize-cra");

module.exports = override(
  // enable legacy decorators babel plugin
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useBabelRc()
);