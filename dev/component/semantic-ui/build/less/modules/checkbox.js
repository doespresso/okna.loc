/*
 * # Semantic - Checkbox
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

;(function ( $, window, document, undefined ) {

$.fn.checkbox = function(parameters) {
  var
    $allModules    = $(this),
<<<<<<< HEAD

    settings       = $.extend(true, {}, $.fn.checkbox.settings, parameters),

    className      = settings.className,
    namespace      = settings.namespace,
    error          = settings.error,

    eventNamespace  = '.' + namespace,
    moduleNamespace = 'module-' + namespace,

=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
    moduleSelector = $allModules.selector || '',

    time           = new Date().getTime(),
    performance    = [],

    query          = arguments[0],
    methodInvoked  = (typeof query == 'string'),
    queryArguments = [].slice.call(arguments, 1),
<<<<<<< HEAD
    invokedResponse
=======
    returnedValue
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
  ;

  $allModules
    .each(function() {
      var
<<<<<<< HEAD
=======
        settings        = $.extend(true, {}, $.fn.checkbox.settings, parameters),

        className       = settings.className,
        namespace       = settings.namespace,
        error           = settings.error,

        eventNamespace  = '.' + namespace,
        moduleNamespace = 'module-' + namespace,

>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
        $module         = $(this),
        $label          = $(this).next(settings.selector.label).first(),
        $input          = $(this).find(settings.selector.input),

        selector        = $module.selector || '',
        instance        = $module.data(moduleNamespace),

        element         = this,
        module
      ;

      module      = {

        initialize: function() {
          module.verbose('Initializing checkbox', settings);
          if(settings.context && selector !== '') {
            module.verbose('Adding delegated events');
            $(element, settings.context)
              .on(selector, 'click' + eventNamespace, module.toggle)
              .on(selector + ' + ' + settings.selector.label, 'click' + eventNamespace, module.toggle)
            ;
          }
          else {
            $module
              .on('click' + eventNamespace, module.toggle)
              .data(moduleNamespace, module)
            ;
            $label
              .on('click' + eventNamespace, module.toggle)
            ;
          }
          module.instantiate();
        },

        instantiate: function() {
          module.verbose('Storing instance of module', module);
          instance = module;
          $module
            .data(moduleNamespace, module)
          ;
        },

        destroy: function() {
          module.verbose('Destroying previous module');
          $module
            .off(eventNamespace)
            .removeData(moduleNamespace)
          ;
        },

        is: {
          radio: function() {
            return $module.hasClass(className.radio);
<<<<<<< HEAD
=======
          },
          enabled: function() {
            return $input.prop('checked') !== undefined && $input.prop('checked');
          },
          disabled: function() {
            return !module.is.enabled();
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
          }
        },

        can: {
          disable: function() {
            return (typeof settings.required === 'boolean')
              ? settings.required
              : !module.is.radio()
            ;
          }
        },

        enable: function() {
<<<<<<< HEAD
          module.debug('Enabling checkbox');
=======
          module.debug('Enabling checkbox', $input);
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
          $input
            .prop('checked', true)
          ;
          $.proxy(settings.onChange, $input.get())();
          $.proxy(settings.onEnable, $input.get())();
        },

        disable: function() {
          module.debug('Disabling checkbox');
          $input
            .prop('checked', false)
          ;
          $.proxy(settings.onChange, $input.get())();
          $.proxy(settings.onDisable, $input.get())();
        },

        toggle: function(event) {
          module.verbose('Determining new checkbox state');
<<<<<<< HEAD
          if($input.prop('checked') === undefined || !$input.prop('checked')) {
            module.enable();
          }
          else if( module.can.disable() ) {
=======
          if( module.is.disabled() ) {
            module.enable();
          }
          else if( module.is.enabled() && module.can.disable() ) {
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
            module.disable();
          }
        },
        setting: function(name, value) {
<<<<<<< HEAD
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, settings, name);
            }
            else {
              settings[name] = value;
            }
=======
          if( $.isPlainObject(name) ) {
            $.extend(true, settings, name);
          }
          else if(value !== undefined) {
            settings[name] = value;
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
          }
          else {
            return settings[name];
          }
        },
        internal: function(name, value) {
<<<<<<< HEAD
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, module, name);
            }
            else {
              module[name] = value;
            }
=======
          if( $.isPlainObject(name) ) {
            $.extend(true, module, name);
          }
          else if(value !== undefined) {
            module[name] = value;
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
          }
          else {
            return module[name];
          }
        },
        debug: function() {
          if(settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.debug.apply(console, arguments);
            }
          }
        },
        verbose: function() {
          if(settings.verbose && settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.verbose = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.verbose.apply(console, arguments);
            }
          }
        },
        error: function() {
          module.error = Function.prototype.bind.call(console.error, console, settings.name + ':');
          module.error.apply(console, arguments);
        },
        performance: {
          log: function(message) {
            var
              currentTime,
              executionTime,
              previousTime
            ;
            if(settings.performance) {
              currentTime   = new Date().getTime();
              previousTime  = time || currentTime;
              executionTime = currentTime - previousTime;
              time          = currentTime;
              performance.push({
                'Element'        : element,
                'Name'           : message[0],
                'Arguments'      : [].slice.call(message, 1) || '',
                'Execution Time' : executionTime
              });
            }
            clearTimeout(module.performance.timer);
            module.performance.timer = setTimeout(module.performance.display, 100);
          },
          display: function() {
            var
              title = settings.name + ':',
              totalTime = 0
            ;
            time = false;
            clearTimeout(module.performance.timer);
            $.each(performance, function(index, data) {
              totalTime += data['Execution Time'];
            });
            title += ' ' + totalTime + 'ms';
            if(moduleSelector) {
              title += ' \'' + moduleSelector + '\'';
            }
<<<<<<< HEAD
            if($allModules.size() > 1) {
              title += ' ' + '(' + $allModules.size() + ')';
            }
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
            if( (console.group !== undefined || console.table !== undefined) && performance.length > 0) {
              console.groupCollapsed(title);
              if(console.table) {
                console.table(performance);
              }
              else {
                $.each(performance, function(index, data) {
                  console.log(data['Name'] + ': ' + data['Execution Time']+'ms');
                });
              }
              console.groupEnd();
            }
            performance = [];
          }
        },
        invoke: function(query, passedArguments, context) {
          var
<<<<<<< HEAD
=======
            object = instance,
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
            maxDepth,
            found,
            response
          ;
          passedArguments = passedArguments || queryArguments;
          context         = element         || context;
<<<<<<< HEAD
          if(typeof query == 'string' && instance !== undefined) {
=======
          if(typeof query == 'string' && object !== undefined) {
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;
            $.each(query, function(depth, value) {
              var camelCaseValue = (depth != maxDepth)
                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                : query
              ;
<<<<<<< HEAD
              if( $.isPlainObject( instance[value] ) && (depth != maxDepth) ) {
                instance = instance[value];
              }
              else if( $.isPlainObject( instance[camelCaseValue] ) && (depth != maxDepth) ) {
                instance = instance[camelCaseValue];
              }
              else if( instance[value] !== undefined ) {
                found = instance[value];
                return false;
              }
              else if( instance[camelCaseValue] !== undefined ) {
                found = instance[camelCaseValue];
                return false;
              }
              else {
                module.error(error.method);
=======
              if( $.isPlainObject( object[camelCaseValue] ) && (depth != maxDepth) ) {
                object = object[camelCaseValue];
              }
              else if( object[camelCaseValue] !== undefined ) {
                found = object[camelCaseValue];
                return false;
              }
              else if( $.isPlainObject( object[value] ) && (depth != maxDepth) ) {
                object = object[value];
              }
              else if( object[value] !== undefined ) {
                found = object[value];
                return false;
              }
              else {
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
                return false;
              }
            });
          }
          if ( $.isFunction( found ) ) {
            response = found.apply(context, passedArguments);
          }
          else if(found !== undefined) {
            response = found;
          }
<<<<<<< HEAD
          if($.isArray(invokedResponse)) {
            invokedResponse.push(response);
          }
          else if(typeof invokedResponse == 'string') {
            invokedResponse = [invokedResponse, response];
          }
          else if(response !== undefined) {
            invokedResponse = response;
=======
          if($.isArray(returnedValue)) {
            returnedValue.push(response);
          }
          else if(returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          }
          else if(response !== undefined) {
            returnedValue = response;
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
          }
          return found;
        }
      };

      if(methodInvoked) {
        if(instance === undefined) {
          module.initialize();
        }
        module.invoke(query);
      }
      else {
        if(instance !== undefined) {
          module.destroy();
        }
        module.initialize();
      }
    })
  ;

<<<<<<< HEAD
  return (invokedResponse !== undefined)
    ? invokedResponse
=======
  return (returnedValue !== undefined)
    ? returnedValue
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
    : this
  ;
};

$.fn.checkbox.settings = {

  name        : 'Checkbox',
  namespace   : 'checkbox',

  verbose     : true,
  debug       : true,
  performance : true,

  // delegated event context
  context     : false,
  required    : 'auto',

  onChange    : function(){},
  onEnable    : function(){},
  onDisable   : function(){},

  error     : {
    method   : 'The method you called is not defined.'
  },

  selector : {
<<<<<<< HEAD
    input  : 'input[type=checkbox]',
=======
    input  : 'input[type=checkbox], input[type=radio]',
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
    label  : 'label'
  },

  className : {
    radio  : 'radio'
  }

};

})( jQuery, window , document );
