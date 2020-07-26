function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

const todo = (state, action) => {
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

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)];

    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));

    default:
      return state;
  }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;

    default:
      return state;
  }
};

const {
  combineReducers
} = Redux;
const todoApp = combineReducers({
  todos,
  visibilityFilter
});
let nextTodoId = 0;

const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  };
};

const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};

const {
  Component
} = React;
const {
  Provider,
  connect
} = ReactRedux;

const Radio = ({
  active,
  children,
  onChange
}) => {
  return /*#__PURE__*/React.createElement("label", {
    className: "filter"
  }, /*#__PURE__*/React.createElement("input", {
    checked: active,
    type: "radio",
    name: "filter",
    className: "filter__radio",
    onChange: e => {
      onChange();
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: `filter__label--${children.toLowerCase()}`
  }, children));
};

const mapStateToRadioProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToRadioProps = (dispatch, ownProps) => {
  return {
    onChange: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const FilterRadio = connect(mapStateToRadioProps, mapDispatchToRadioProps)(Radio);

const Footer = () => /*#__PURE__*/React.createElement("fieldset", {
  className: "filters"
}, /*#__PURE__*/React.createElement("legend", {
  className: "filters__title"
}, "Show:"), /*#__PURE__*/React.createElement(FilterRadio, {
  filter: "SHOW_ALL"
}, "All"), /*#__PURE__*/React.createElement(FilterRadio, {
  filter: "SHOW_ACTIVE"
}, "Active"), /*#__PURE__*/React.createElement(FilterRadio, {
  filter: "SHOW_COMPLETED"
}, "Completed"));

const Todo = ({
  onClick,
  completed,
  text
}) => /*#__PURE__*/React.createElement("li", {
  onClick: onClick,
  className: completed ? "todo-list__item--completed" : "todo-list__item--active"
}, text);

const TodoList = ({
  todos,
  onTodoClick
}) => /*#__PURE__*/React.createElement(ReactCSSTransitionGroup, {
  component: "ul",
  className: "todo-list",
  transitionName: "todo-transition",
  transitionEnterTimeout: 70,
  transitionLeaveTimeout: 70
}, todos.map(todo => /*#__PURE__*/React.createElement(Todo, _extends({
  key: todo.id
}, todo, {
  onClick: () => onTodoClick(todo.id)
}))));

let AddTodo = ({
  dispatch
}) => {
  let input;
  return /*#__PURE__*/React.createElement("div", {
    className: "add-todo"
  }, /*#__PURE__*/React.createElement("input", {
    ref: node => {
      input = node;
    },
    className: "add-todo__input",
    placeholder: "new todo",
    onKeyUp: e => {
      const RETURN_KEY_CODE = 13;

      if (e.keyCode === RETURN_KEY_CODE) {
        dispatch(addTodo(input.value));
        input.value = '';
      }
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      dispatch(addTodo(input.value));
      input.value = '';
    },
    className: "add-todo__button"
  }, "Add Todo"));
};

AddTodo = connect()(AddTodo);

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;

    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);

    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
};

const mapStateToTodoListProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToTodoListProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  };
};

const VisibleTodoList = connect(mapStateToTodoListProps, mapDispatchToTodoListProps)(TodoList);

const TodoApp = () => /*#__PURE__*/React.createElement("div", {
  className: "todo-app"
}, /*#__PURE__*/React.createElement(AddTodo, null), /*#__PURE__*/React.createElement(VisibleTodoList, null), /*#__PURE__*/React.createElement(Footer, null));

const {
  createStore
} = Redux;
ReactDOM.render( /*#__PURE__*/React.createElement(Provider, {
  store: createStore(todoApp)
}, /*#__PURE__*/React.createElement(TodoApp, null)), document.getElementById('root'));
