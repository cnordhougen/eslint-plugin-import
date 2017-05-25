'use strict';

var _resolve = require('eslint-module-utils/resolve');

var _resolve2 = _interopRequireDefault(_resolve);

var _ModuleCache = require('eslint-module-utils/ModuleCache');

var _ModuleCache2 = _interopRequireDefault(_ModuleCache);

var _moduleVisitor = require('eslint-module-utils/moduleVisitor');

var _moduleVisitor2 = _interopRequireDefault(_moduleVisitor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  meta: {
    schema: [(0, _moduleVisitor.makeOptionsSchema)({
      caseSensitive: { type: 'boolean', default: true }
    })]
  },

  create: function (context) {

    function checkSourceValue(source) {
      const shouldCheckCase = !_resolve.CASE_SENSITIVE_FS && (!context.options[0] || context.options[0].caseSensitive !== false);

      const resolvedPath = (0, _resolve2.default)(source.value.replace(/![^!]+$/, ''), context);

      if (resolvedPath === undefined) {
        context.report(source, `Unable to resolve path to module '${source.value}'.`);
      } else if (shouldCheckCase) {
        const cacheSettings = _ModuleCache2.default.getSettings(context.settings);
        if (!(0, _resolve.fileExistsWithCaseSync)(resolvedPath, cacheSettings)) {
          context.report(source, `Casing of ${source.value} does not match the underlying filesystem.`);
        }
      }
    }

    return (0, _moduleVisitor2.default)(checkSourceValue, context.options[0]);
  }
}; /**
    * @fileOverview Ensures that an imported path exists, given resolution rules.
    * @author Ben Mosher
    */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25vLXVucmVzb2x2ZWQuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIm1ldGEiLCJzY2hlbWEiLCJjYXNlU2Vuc2l0aXZlIiwidHlwZSIsImRlZmF1bHQiLCJjcmVhdGUiLCJjb250ZXh0IiwiY2hlY2tTb3VyY2VWYWx1ZSIsInNvdXJjZSIsInNob3VsZENoZWNrQ2FzZSIsIm9wdGlvbnMiLCJyZXNvbHZlZFBhdGgiLCJ2YWx1ZSIsInJlcGxhY2UiLCJ1bmRlZmluZWQiLCJyZXBvcnQiLCJjYWNoZVNldHRpbmdzIiwiZ2V0U2V0dGluZ3MiLCJzZXR0aW5ncyJdLCJtYXBwaW5ncyI6Ijs7QUFLQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUlBQSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLFFBQU07QUFDSkMsWUFBUSxDQUFFLHNDQUFrQjtBQUMxQkMscUJBQWUsRUFBRUMsTUFBTSxTQUFSLEVBQW1CQyxTQUFTLElBQTVCO0FBRFcsS0FBbEIsQ0FBRjtBQURKLEdBRFM7O0FBT2ZDLFVBQVEsVUFBVUMsT0FBVixFQUFtQjs7QUFFekIsYUFBU0MsZ0JBQVQsQ0FBMEJDLE1BQTFCLEVBQWtDO0FBQ2hDLFlBQU1DLGtCQUFrQixnQ0FDckIsQ0FBQ0gsUUFBUUksT0FBUixDQUFnQixDQUFoQixDQUFELElBQXVCSixRQUFRSSxPQUFSLENBQWdCLENBQWhCLEVBQW1CUixhQUFuQixLQUFxQyxLQUR2QyxDQUF4Qjs7QUFHQSxZQUFNUyxlQUFlLHVCQUFRSCxPQUFPSSxLQUFQLENBQWFDLE9BQWIsQ0FBcUIsU0FBckIsRUFBZ0MsRUFBaEMsQ0FBUixFQUE2Q1AsT0FBN0MsQ0FBckI7O0FBRUEsVUFBSUssaUJBQWlCRyxTQUFyQixFQUFnQztBQUM5QlIsZ0JBQVFTLE1BQVIsQ0FBZVAsTUFBZixFQUNHLHFDQUFvQ0EsT0FBT0ksS0FBTSxJQURwRDtBQUVELE9BSEQsTUFLSyxJQUFJSCxlQUFKLEVBQXFCO0FBQ3hCLGNBQU1PLGdCQUFnQixzQkFBWUMsV0FBWixDQUF3QlgsUUFBUVksUUFBaEMsQ0FBdEI7QUFDQSxZQUFJLENBQUMscUNBQXVCUCxZQUF2QixFQUFxQ0ssYUFBckMsQ0FBTCxFQUEwRDtBQUN4RFYsa0JBQVFTLE1BQVIsQ0FBZVAsTUFBZixFQUNHLGFBQVlBLE9BQU9JLEtBQU0sNENBRDVCO0FBRUQ7QUFFRjtBQUNGOztBQUVELFdBQU8sNkJBQWNMLGdCQUFkLEVBQWdDRCxRQUFRSSxPQUFSLENBQWdCLENBQWhCLENBQWhDLENBQVA7QUFFRDtBQWhDYyxDQUFqQixDLENBWEEiLCJmaWxlIjoicnVsZXMvbm8tdW5yZXNvbHZlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlldyBFbnN1cmVzIHRoYXQgYW4gaW1wb3J0ZWQgcGF0aCBleGlzdHMsIGdpdmVuIHJlc29sdXRpb24gcnVsZXMuXG4gKiBAYXV0aG9yIEJlbiBNb3NoZXJcbiAqL1xuXG5pbXBvcnQgcmVzb2x2ZSwgeyBDQVNFX1NFTlNJVElWRV9GUywgZmlsZUV4aXN0c1dpdGhDYXNlU3luYyB9IGZyb20gJ2VzbGludC1tb2R1bGUtdXRpbHMvcmVzb2x2ZSdcbmltcG9ydCBNb2R1bGVDYWNoZSBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL01vZHVsZUNhY2hlJ1xuaW1wb3J0IG1vZHVsZVZpc2l0b3IsIHsgbWFrZU9wdGlvbnNTY2hlbWEgfSBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL21vZHVsZVZpc2l0b3InXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIHNjaGVtYTogWyBtYWtlT3B0aW9uc1NjaGVtYSh7XG4gICAgICBjYXNlU2Vuc2l0aXZlOiB7IHR5cGU6ICdib29sZWFuJywgZGVmYXVsdDogdHJ1ZSB9LFxuICAgIH0pXSxcbiAgfSxcblxuICBjcmVhdGU6IGZ1bmN0aW9uIChjb250ZXh0KSB7XG5cbiAgICBmdW5jdGlvbiBjaGVja1NvdXJjZVZhbHVlKHNvdXJjZSkge1xuICAgICAgY29uc3Qgc2hvdWxkQ2hlY2tDYXNlID0gIUNBU0VfU0VOU0lUSVZFX0ZTICYmXG4gICAgICAgICghY29udGV4dC5vcHRpb25zWzBdIHx8IGNvbnRleHQub3B0aW9uc1swXS5jYXNlU2Vuc2l0aXZlICE9PSBmYWxzZSlcblxuICAgICAgY29uc3QgcmVzb2x2ZWRQYXRoID0gcmVzb2x2ZShzb3VyY2UudmFsdWUucmVwbGFjZSgvIVteIV0rJC8sICcnKSwgY29udGV4dClcblxuICAgICAgaWYgKHJlc29sdmVkUGF0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRleHQucmVwb3J0KHNvdXJjZSxcbiAgICAgICAgICBgVW5hYmxlIHRvIHJlc29sdmUgcGF0aCB0byBtb2R1bGUgJyR7c291cmNlLnZhbHVlfScuYClcbiAgICAgIH1cblxuICAgICAgZWxzZSBpZiAoc2hvdWxkQ2hlY2tDYXNlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlU2V0dGluZ3MgPSBNb2R1bGVDYWNoZS5nZXRTZXR0aW5ncyhjb250ZXh0LnNldHRpbmdzKVxuICAgICAgICBpZiAoIWZpbGVFeGlzdHNXaXRoQ2FzZVN5bmMocmVzb2x2ZWRQYXRoLCBjYWNoZVNldHRpbmdzKSkge1xuICAgICAgICAgIGNvbnRleHQucmVwb3J0KHNvdXJjZSxcbiAgICAgICAgICAgIGBDYXNpbmcgb2YgJHtzb3VyY2UudmFsdWV9IGRvZXMgbm90IG1hdGNoIHRoZSB1bmRlcmx5aW5nIGZpbGVzeXN0ZW0uYClcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vZHVsZVZpc2l0b3IoY2hlY2tTb3VyY2VWYWx1ZSwgY29udGV4dC5vcHRpb25zWzBdKVxuXG4gIH0sXG59XG5cbiJdfQ==