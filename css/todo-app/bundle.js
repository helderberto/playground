"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var todo = function todo(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };

    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return { ...state,
        completed: !state.completed
      };

    default:
      return state;
  }
};

var todos = function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_TODO':
      return [].concat(_toConsumableArray(state), [todo(undefined, action)]);

    case 'TOGGLE_TODO':
      return state.map(function (t) {
        return todo(t, action);
      });

    default:
      return state;
  }
};

var visibilityFilter = function visibilityFilter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'SHOW_ALL';
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;

    default:
      return state;
  }
};

var _Redux = Redux,
    combineReducers = _Redux.combineReducers;
var todoApp = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
});
var nextTodoId = 0;

var addTodo = function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: text
  };
};

var toggleTodo = function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id: id
  };
};

var setVisibilityFilter = function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter: filter
  };
};

var _React = React,
    Component = _React.Component;
var _ReactRedux = ReactRedux,
    Provider = _ReactRedux.Provider,
    connect = _ReactRedux.connect;

var Link = function Link(_ref) {
  var active = _ref.active,
      children = _ref.children,
      _onClick = _ref.onClick;

  if (active) {
    return /*#__PURE__*/React.createElement("span", null, children);
  }

  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();

      _onClick();
    }
  }, children);
};

var mapStateToLinkProps = function mapStateToLinkProps(state, ownProps) {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

var mapDispatchToLinkProps = function mapDispatchToLinkProps(dispatch, ownProps) {
  return {
    onClick: function onClick() {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

var FilterLink = connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link);

var Footer = function Footer() {
  return /*#__PURE__*/React.createElement("p", null, "Show:", ' ', /*#__PURE__*/React.createElement(FilterLink, {
    filter: "SHOW_ALL"
  }, "All"), ', ', /*#__PURE__*/React.createElement(FilterLink, {
    filter: "SHOW_ACTIVE"
  }, "Active"), ', ', /*#__PURE__*/React.createElement(FilterLink, {
    filter: "SHOW_COMPLETED"
  }, "Completed"));
};

var Todo = function Todo(_ref2) {
  var onClick = _ref2.onClick,
      completed = _ref2.completed,
      text = _ref2.text;
  return /*#__PURE__*/React.createElement("li", {
    onClick: onClick,
    style: {
      textDecoration: completed ? 'line-through' : 'none'
    }
  }, text);
};

var TodoList = function TodoList(_ref3) {
  var todos = _ref3.todos,
      onTodoClick = _ref3.onTodoClick;
  return /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement(Todo, _extends({
      key: todo.id
    }, todo, {
      onClick: function onClick() {
        return onTodoClick(todo.id);
      }
    }));
  }));
};

var AddTodo = function AddTodo(_ref4) {
  var dispatch = _ref4.dispatch;
  var input;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    ref: function ref(node) {
      input = node;
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      dispatch(addTodo(input.value));
      input.value = '';
    }
  }, "Add Todo"));
};

AddTodo = connect()(AddTodo);

var getVisibleTodos = function getVisibleTodos(todos, filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;

    case 'SHOW_COMPLETED':
      return todos.filter(function (t) {
        return t.completed;
      });

    case 'SHOW_ACTIVE':
      return todos.filter(function (t) {
        return !t.completed;
      });
  }
};

var mapStateToTodoListProps = function mapStateToTodoListProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

var mapDispatchToTodoListProps = function mapDispatchToTodoListProps(dispatch) {
  return {
    onTodoClick: function onTodoClick(id) {
      dispatch(toggleTodo(id));
    }
  };
};

var VisibleTodoList = connect(mapStateToTodoListProps, mapDispatchToTodoListProps)(TodoList);

var TodoApp = function TodoApp() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AddTodo, null), /*#__PURE__*/React.createElement(VisibleTodoList, null), /*#__PURE__*/React.createElement(Footer, null));
};

var _Redux2 = Redux,
    createStore = _Redux2.createStore;
ReactDOM.render( /*#__PURE__*/React.createElement(Provider, {
  store: createStore(todoApp)
}, /*#__PURE__*/React.createElement(TodoApp, null)), document.getElementById('root'));
